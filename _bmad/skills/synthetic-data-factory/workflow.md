---
description: Générer un dataset synthétique ASR/NER haute-fidélité pour DGPC Bejaia
---

# Workflow : Synthetic Data Generation (Fusion)

Ce workflow orchestre la création de données d'entraînement en utilisant le moteur `Synthetic Data Factory`.

## 1. Préparation de l'Environnement
Assurez-vous que les dépendances sont installées et que les fichiers sources sont accessibles.

```bash
# Vérifier l'accès aux sources de vérité
ls -lR ml_pipeline/kabyle_vocabulary.json
ls -lR ml_pipeline/dataset/annotations_local.json
```

## 2. Génération de Scénarios (Texte)
Lancer le script de fusion qui va lire le vocabulaire et les annotations existantes pour créer de nouvelles variations.

```bash
# Générer 100 scénarios de test
python _bmad/skills/synthetic-data-factory/scripts/fusion_generator.py \
    --count 100 \
    --vocab "ml_pipeline/kabyle_vocabulary.json" \
    --annotations "ml_pipeline/dataset/annotations_local.json" \
    --output "ml_pipeline/dataset/synthetic_batch_001.json"
```

## 3. Validation Humaine (Optionnelle)
Importer le fichier généré dans `dgpc_annotation_local.py` pour vérifier si le format passe.

```python
# Test rapide de lecture
import json
with open("ml_pipeline/dataset/synthetic_batch_001.json", 'r', encoding='utf-8') as f:
    data = json.load(f)
    print(f"Chargé {len(data)} items valides.")
```

## 4. Génération Audio (TTS)
*Nécessite GPU et Coqui TTS installé*

```bash
# TODO: Connecter au script TTS XTTS v2
# python ml_pipeline/synthetic/tts_generator.py --input "ml_pipeline/dataset/synthetic_batch_001.json"
```

## 5. Augmentation Audio
Appliquer les effets "Téléphone / GSM".

```bash
# TODO: Connecter au script d'augmentation
# python ml_pipeline/asr/augment_audio.py ...
```
