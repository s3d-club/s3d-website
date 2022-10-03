---
sidebar_position: 1
---

# S3D Terraform for a Site Group
## Overview
Within an AWS account, a group of sites will share resources.

Often several sites will share the same EKS, EC2 Key Pair, Security Groups,
etc.

Each site group is the conceptual parent of one or more sites which may be
tracked in the same Terraform state as the parent or tracked in other Terraform
states.

The content of a site group should reflect the structure of team(s) supporting
the sites. The group is a security context and a place where resources that
would otherwise need to be duplicated can be managed.

[chge]: ./CHANGES.md
[code]: ./CODE-OF-CONDUCT.md
[cont]: ./CONTRIBUTING.md
[lice]: ./LICENSE.md
