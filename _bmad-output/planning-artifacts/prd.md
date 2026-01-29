---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish']
inputDocuments:
  - 'C:\Users\AZ\.gemini\antigravity\brain\9975e5e0-e57e-4a5d-a200-4fa4543b445c\product-brief-gestion-des-appelles-telephoniques-2026-01-22.md.resolved'
  - 'C:\Users\AZ\.gemini\antigravity\brain\9975e5e0-e57e-4a5d-a200-4fa4543b445c\manifeste_projet.md.resolved'
  - 'C:\Users\AZ\.gemini\antigravity\brain\9975e5e0-e57e-4a5d-a200-4fa4543b445c\rapport_recherche_strategique.md.resolved'
workflowType: 'prd'
classification:
  projectType: 'SaaS B2B/B2G'
  domain: 'GovTech'
  complexity: 'High'
  projectContext: 'Brownfield'
---

# Product Requirements Document - Data Algérie IA

**Author:** chef
**Date:** 2026-01-23

## Principes Directeurs

### 1. Explicabilité Obligatoire
Toute alerte expose ses "Facteurs Contributifs" (Météo, Historique, Volume). Pas de "Black Box". Le décideur doit pouvoir justifier ses actions.

### 2. Human-in-the-Loop
Le système génère une "Suggestion d'Ordre" que l'humain valide. Aucun déploiement automatique. Responsabilité légale garantie.

### 3. Architecture Local-First
Conception modulaire pour déploiement On-Premise ou Cloud Souverain. Aucune donnée ne quitte le territoire algérien.

## Critères de Succès

### Succès Utilisateur (Colonel)
*   **Temps de Réponse :** -20% sur la zone pilote (Bejaia).
*   **Sérénité Décisionnelle :** Score de confiance > 4/5.
*   **Faux Départs :** -15% de km inutiles (optimisation carburant).

### Succès Business (Data Algérie IA)
*   **Validation Pilote :** Conversion MVP en contrat annuel payant.
*   **DaaS Traction :** 1 PoC B2B avec assureur/startup d'ici 12 mois.
*   **Velocity Factory :** Lancement vertical "Santé" < 6 mois après "Urgences".

### Succès Technique
*   **WER Dialectal :** < 15% en environnement bruyant (>80dB).
*   **Souveraineté :** 100% données hébergées localement.
*   **API Uptime :** 99.9% pour Gateway DaaS multi-tenant.

## Parcours Utilisateurs

### 1. Colonel Rachid - Décision Terrain (Primary Success)
**Scène :** Vendredi 16h, Canicule, Réseau instable.
**Action :** Reçoit "Suggestion d'Ordre" sur tablette (Mode Offline).
**Interaction :** Analyse facteurs (Vent + Sécheresse + 3 appels) via Dashboard. Valide déploiement par **"Slide-to-Confirm"** (Friction Positive).
**Résultat :** Décision mise en queue synchro. Sentiment de maîtrise et sécurité juridique.

### 2. Salim - Opérateur 114 (Primary Edge Case)
**Scène :** Salle de contrôle sombre/bruyante (Nuit).
**Problème :** IA confond localisation (dialecte rapide).
**Interaction :** Interface **Dark Mode** avec boutons larges. Corrige entité en 2 clics (Tag & Fix).
**Sécurité :** Trust Score élevé → correction appliquée immédiatement au ré-entraînement.
**Résultat :** Correction fluide sans fatigue visuelle.

### 3. Nadia - Admin Factory (Maintenance)
**Scène :** Maintenance hebdomadaire.
**Action :** Analyse dérive WER par dialecte.
**Interaction :** Valide lots corrections (filtrés par Trust Score). Lance fine-tuning.
**Résultat :** Amélioration continue sans intervention code massive.

### 4. Karim - API Consumer DaaS (Intégration)
**Scène :** Intégration app assurance.
**Action :** Souscription portail API, récupération token OAuth2.
**Interaction :** Requête incidents **anonymisés** via Gateway.
**Résultat :** Intégration en quelques heures, données conformes Loi 18-07.

**Exigences Transverses :** Slide-to-Confirm (actions critiques), Dark Mode natif, Architecture Offline-First, Trust Score (annotations), Anonymisation DaaS native.

