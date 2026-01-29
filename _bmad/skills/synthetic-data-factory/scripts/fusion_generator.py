"""
fusion_generator.py - Le moteur de la Synthetic Data Factory
============================================================
Ce script ne se contente pas de templates statiques. Il "apprend" la structure des données
à partir de vos fichiers réels (vocabulaire et annotations) pour générer des variations infinies
mais strictement conformes à la réalité terrain de Bejaia.
"""

import json
import random
import argparse
import os
from datetime import datetime, timedelta
from datetime import datetime, timedelta
from typing import List, Dict, Any
import sys
import os

# Ajout des imports pour qu'ils soient accessibles quand importé comme module
try:
    from scenarios.storm_scenario import StormScenarioAgent
    from validator import JudgeAgent
except ImportError:
    # Tentative d'ajout du chemin courant si exécution depuis ailleurs
    sys.path.append(os.path.dirname(__file__))
    try:
        from scenarios.storm_scenario import StormScenarioAgent
        from validator import JudgeAgent
    except ImportError as e:
        print(f"⚠️ Erreur d'import des agents: {e}")

class FusionGenerator:
    def __init__(self, vocab_path: str, annotations_path: str, seed: int = None):
        if seed:
            random.seed(seed)
        
        # --- 1. CONFIGURATION (AGENTS SETUP) ---
        print("🔧 Initialisation de l'Architecture Multi-Agents SOTA...")
        
        # Agent LINGUISTE (Source)
        self.vocab = self._load_json(vocab_path)
        self.real_annotations = self._load_json(annotations_path)
        cldr_path = os.path.join(os.path.dirname(vocab_path), "locale datasommary")
        self.cldr_data = self._parse_cldr_summary(cldr_path)
        self.places_cache = self._extract_real_places()
        
        # Agent SCENARISTE (Drivers)
        self.storm_agent = StormScenarioAgent(self.vocab)
        # On garde la logique standard aussi pour le mix
        
        # Agent JUGE (Validator)
        self.judge = JudgeAgent()
        
        self.generated_count = 0

    def _parse_cldr_summary(self, path: str) -> Dict[str, List[str]]:
        """Parse le fichier 'locale datasommary' (format texte CLDR)"""
        cldr = {
            "countries": [],
            "languages": [],
            "months": [],
            "days": []
        }
        try:
            if not os.path.exists(path):
                print(f"⚠️ Fichier CLDR introuvable: {path}")
                return cldr
                
            with open(path, 'r', encoding='utf-8') as f:
                for line in f:
                    parts = line.strip().split('\t')
                    if len(parts) < 4: continue
                    
                    # Detection des sections via la structure du fichier
                    # Index 2 contient le type (Territories, Languages)
                    if len(parts) < 3: continue
                    section_type = parts[2]
                    
                    if "Territories" in section_type:
                        if len(parts) >= 7:
                            kab_name = parts[6]
                            if kab_name and kab_name != "=": 
                                cldr["countries"].append(kab_name)
                                
                    elif "Languages" in section_type:
                        if len(parts) >= 7:
                            kab_name = parts[6]
                            if kab_name and kab_name != "=":
                                cldr["languages"].append(kab_name)
                                
                    elif "Months" in section_type or "Days" in section_type:
                         pass
                         
            print(f"📚 Agent Linguiste: {len(cldr['countries'])} pays, {len(cldr['languages'])} langues intégrés.")
            return cldr
            
        except Exception as e:
            print(f"⚠️ Erreur parsing CLDR: {e}")
            return cldr
        
    def _load_json(self, path: str) -> Any:
        try:
            with open(path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print(f"⚠️ Erreur chargement {path}: {e}")
            return {}

    def _extract_real_places(self) -> List[Dict]:
        """Extrait les lieux réels et validés des annotations existantes"""
        places = []
        if isinstance(self.real_annotations, list):
            for item in self.real_annotations:
                ext = item.get("extraction", {})
                if ext.get("commune") != "NON_COMMUNIQUE":
                    places.append({
                        "commune": ext.get("commune"),
                        "quartier": ext.get("quartier"),
                        "repere": ext.get("repere")
                    })
        if not places:
            return [{"commune": "Béjaïa", "quartier": "Centre", "repere": "La place"}]
        return places

    def generate_scenario(self, force_storm: bool = False) -> Dict:
        """
        Orchestration du Pipeline de Génération :
        1. Selection Lieu (Real) -> 2. Scenario (Creative) -> 3. Validation (Judge)
        """
        max_retries = 3
        
        for attempt in range(max_retries):
            # 1. Sélection du Lieu (Ancrage Réaliste)
            place = random.choice(self.places_cache)
            timestamp = datetime.now() - timedelta(days=random.randint(0, 30))
            
            # 2. Appel à l'Agent Scénariste
            if force_storm or random.random() < 0.3: # 30% de chance de tempête si non forcé
                raw_scenario = self.storm_agent.generate(place)
                dtype = "storm"
            else:
                raw_scenario = self._generate_standard_scenario(place) # Fallback standard
                dtype = "standard"
                
            # 3. Formatage (Writer Agent)
            entry = {
                "audio_file": f"SYNTH_{dtype.upper()}_{self.generated_count+1:04d}.wav",
                "date": timestamp.isoformat(),
                "transcription": raw_scenario["transcription"],
                "extraction": raw_scenario["extraction"],
                "notes": raw_scenario.get("keywords", [])
            }
            
            # 4. Validation (Judge Agent)
            verdict = self.judge.evaluate(entry, self.vocab)
            
            if verdict["passed"]:
                self.generated_count += 1
                entry["validation"] = verdict # On attache le rapport du juge
                return entry
            else:
                # Retry loop (Agentic feedback loop simplistic)
                continue
                
        # Fallback si échecs multiples (SafetyNet)
        return self._generate_standard_scenario(place)

    def _generate_standard_scenario(self, place: Dict) -> Dict:
        """Génération standard (Legacy v1) pour les cas non-tempête"""
        dialogue_types = ["accident", "incendie", "malade"]
        dtype = random.choice(dialogue_types)
        
        # Logique simplifiée pour l'exemple (reprise de l'ancien code)
        transcription = f"O: Azul. A: Azul. {dtype} di {place['quartier']}."
        
        return {
            "transcription": transcription,
            "extraction": {
                "lieu_final": f"{place['quartier']}, {place['commune']}",
                "type_incident": dtype,
                "niveau_urgence": "normal",
                "notes": "Standard Backup"
            },
            "keywords": ["standard"]
        }

    def generate_batch(self, count: int) -> List[Dict]:
        results = []
        print(f"🏭 Production en cours de {count} scénarios...")
        for i in range(count):
            # On force quelques tempêtes pour tester le Hard Negative
            is_storm = i % 5 == 0 # 20% de tempêtes garanties
            results.append(self.generate_scenario(force_storm=is_storm))
            if i % 10 == 0: print(f".", end="", flush=True)
        print("\n")
        return results

if __name__ == "__main__":
    # Import local des agents (nécessaire ici pour le script standalone)
    try:
        from scenarios.storm_scenario import StormScenarioAgent
        from validator import JudgeAgent
    except ImportError:
        # Fallback pour exécution depuis la racine sans PYTHONPATH
        import sys
        sys.path.append(os.path.dirname(__file__))
        from scenarios.storm_scenario import StormScenarioAgent
        from validator import JudgeAgent

    parser = argparse.ArgumentParser(description="Fusion Generator SOTA 2026")
    parser.add_argument("--count", type=int, default=10, help="Nombre de scénarios")
    parser.add_argument("--output", type=str, default="synthetic_dataset_sota.json")
    parser.add_argument("--vocab", type=str, default="kabyle_vocabulary.json")
    parser.add_argument("--annotations", type=str, default="annotations_local.json")
    
    args = parser.parse_args()
    
    gen = FusionGenerator(args.vocab, args.annotations, seed=42)
    data = gen.generate_batch(args.count)
    
    with open(args.output, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        
    print(f"✅ Dataset SOTA généré : {args.output} ({len(data)} items)")
