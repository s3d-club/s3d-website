---
sidebar_position: 1
---

# Changes Module

## Overview
This module reads the `CHANGES.md` file and Git history obtain tags that are
useful for tracking resources.

## Usage Notes
This module includes scripting for an `external` data resource.  The scriping
depends on `git`, `sed`, and other tools that should exist in the environment.

[chge]: ./CHANGES.md
[code]: ./CODE-OF-CONDUCT.md
[cont]: ./CONTRIBUTING.md
[lice]: ./LICENSE.md

## Requirements

The following requirements are needed by this module:

- <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) (>=1.3.3)

- <a name="requirement_external"></a> [external](#requirement\_external) (>=2.2.2)

## Providers

The following providers are used by this module:

- <a name="provider_external"></a> [external](#provider\_external) (2.2.2)

## Modules

No modules.

## Resources

The following resources are used by this module:

- [external_external.this](https://registry.terraform.io/providers/hashicorp/external/latest/docs/data-sources/external) (data source)

## Required Inputs

The following input variables are required:

### <a name="input_path"></a> [path](#input\_path)

Description: The path of the calling module.

Type: `string`

### <a name="input_tags"></a> [tags](#input\_tags)

Description: The tags that will be part of the output.

Type: `map(string)`

## Optional Inputs

No optional inputs.

## Outputs

The following outputs are exported:

### <a name="output_tags"></a> [tags](#output\_tags)

Description: A map with tags providing information about the module.
