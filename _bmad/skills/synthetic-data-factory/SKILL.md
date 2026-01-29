---
name: Synthetic Data Factory
description: Une usine de données synthétiques "Hyper-Réalistes" combinant Vocabulaire Kabyle, CLDR, et Annotations Réelles.
version: 1.0.0
---

# 🏭 Synthetic Data Factory (SDF)

Ce skill est une "usine" spécialisée pour générer des datasets d'entraînement ASR/NER pour le contexte Algérien (Kabyle/Français/Arabizi). Il ne se contente pas de templates aléatoires, il "fusionne" des sources de vérité pour garantir la qualité.

## 🧠 Cerveau (Data Sources)
Le skill utilise ces assets comme "ADN" :
1.  **Structure Linguistique** : `kabyle_vocabulary.json` (Grammaire, Nombres, Temps) + `locale datasommary` (Formats officiels).
2.  **Modèles de Réalité** : `annotations_local.json` (Réalisme des dialogues, hésitations, code-switching, noms de lieux réels).
3.  **Logique de Validation** : `dgpc_annotation_local.py` (Schema compliance).

## 🛠️ Capacités

### 1. `generate-fusion-dataset`
Génère des scénarios en mélangeant intelligemment les sources.
- **Input** : Nombre de samples, Ratio Code-Switching.
- **Logic** : 
    - Charge le vocabulaire officiel (pour ne pas inventer des mots).
    - Extrait les patterns de "disfluence" des annotations réelles (ex: "euh... non... zdat...").
    - Injecte des entités géographiques réelles (Bejaia, Routes Nationales).
- **Output** : JSON compatible avec `annotations_local.json`.

### 2. `enrich-with-tts` (Prévu)
Convertit les textes générés en audio via Coqui XTTS v2.
- **Voice Cloning** : Utilise des segments de `Audio_Valides` comme référence.
- **Audio Augmentation** : Ajoute bruit de fond GSM/PSTN.

### 3. `validate-compliance`
Vérifie que les données générées respectent le schéma de `dgpc_annotation_local.py` pour être importables directement dans l'outil d'annotation pour vérification humaine (Human-in-the-loop).

## 📂 Structure du Skill
- `scripts/fusion_generator.py` : Le moteur de génération principal.
- `resources/` : Liens symboliques vers vos fichiers JSON (vocabulaire, annotations).
- `outputs/` : Datasets générés.

## 🚀 Utilisation
```bash
# Générer 500 appels d'urgence ultra-réalistes
python _bmad/skills/synthetic-data-factory/scripts/fusion_generator.py --count 500 --output "dataset_v1.json"
```
