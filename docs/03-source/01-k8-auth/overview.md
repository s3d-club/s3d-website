---
sidebar_position: 1
---

# K8 AWS Auth Map Module

## Overview
This module works in conjunction with the [S3D EKS][eks0] module but could also
be used for other cases where Kubernetes AWS Auth maps are managed.

Other approaches for Terraform and Kubernetes involve large and complex **EKS**
modules. From what we have seen, gigantic `EKS everything` modules are a bad
idea. These modules become difficult to configure, maintain, and audit over
time with frustrating issues where the number of configuration options and the
types of problems grow exponentially. We perfer our approach of focused modules
especially in this case where the EKS module is tied to the AWS provider while
this module works with the Kubernetes provider.

We are also not trying to be all things to all people with a ton of options. We
have an opinonated view for the **proper** way to configure EKS and do not wish
to present options we feel don't make sense.

[eks0]: /docs/source/aws-eks/overview
[chge]: ./CHANGES.md
[code]: ./CODE-OF-CONDUCT.md
[cont]: ./CONTRIBUTING.md
[lice]: ./LICENSE.md

## Requirements

The following requirements are needed by this module:

- <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) (>=1.3.3)

- <a name="requirement_kubernetes"></a> [kubernetes](#requirement\_kubernetes) (>=2.14.0)

## Providers

The following providers are used by this module:

- <a name="provider_kubernetes"></a> [kubernetes](#provider\_kubernetes) (2.14.0)

## Modules

No modules.

## Resources

The following resources are used by this module:

- [kubernetes_config_map.this](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/config_map) (resource)

## Required Inputs

The following input variables are required:

### <a name="input_master_role_arn"></a> [master\_role\_arn](#input\_master\_role\_arn)

Description: A master role ARN.

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_roles"></a> [roles](#input\_roles)

Description: A list of roles.

Type:

```hcl
list(object({
    rolearn  = string
    rolename = string
    groups   = list(string)
  }))
```

Default: `[]`

### <a name="input_users"></a> [users](#input\_users)

Description: A list of users.

Type:

```hcl
list(object({
    userarn  = string
    username = string
    groups   = list(string)
  }))
```

Default: `[]`

## Outputs

No outputs.
