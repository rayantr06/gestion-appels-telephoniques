"""
Extract synthetic scenarios from JSONL files and generate JavaScript for the voice collection app.
"""
import json, re, os

JSONL_FILES = [
    '../ml_pipeline/dataset/annotations_synthetic_rare.jsonl',
    '../ml_pipeline/dataset/annotations_synthetic_test_v3.jsonl',
]

INCIDENT_EMOJIS = {
    'natural_disaster': '⛰️ Catastrophe naturelle',
    'lost_person': '🔍 Personne disparue',
    'theft_robbery': '🚨 Vol/Agression',
    'fire_vehicle': '🔥 Véhicule en feu',
    'fire_forest': '🌲 Feu de forêt',
    'structural_collapse': '🏗️ Effondrement',
    'hazmat': '☣️ Fuite de gaz/chimique',
    'drowning': '🌊 Noyade',
    'road_accident': '🚗 Accident de route',
    'fire_residential': '🏠 Incendie maison',
    'medical_emergency': '🩺 Urgence médicale',
    'unknown': '❓ Fausse alerte',
}

def parse_turns(text):
    """Parse transcription into list of {role, text} turns."""
    turns = []
    
    # Check for labeled turns (caller: / operator:)
    if re.search(r'(?:caller|operator)\s*:', text, re.IGNORECASE):
        parts = re.split(r'(caller|operator)\s*:', text, flags=re.IGNORECASE)
        for i in range(1, len(parts), 2):
            role = parts[i].lower()
            t = parts[i+1].strip() if i+1 < len(parts) else ''
            if t:
                turns.append({'role': role, 'text': t})
    
    # dash_turns format (— or -)
    elif text.lstrip().startswith(('-', '—')):
        parts = re.split(r'\s*(?:—\s*|(?<!\w)- )', text)
        parts = [p.strip() for p in parts if p.strip()]
        for i, t in enumerate(parts):
            role = 'caller' if i % 2 == 0 else 'operator'
            turns.append({'role': role, 'text': t})
    
    return turns

def main():
    scenarios = []
    seen = set()
    
    for fp in JSONL_FILES:
        path = os.path.join(os.path.dirname(__file__), fp)
        if not os.path.exists(path):
            print(f"⚠️ Fichier non trouvé: {fp}")
            continue
        
        with open(path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                d = json.loads(line)
                sid = d.get('id', '')
                if sid in seen:
                    continue
                seen.add(sid)
                
                t = d.get('transcription', '')
                inc = d.get('labels', {}).get('incident_type', 'unknown')
                loc = d.get('labels', {}).get('location', 'unknown')
                
                turns = parse_turns(t)
                if turns and len(turns) >= 2:
                    scenarios.append({
                        'id': sid,
                        'incident': inc,
                        'location': loc,
                        'type_label': INCIDENT_EMOJIS.get(inc, f'❓ {inc}'),
                        'turns': turns,
                    })
    
    # Stats
    types = {}
    for s in scenarios:
        t = s['incident']
        types[t] = types.get(t, 0) + 1
    
    print(f"✅ {len(scenarios)} scénarios extraits")
    for t, n in sorted(types.items(), key=lambda x: -x[1]):
        print(f"  {t}: {n}")
    total_turns = sum(len(s['turns']) for s in scenarios)
    print(f"  Total tours de parole: {total_turns}")
    
    # Generate JS
    js_lines = ['const SCENARIOS = [']
    for s in scenarios:
        js_lines.append('  {')
        js_lines.append(f'    type: {json.dumps(s["type_label"], ensure_ascii=False)},')
        js_lines.append(f'    incident: {json.dumps(s["incident"], ensure_ascii=False)},')
        js_lines.append(f'    location: {json.dumps(s["location"], ensure_ascii=False)},')
        js_lines.append(f'    id: {json.dumps(s["id"], ensure_ascii=False)},')
        js_lines.append('    turns: [')
        for turn in s['turns']:
            text_json = json.dumps(turn['text'], ensure_ascii=False)
            js_lines.append(f'      {{ role: "{turn["role"]}", text: {text_json} }},')
        js_lines.append('    ]')
        js_lines.append('  },')
    js_lines.append('];')
    
    js_output = '\n'.join(js_lines)
    
    out_path = os.path.join(os.path.dirname(__file__), 'scenarios_data.js')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(js_output)
    
    print(f"\n📁 Fichier JS généré: {out_path}")
    print(f"   Taille: {len(js_output)} caractères")

if __name__ == '__main__':
    main()