## Contraintes Domaine (GovTech & Souveraineté)

### Conformité & Réglementation
*   **Data Residency :** Hébergement 100% local (Algérie). Interdiction Cloud non-souverain pour données brutes.
*   **Loi 18-07 :** Anonymisation irréversible avant export API DaaS.
*   **Auditabilité :** Traçabilité complète décisions (Audit Trail inaltérable).

### Contraintes Techniques
*   **Air-Gapped Ready :** Factory + Dashboard fonctionnent en intranet fermé (coupure nationale).
*   **Low-Resource NLP :** Pas d'API externes. ASR/NER On-Premise (modèles Open Source finetunés localement).

### Risques & Mitigations
*   **Hallucination IA :** Human-in-the-Loop obligatoire.
*   **Biais Régional :** KPI performance géo-localisés.
*   **Trust Crash :** UI "Probabilité Sereine" (scores confiance visibles, bannissement assertions binaires).
*   **Noise Failure :** KPI validation = WER sous 80dB (mode "Noisy-First").
*   **Obsolescence Modèle :** Interface "Tag & Fix" pour correction autonome opérateurs.

## Innovation & Différenciation

### 1. Human-Centric Active Learning
**Concept :** UI "Tag & Fix" permettant à l'opérateur de corriger le modèle en temps réel.
**Innovation :** Transforme l'utilisateur final en "Coach" du modèle. Boucle d'amélioration exponentielle sur dialectes locaux impossible à répliquer par Google/OpenAI.

### 2. Architecture "Souveraine + DaaS" (Paradoxe Résolu)
**Concept :** Cœur "Bunker" (Air-Gapped, données brutes) + Peau "API Publique" (données anonymisées).
**Innovation Technique :** **"Sas Numérique" (Digital Airlock)**. Diode de données unidirectionnelle pousse insights vers zone publique sans jamais exposer réseau interne.

### 3. UX "Probabilité Sereine"
**Concept :** Affichage explicite scores confiance + facteurs contributifs (Explainability First).
**Innovation :** Remplace autorité aveugle IA par aide décision transparente, évitant rejet utilisateur.

## Exigences Techniques (SaaS B2G)

### Architecture Multi-Tenant
*   **Isolation :** Row-Level Security par Wilaya. Aucun partage horizontal incidents.
*   **RBAC :**
    *   **ZoneCommander :** Validation/déploiement zone.
    *   **Operator :** Correction Active Learning (sans admin).
    *   **ApiConsumer :** Lecture données anonymisées (rate-limited).

### Stratégie Update "Zero-Trust"
**Problème :** Mettre à jour Core Air-Gapped sans risque USB (Stuxnet).
**Solution - Station de Décontamination :**
1. Download DMZ.
2. Signature crypto Ministère.
3. Transfert via **Diode Optique** (unidirectionnel physique) vers Core.

### API Gateway DaaS
*   **Protocole :** REST + OAuth2.
*   **Sécurité :** Rate Limiting strict par organisation.
*   **Privacy :** Filtrage automatique PII avant sortie sas.

## Roadmap Stratégique (Scoping)

### Philosophie MVP : "Factory de Confiance"
**Approche :** "Deep-Slice". Un vertical (Protection Civile) traité bout-en-bout avec qualité militaire.
**Objectif :** Prouver souveraineté + fiabilité (WER < 15%) avant expansion.

### Phase 1 : Le "Bunker" (MVP - Mois 1-4)
**Cible :** Protection Civile (Wilaya Pilote).
**Features :** Ingestion Audio H24, ASR Dialectal Offline, Dashboard Probabiliste, Station Décontamination (Updates Diode), Active Learning "Tag & Fix".

### Phase 2 : Pivot "Enterprise DaaS" (Growth - Mois 5-9)
**Cible :** **Grands Comptes Assurances** (AXA, CAAR). *[Pivot Stratégique validé]*
**Raison :** ROI immédiat vs écosystème startup fauché. Vente Risk Reports haute valeur vs micro-paiements API.
**Features :** Partner Program API B2B exclusif (pas portail public ouvert), Risk Insights prédictifs (Inondations/Accidents), Anonymisation certifiée Loi 18-07.

