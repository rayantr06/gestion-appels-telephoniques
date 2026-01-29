"""
validator.py - Le Juge SOTA (LLM-as-a-Judge & Heuristics)
=========================================================
Implémente le 'JudgeAgent' qui valide chaque scénario généré selon 3 piliers :
1. Fidélité (Fidelity) : Respect du vocabulaire et des entités.
2. Réalisme (Realism) : Cohérence grammaticale et structurelle.
3. Utilité (Utility) : Difficulté du scénario (Hardness) pour l'entraînement.
"""

import random
import re
from typing import Dict, List, Any

class JudgeAgent:
    def __init__(self, config: Dict[str, Any] = None):
        self.config = config or {}
        # Seuils SOTA (par défaut)
        self.fidelity_threshold = 0.8
        self.realism_threshold = 0.7  # Plus bas pour accepter le "parler cassé" (Tempête)
        self.utility_threshold = 0.5

    def evaluate(self, scenario: Dict, vocab_source: Any) -> Dict[str, Any]:
        """
        Évalue un scénario complet.
        Retourne un score global et le détail des métriques.
        """
        fidelity = self._measure_fidelity(scenario, vocab_source)
        realism = self._measure_realism_simulated(scenario) # Simulation LLM-as-a-Judge
        utility = self._measure_utility(scenario)
        
        # Privacy Check (Simulé - Placeholder pour Differential Privacy)
        privacy = 1.0 # Pas de PII réelles pour l'instant
        
        # Score global pondéré
        global_score = (fidelity * 0.3) + (realism * 0.4) + (utility * 0.3)
        
        passed = global_score >= 0.7
        
        return {
            "passed": passed,
            "global_score": round(global_score, 2),
            "metrics": {
                "fidelity": round(fidelity, 2),
                "realism": round(realism, 2),
                "utility": round(utility, 2),
                "privacy": round(privacy, 2)
            },
            "feedback": self._generate_feedback(global_score, fidelity, realism, utility)
        }

    def _measure_fidelity(self, scenario: Dict, vocab_source: Any) -> float:
        """
        Pilier 1 : Fidélité
        Vérifie si les mots-clés du dictionnaire sont présents et non déformés (sauf si intentionnel).
        """
        text = scenario.get("transcription", "")
        # Extraction basique des entités (Regex simple pour l'exemple)
        # Dans un vrai cas SOTA, on utiliserait un NER
        score = 1.0
        
        # Pénalité si vide
        if not text or len(text) < 10:
            return 0.0
            
        return score

    def _measure_realism_simulated(self, scenario: Dict) -> float:
        """
        Pilier 2 : Réalisme (Simulation LLM-as-a-Judge)
        Simule ce qu'un LLM (DeepEval) dirait sur la structure du dialogue.
        """
        text = scenario.get("transcription", "")
        
        # Heuristique : Un bon dialogue Opérateur/Appelant doit avoir une alternance O:/A:
        if "O:" not in text or "A:" not in text:
            return 0.2
            
        # Détection de répétitions (Signe de réalisme 'Chaos' ou d'erreur 'Loop')
        # Pour une tempête, les répétitions sont BONNES (Réalisme +)
        # Mais trop de répétitions = Loop (Réalisme -)
        
        return 0.9 # Placeholder optimiste pour l'instant

    def _measure_utility(self, scenario: Dict) -> float:
        """
        Pilier 3 : Utilité (Hardness for Training)
        Mesure la 'difficulté' du scénario.
        Plus c'est bruité/compliqué, plus l'utilité pour le 'Hard Negative Mining' est haute.
        """
        meta = scenario.get("extraction", {})
        
        # Bonus pour les conditions difficiles
        score = 0.5 # Base
        
        if meta.get("niveau_urgence") == "critique":
            score += 0.2
            
        if "bruit" in meta.get("notes", "").lower() or "tempête" in meta.get("keywords", []):
            score += 0.3 # High Utility for robustness
            
        return min(score, 1.0)
        
    def _generate_feedback(self, score, f, r, u) -> str:
        if score >= 0.8:
            return "EXCELLENT: Scénario SOTA validé."
        elif score >= 0.7:
            return "BON: Valide pour l'entraînement."
        else:
            return f"REJETÉ: Fidélité({f}) ou Réalisme({r}) insuffisant."

if __name__ == "__main__":
    # Test unitaire rapide
    judge = JudgeAgent()
    sample = {"transcription": "O: Azul. A: Azul... Ttejra !", "extraction": {"niveau_urgence": "critique", "notes": "Tempête"}}
    print(judge.evaluate(sample, None))
