# AI Threat Intelligence Module

## 1  Overview
CyberShield Pro’s Threat Intel engine fuses supervised and unsupervised ML models to transform raw telemetry into predictive, contextual intelligence. Core goals:

| Capability | Model | Output |
|------------|-------|--------|
| Zero-day prediction | Gradient-boosted GNN | CVE-likelihood score |
| Behavioral clustering | Autoencoder | Entity risk profile |
| Indicator correlation | GraphSAGE | IOC confidence heatmap |

## 2  Data Pipeline
1. **Collection** – pulls from Sigma-formatted SIEM logs, MISP feeds, and AbuseIPDB API[2].  
2. **Enrichment** – tags assets with MITRE ATT&CK metadata via STIX-2.1 objects[3].  
3. **Model staging** – TensorFlow 2.14 models live-reload through TF Serving.  

## 3 Accuracy Tuning
* Re-train weekly with the latest CTI.  
* Monitor **ROC-AUC ≥ 0.93** to limit false positives ≤ 3 %[4].  
