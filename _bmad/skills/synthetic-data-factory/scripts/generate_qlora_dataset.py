import json
import argparse
import os
import sys

# Add current directory to path to allow imports
current_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.append(current_dir)

from fusion_generator import FusionGenerator

def convert_to_alpaca_format(entry):
    """
    Convert a FusionGenerator entry to Alpaca format for QLoRA fine-tuning.
    """
    instruction = "Extraire les entités structurées (Lieu, Type d'incident, Urgence, Victimes) de cette transcription d'appel d'urgence en Kabyle/Français."
    
    # Simuler une entrée vocale transcrite (Input)
    input_text = entry["transcription"]
    
    # La sortie attendue est le JSON d'extraction
    output_json = json.dumps(entry["extraction"], ensure_ascii=False)
    
    return {
        "instruction": instruction,
        "input": input_text,
        "output": output_json
    }

def generate_dataset(count, output_file, vocab_path, annotations_path):
    print(f"🚀 Generation de {count} exemples pour QLoRA Fine-tuning...")
    
    # Initialize Generator
    gen = FusionGenerator(vocab_path, annotations_path, seed=42)
    
    # Generate Batch
    raw_data = gen.generate_batch(count)
    
    # Transform to QLoRA Format
    qlora_data = [convert_to_alpaca_format(item) for item in raw_data]
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    
    # Save
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(qlora_data, f, ensure_ascii=False, indent=2)
        
    print(f"✅ Dataset QLoRA sauvegardé : {output_file} ({len(qlora_data)} samples)")
    print(f"📝 Exemple :\n{json.dumps(qlora_data[0], ensure_ascii=False, indent=2)}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate QLoRA Dataset for Fine-Tuning")
    parser.add_argument("--count", type=int, default=1000, help="Number of samples to generate")
    parser.add_argument("--output", type=str, default="ml_pipeline/dataset/qlora_finetune_data.json", help="Output JSON path")
    # Assuming paths relative to project root usually, but let's confirm defaults
    parser.add_argument("--vocab", type=str, default="ml_pipeline/kabyle_vocabulary.json")
    parser.add_argument("--annotations", type=str, default="ml_pipeline/dataset/annotations_local.json")
    
    args = parser.parse_args()
    
    generate_dataset(args.count, args.output, args.vocab, args.annotations)
