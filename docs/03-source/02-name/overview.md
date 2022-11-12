---
sidebar_position: 1
---

# Name Module

## Overview
This module produces randomized names that follow a style we find is useful.

Injecting random information into names helps us avoid collision when we are
establishing new resources that replace existing onces. Most of the names in our
configurations use this module. Unless a strong reason exist to avoid random
names we recommend using this module.

Our names are a mix of informative informative and random information. In this
module we use the `random` provider's `random` providers `pet` resource to
construct part of our name but in our wrapper we replace `python` with `znake`
because we have found that resources named as `python` confuse us. The random
pet `python` will likely be confused with teams thinking it is a reference to
the popular programming language of the same name.

We use the `time` provider's `static` resource to capture the date the resource
is created and include it as part of the name.

The name that results also has the prefix that was supplied as input and is
limited to a set size. The final name will be unique enough to avoid collisions
and still be comfortable for us.

[chge]: ./CHANGES.md
[code]: ./CODE-OF-CONDUCT.md
[cont]: ./CONTRIBUTING.md
[lice]: ./LICENSE.md

## Requirements

The following requirements are needed by this module:

- <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) (>=1.3.4)

- <a name="requirement_external"></a> [external](#requirement\_external) (>=2.2.3)

- <a name="requirement_random"></a> [random](#requirement\_random) (>=3.4.3)

- <a name="requirement_time"></a> [time](#requirement\_time) (>=0.9.1)

## Providers

The following providers are used by this module:

- <a name="provider_random"></a> [random](#provider\_random) (3.4.3)

- <a name="provider_time"></a> [time](#provider\_time) (0.9.1)

## Modules

The following Modules are called:

### <a name="module_changes"></a> [changes](#module\_changes)

Source: git::https://github.com/s3d-club/terraform-external-changes

Version: v0.1.20

## Resources

The following resources are used by this module:

- [random_pet.this](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/pet) (resource)
- [time_static.this](https://registry.terraform.io/providers/hashicorp/time/latest/docs/resources/static) (resource)

## Required Inputs

The following input variables are required:

### <a name="input_path"></a> [path](#input\_path)

Description: The path of the calling module.

Type: `string`

### <a name="input_tags"></a> [tags](#input\_tags)

Description: The caller's tags; these will also be part of the output.

Type: `map(string)`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_context"></a> [context](#input\_context)

Description: A contextual component for the prefix. A project name can be used here.

Type: `string`

Default: `null`

### <a name="input_disable_date"></a> [disable\_date](#input\_disable\_date)

Description: An option to disable the date component.

Type: `bool`

Default: `false`

### <a name="input_keepers"></a> [keepers](#input\_keepers)

Description: A map of extra `keepers` for the `random_pet` resource.

Type: `map(string)`

Default: `{}`

### <a name="input_length"></a> [length](#input\_length)

Description: The maximum length of the name that will be returned.

Type: `number`

Default: `63`

### <a name="input_pet_first"></a> [pet\_first](#input\_pet\_first)

Description: An option to include the pet name as the first component of the outputted name.

Type: `bool`

Default: `false`

### <a name="input_pet_length"></a> [pet\_length](#input\_pet\_length)

Description: The number of "pets" to include in the name.

Type: `number`

Default: `1`

## Outputs

The following outputs are exported:

### <a name="output_prefix"></a> [prefix](#output\_prefix)

Description: The name prefix.

### <a name="output_release"></a> [release](#output\_release)

Description: The current release.

### <a name="output_tags"></a> [tags](#output\_tags)

Description: A map with tags that describe the content of `CHANGES.md`.

### <a name="output_tags_with_name"></a> [tags\_with\_name](#output\_tags\_with\_name)

Description: The tags for the module tags with an additional `Name` tag.
