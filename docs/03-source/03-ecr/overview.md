---
sidebar_position: 1
---

# AWS ECR Terraform Module
## Overview
This is the ECR configuration we recommend.

### Our ECR has the following features
- Our common naming and tagging module
- `IMMUTABLE` image tags
- `force_delete` set so resources can easily be managed via Terrraform
- `kms_key` keys so `tfsec` does not flag the implementation
- `scan_on_push` enabled

[chge]: ./CHANGES.md
[code]: ./CODE-OF-CONDUCT.md
[cont]: ./CONTRIBUTING.md
[lice]: ./LICENSE.md
