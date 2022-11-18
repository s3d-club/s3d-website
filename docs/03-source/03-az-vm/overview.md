---
sidebar_position: 1
---

# Azure Virtual Machine Module

## Overview
The focus of this module is to provide a simplified interface for the mangement
of Azure virtual machines.

This module does not seek to make the full range of Azure VM options available.
Our goal is to provide only the options that make sense and support a
configuration that handles typical usage.

This module is designed to fit into our ecosystem where our `name` module
manages the names and tags used for the image. The name of the image changes in
any case where the script content changes because we want to force the image to
be destroyed and redeployed in any case where the init scripting changes.


## Requirements

The following requirements are needed by this module:

- <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) (>=1.3.5)

- <a name="requirement_azurerm"></a> [azurerm](#requirement\_azurerm) (>=3.32.0)

- <a name="requirement_external"></a> [external](#requirement\_external) (>=2.2.3)

- <a name="requirement_random"></a> [random](#requirement\_random) (>=3.4.3)

- <a name="requirement_time"></a> [time](#requirement\_time) (>=0.9.1)

## Providers

The following providers are used by this module:

- <a name="provider_azurerm"></a> [azurerm](#provider\_azurerm) (3.32.0)

## Modules

The following Modules are called:

### <a name="module_name"></a> [name](#module\_name)

Source: github.com/s3d-club/terraform-external-name

Version: v0.1.19

## Resources

The following resources are used by this module:

- [azurerm_linux_virtual_machine.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine) (resource)
- [azurerm_network_interface.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_interface) (resource)
- [azurerm_virtual_machine_extension.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_machine_extension) (resource)

## Required Inputs

The following input variables are required:

### <a name="input_admin_username"></a> [admin\_username](#input\_admin\_username)

Description: The `admin_username` for the vm.

Type: `string`

### <a name="input_disk_size_gb"></a> [disk\_size\_gb](#input\_disk\_size\_gb)

Description: The `disk_size_gb` for the vm.

Type: `number`

### <a name="input_location"></a> [location](#input\_location)

Description: The `location` for the vm.

Type: `string`

### <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix)

Description: A prefix for the random name of the vm.

Type: `string`

### <a name="input_plan"></a> [plan](#input\_plan)

Description: The `plan` for the vm.

Type:

```hcl
object({
    name      = string
    product   = string
    publisher = string
  })
```

### <a name="input_public_key"></a> [public\_key](#input\_public\_key)

Description: The `public_key` for the vm.

Type: `string`

### <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name)

Description: The `resource_group_name` of the vm.

Type: `string`

### <a name="input_script"></a> [script](#input\_script)

Description: A shell script for the vm.

Type: `string`

### <a name="input_size"></a> [size](#input\_size)

Description: The `size` of the vm.

Type: `string`

### <a name="input_source_image_id"></a> [source\_image\_id](#input\_source\_image\_id)

Description: The `source_image_id` of the vm.

Type: `string`

### <a name="input_storage_account_type"></a> [storage\_account\_type](#input\_storage\_account\_type)

Description: The `storage_account_type` for the vm.

Type: `string`

### <a name="input_subnet_id"></a> [subnet\_id](#input\_subnet\_id)

Description: The `subnet_id` for the vm.

Type: `string`

### <a name="input_tags"></a> [tags](#input\_tags)

Description: The `tags` for the vm.

Type: `map(string)`

## Optional Inputs

No optional inputs.

## Outputs

No outputs.