### Phase 3 : Expansion (Vision - Mois 10+)
**Cible :** Ministères Santé, Agriculture.
**Features :** Fusion Multimodale (Vidéo, Satellite), Cloud Souverain (fin Air-Gap strict).

### Matrice Risques
*   **Technique :** Lenteur updates Diode → Mitigation: Delta Updates.
*   **Marché :** ROI inexistant Open Data → Mitigation: Pivot Enterprise DaaS.

## Spécifications Fonctionnelles

### Module Décideur (Dashboard & Alerte)
*   **FR1 :** Visualisation alertes prioritaires carte interactive (Mapbox Offline).
*   **FR2 :** Consultation "Facteurs Contributifs" (Explicabilité).
*   **FR3 :** Validation/rejet ordre via "Slide-to-Confirm".
*   **FR4 :** Synchro décisions "Delta Update" dès retour réseau.
*   **FR4b :** Conflit synchro → Grade le plus élevé écrase (Rank Consensus).
*   **FR15 :** Diffusion alertes critiques SMS/Push + Sirène locale (GPIO).

### Module Factory (ASR & Active Learning)
*   **FR5 :** Écoute audio original avec transcription synchronisée.
*   **FR6 :** Correction entités mal détectées (Tag & Fix).
*   **FR7 :** Calcul "Trust Score" pour chaque correction.
*   **FR7b :** Ré-entraînement déclenché uniquement si Trust Score > 0.95.
*   **FR17 :** Surveillance dérive modèle (Drift Detection) + alerte Admin.

### Module Enterprise DaaS (Partner API)
*   **FR9 :** Authentification Partenaire OAuth2 (Client ID/Secret).
*   **FR10 :** Anonymisation champs PII avant export.
*   **FR11 :** Récupération "Risk Reports" JSON sur zone autorisée.

### Administration & Compliance
*   **FR12 :** Gestion accès RBAC (Wilaya/Role).
*   **FR13 :** Journalisation actions (Audit Trail inaltérable).
*   **FR14 :** Import updates signés depuis Station Décontamination.
*   **FR16 :** Purge/Anonymisation automatique enregistrements bruts après X jours (Loi 18-07).

## Exigences Non-Fonctionnelles

### Sécurité (Niveau Défense)
*   **Air-Gap Strict :** Factory sans connexion internet (Intranet fermé).
*   **Chiffrement At-Rest :** AES-256, clés gérées localement (HSM/Vault).
*   **Signature Annotations :** Corrections Active Learning signées cryptographiquement (anti data poisoning).
*   **Audit Trail :** Log inaltérable (WORM/Blockchain privée) pour décisions critiques.

### Performance & Résilience
*   **NFR-P1 (Latence KWS) :** Détection mots-clés urgence < **200ms** (On-Device).
*   **NFR-P2 (Latence Alerte) :** Affichage Dashboard < 2s après ingestion audio.
*   **NFR-P3 (Mode Dégradé) :** Autonomie 30 jours si coupure Diode (Cache local).
*   **NFR-P4 (Charge) :** Support 50 appels simultanés sans dégradation (même pendant transfert 10Go Diode).

### Qualité IA (KPIs Durcis)
*   **NFR-AI1 (WER Mots-Clés) :** < **2%** sur vocabulaire urgence (Feu/Hriq, Sang/Dem, Mort/Mawt). *[KPI Critique]*
*   **NFR-AI2 (WER Général) :** < 15% sur dialecte local.
*   **NFR-AI3 (False Positive) :** < 5% pour éviter désensibilisation décideur.
*   **NFR-AI4 (Modèle Contextuel) :** NLP utilise modèle contextuel intelligent (type Gemini/LLM local) capable comprendre sens au-delà transcription brute.

### Auditabilité & Conformité
*   **Traçabilité :** Chaque action loggée (timestamp, acteur, justification).
*   **Certificat Destruction :** Script purge (FR16) génère certificat opposable juridiquement.
*   **Human-in-the-Loop :** Validation humaine finale obligatoire actions critiques (safety net contre échec IA).
