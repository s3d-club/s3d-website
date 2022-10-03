# Terraform
Terraform is a **very** important tool for working with cloud service providers
such as AWS. The power of Terraform is that it defines an expressive language
for configuration and a mechanisum for the open source exchange of of
configuration modules.

The [S3D Club](.) maintains Terraform modules that help organizations manage
their infrastructure.

## Installing Terraform
We recommend using the [Terraform Version
Manager](https://github.com/tfutils/tfenv#tfenv) command _(i.e. `tfenv`)_ when
working with Terraform.

Make sure you do the work on the EC2 instance you created in previous tutorial.
The EC2 instance provides you with a well defined computing enviornment. If
needed, you can destroy and recreate the EC2 instance in order to be sure you
have the proper environment for this tutorial.

Install `tfenv` and then use it to install the latest version of Terraform as
per the documentation provided by the
[tfenv](https://github.com/tfutils/tfenv/blob/master/README.md#tfenv) project.

When this step is complete, executing the following commands should produce
output showing the versions that you installed.

```bash
tfevn --version
terraform --version
```
