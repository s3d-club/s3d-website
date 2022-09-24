---
sidebar_position: 1
---
# TF AWS Egress Open
Terraform module for AWS egress.

This module is an opinionated wrapper around a
[aws_security_group](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group).

In our wrapper we enforce the following:
- Our conventions with name perfixing, and tagging
- Reduced arguments and attributes
