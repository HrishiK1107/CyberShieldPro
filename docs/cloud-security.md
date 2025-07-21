# Multi-Cloud Security Assessment

## 1 Supported Providers
* **AWS** via boto3 & Security Hub
* **Azure** via az-cli & Defender
* **GCP** via gcloud APIs

## 2 Checks Performed
| Category | Example Control | Framework |
|----------|-----------------|-----------|
| Identity | MFA on root | CIS 1.3 |
| Storage  | S3 bucket ACLs | NIST 800-53 AC-6 |
| Network  | Open ports | PCI-DSS 1.2 |
| Compute  | VM disk encryption | ISO 27001 A.10 |

## 3 IaC Scanner
Runs **tfsec** and **cfn-nag** then feeds results to an LLM re-writer that outputs dev-friendly remediation steps.

## 4 Zero Trust Validation
* Graph-based policy diff verifies least-privilege paths.  
* Generates SVG diagrams stored in `/assets/zero-trust/`.  
