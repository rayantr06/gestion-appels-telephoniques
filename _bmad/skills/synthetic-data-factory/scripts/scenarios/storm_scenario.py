"""
storm_scenario.py - Générateur de 'Hard Negatives' (Chaos Engineering)
======================================================================
Spécialisation de l'Agent Scénariste pour les conditions extrêmes (Tempête).
Implémente :
- Dégradation Audio Simulée (Metadata)
- Code-Switching Fragmenté
- Répétitions et Malentendus
"""

import random
from typing import Dict, Any, List

class StormScenarioAgent:
    def __init__(self, vocab_source: Any):
        self.vocab = vocab_source
        self.noise_levels = ["Vent violent (90km/h)", "Pluie battante", "Grêle", "Sirènes lointaines"]
        self.signal_quality = ["Haché (Packet Loss)", "Faible (1 barre)", "Robotique (Jitter)"]

    def generate(self, place: Dict) -> Dict:
        """Crée un scénario de tempête à 'place'"""
        
        # 1. Contexte Chaos
        noise = random.choice(self.noise_levels)
        signal = random.choice(self.signal_quality)
        
        # 2. Construction du Dialogue "Cassé"
        # L'Appelant (A) panique, l'Opérateur (O) a du mal à comprendre
        
        # Vocabulaire de crise (simulé via retrieval placeholder)
        words_tree = "Ttejra" # Arbre
        words_fall = "Teɣli-d" # Est tombé
        words_wind = "Aḍu" # Vent
        words_road = "Abrid" # Route
        
        dialogue_templates = [
            f"A: ...llo ?! {words_wind} ! {words_wind} d ameqqran !\nO: Allo ? Je vous reçois mal. Parlez fort !\nA: {words_tree}... {words_tree} teɣli-d ɣef t...omobil !\nO: Une voiture ? Où ça exactement ?\nA: Di {place['quartier']} ! ...tention ! Le poteau électrique... !",
            
            f"A: 3awnet-a... ! Dda... Dda l'accident !\nO: Calmez-vous. C'est à cause de la tempête ?\nA: Ih ! {words_road} ibelɛ... ! Aman... {words_wind} !\nO: {place['commune']} ? C'est ça ?\nA: Ih ! Zdat {place['repere']}... ! Venez vite !",
        ]
        
        transcription = random.choice(dialogue_templates)
        
        # 3. Augmentation "Code-Switching Hard"
        # Ajout de mots français au milieu du Kabyle pour tester le NER
        if random.random() < 0.5:
            transcription = transcription.replace("...", "... (bruit)...")
        
        return {
            "transcription": transcription,
            "extraction": {
                "lieu_final": f"{place['quartier']}, {place['commune']}",
                "commune": place['commune'],
                "quartier": place['quartier'],
                "repere": place['repere'],
                "type_incident": "Accident / Intempéries",
                "niveau_urgence": "critique",
                "nombre_victimes": str(random.randint(0, 5)),
                "etat_victimes": "Inconnu (Chaos)",
                "notes": f"Scenario CHARGE : {noise} + {signal}. Hard Negative."
            },
            "keywords": ["tempête", "chaos", "bruit", noise]
        }
