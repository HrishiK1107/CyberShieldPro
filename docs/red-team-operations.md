# Red Team Operations Center

## 1 Campaign Lifecycle
| Stage | Automation | Human Oversight |
|-------|------------|-----------------|
| Recon | AI OSINT | ROE approval |
| Weaponisation | Auto-payload builder | Payload QA |
| Delivery | Spear-phish bot | Phish template sign-off |
| C2 & Actions | Encrypted gRPC C2 | Ops lead monitors |
| Exfil | ML anomaly throttler | IR liaison |

## 2 OPSEC Features
* Canary tokens in every beacon to detect blue-team take-over attempts.  
* Jittered callback schedule (10 ± 3 %) to evade NW detection.  

## 3 Purple-Team Hooks
Emit ATT&CK STIX alerts to your SIEM so defenders can validate detections in real time[5].  

## 4 Metrics Dashboard
* **Dwell time**  
* **Persistence success rate**  
* **Exfil volume**  

All displayed in `redteam-dashboard.vue`.  
