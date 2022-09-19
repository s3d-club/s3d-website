# The Site Module

To complete the task, you need a Hosted Zone for your AWS Account. If you or
someone you know has control over the hosted zone of a public internet domain
you can create a new subdomain for this project and associate that subdomain
with this account. If you do not have control over a top level domain you an
purchase one using AWS with the following link. If you do not wish to purchase
a top level domain reach out to someone in the S3D group who may be willing to
provide you with a subdomain that they associate with a top level domain that
they own and help you configure your account to have a hosted zone associaed
with a domain managed by another account. If you would like to user account to
be connected to the base `s3d.club` domain please contact us and explain your
reasons. We are open to the idea of allowing our club members to use the
`s3d.club` domain with site like `my-fast-car.s3d.club`.  But, for this
tutorial we recommend you register your own top level domain.

To register a new top level domain use a web browser to access
[THIS](https://us-east-1.console.aws.amazon.com/route53/home#DomainRegistration:)
page _(when you search look at the `.click` domain because it is currently
quite low in cost)_.

Once your site is assosociated with the domain you will be using you can
proceed.

We should do our work in a directory so create a directory for our work.
Directory names should generally be lower case and should generally use `-` as
word seperators. Difference developer have different approaches but my rule is
to only use capitalization or underscores when some programtic requirement
exists to do so. For this first site, use something like `my-site`, `alpha`,
`s3d-project-1`, or something that makes sense to you.

```bash
mkdir ~/my-site
cd ~/my-site
```

Create a `main.tf` file and enter the following code. In your code, change the
values of the two local variables to be the base domain and subdomain that you
wish to use.

```terraform
locals {
  base_domain = "s3d.club"
  subdomain   = "my-site"
}

module "site" {
  source  = "git::https://github.com/s3d-club/terraform-aws-site.git?ref=0.0.1"

  domain   = "${subdomain}.${base_domain}"
  key_name = "sre-k1"
}
```

Notice that your VIM editor is not displaying color coding to help you see the
logical structure of the configuration.

A system where VIM highlights the systax of the various program languages helps
us learn and understand the content of various program texts. If you have
trouble with any of the colors spend some time to adjust the terminal viewing
software and/or VIM configuration but try to where possible stay as close as
practical to the default configuration since it is generally well designed.

Issue the following command to add a VIM plugin.

```bash
git clone https://github.com/hashivim/vim-terraform.git ~/.vim/pack/plugins/start/vim-terraform
```

The syntax of this configuration program is quite simple.

We start by declaring a `module` and explain that the module should use source
code from `s3d-club/site/aws`. We name our module `site`. The code within the
`{` and `}` charactors defines how the module is used. We have an
input variable called `name` with a value that we construct from our local
variables.

A lot is happening in that short bit of code!

The language for the software is a precise and well defined language and as
such the Terrafrom language is a good choice to avoid misunderstandings. The
languages of computer systems are far less complicated as compared to spoken
language. The computer requires the neat structre and simplictiy of specialized
languages. As a dyslexic, I find languages where the rules are clear and
consistent to be more enjoyable vs. the verbose and random syntax of _normal_
writing.

After completing `main.tf`, issue the following command and review the output.

```bash
terraform init
```

The output should include something like the folowing for the first command.
There will be a lot of *extra* text on the screen but look for the following
message to confirm things are working.

```text
Terraform has been successfully initialized!
```

Our next command is to validate the syntax of our configuration,

```bash
terraform validate 
```

The `validate` command should produce something like the following.

```text
Success! The configuration is valid.
```

Our next command is Terraform Apply.

```bash
terraform apply
```

Observe that you will get an error with a message that includes a phrase such
as `no valid credential sources`.

Although our EC2 instance is running in our AWS VPC we have not configured any
credentials and as such the environment Terraform is executing in does not have
the ability to interact with AWS services.

## IAM User and an Access Key

To provide Terraform with the ability to interact with AWS we will use
CloudShell to generate credentials and then use the AWS CLI to add these
credentials to our environment.

To create credentials, issue the following command in a cloudshell session
_(i.e. the browser based terminal)_.

Prior to running the script exit your secure shell hosted session so you can
execute the command from CloudShell. We use the `exit` command to exit the
session.

```bash title="ON THE EC2"
exit
```

The following input complex so make sure to enter it carefully but actually
type this out. Do not use cut/n/paste because you will learn better if you type
this complex sequence and think about what you are doing. This is powerful
code!

```bash title="ON CLOUDSHELL NOT EC2"
a=AdministratorAccess
a=arn:aws:iam::aws:policy/$a
u_=--user-name
p_=--policy-arn
u=s3d-u1
aws iam create-user        $u_ $u
aws iam attach-user-policy $u_ $u $p_ $a
aws iam create-access-key  $u_ $u | 
jq .AccessKey |
tee ~/s3d-u1-key.json
```

View the output of the commands.

Notice how we used shell enviornment variables in the commands with `$i`, `$a`,
`$u_`, `$p_`, and `$u`. _(don't worry too much about the complexity; in the
scripting just now I was **having fun** and wanted to show the power while
saving us both the task of typing things like `aws iam` and `--user-name`
multiple times)_

The script output just now shows you a secret key that it created for accessing
your account.

**NEVER** share the `SecretAccessKey` with anyone you do not totally trust.
When combined with the `AccessKeyId` this secret provides access to your
account. In the command sequence above, the fragment `| tee ~/s3d-u1-key.json`
causes output to be saved into a file in addition to being displayed.  In this
context, the command `tee` is like a plumbing joint where a pipe is split to
create output in two streams. If the `tee` command is new to you enter `tee
--help` to read about it.  After reading the help output from the `tee` command
issue the command `man tee` to see the full manual page where similar
information is provided.

The start script that I created for this tutorial will transfer all files that
end with `.json` to your EC2 instance when you run `./scripts/ssh-to-s3d`. Now
is a good time for you to review that script using `vim ./scripts/ssh-to-s3d`.

Enter the following to reconnect with the EC2 instnace and also transfer the
files.

```bash
~/s3d-tutorial-start/scripts/ssh-to-s3d
```

After you have transfered the `./s3d-u1-key.json` file to the EC2 instance you
can issue the following commands to configure credentials on the EC2 instance.

```bash
sudo yum install -y jq
key_id=$(jq -r .AccessKeyId < ~/s3d-u1-key.json)
key_secret=$(jq -r .SecretAccessKey < ~/s3d-u1-key.json)
```

```bash
aws configure set aws_access_key_id "$key_id"
aws configure set aws_secret_access_key "$key_secret"
```

Now we have AWS Credentials set on the EC2 instance these credentials mean that
now our EC2 instance has the same level of permission as the CloudShell. Since
nothing else is running in the account and since we will not let other users
work on our EC2 instance this is okay but realize that any script we execute
has full permission to the account. Later we can create instances that have a
reduced level of privilige depending on how we decide to manage our account.

Since we are only running scripts that we personally inspect using of an
administation level access key for this instance is not a problem.

Depending on where you are in the world, edit the following commands to use an
AWS region that is physically near you.

```bash
aws configure set region us-east-1
```

## Create an S3 Bucket for Terraform State

We need a S3 Bucket where we can store Terraform remote state. Issue the
following command to create a S3 Bucket where the bucket name is based on the
ID of your AWS account with the suffix `-tf`.  S3 Bucket names must be unique
in and as such including your account name as part of the bucket name will
avoid conflicts with existing buckets managed by other accounts. If you do end
up having an error, change the suffix to something like `-1-tf`.

```bash
acct=$(aws sts get-caller-identity --query Account --output text)
aws s3 mb "s3://$acct-tf"
```

You can see your bucket by issuing the following command.

```bash
aws s3 ls
```

S3 buckets can be used any time you need to store something on AWS. We will
configure Terraform to use this bucket to store the state of resources it
manages in the account.

Provided you were able to successfully create a S3 bucket it is time to create
an table in DynamoDB so that Terraform can manage locks that ensure only one
process is accessing a given state key at a given time.

Issue the following command to create the DynamoDB table.

```bash
table_name="$(aws sts get-caller-identity --query Account --output text)-tf"
aws dynamodb create-table \
  --table-name $table_name \
  --attribute-definitions \
  --attribute-definitions 'AttributeName=LockID,AttributeType=S' \
  --key-schema AttributeName='LockID,KeyType=HASH' \
  --provisioned-throughput 'ReadCapacityUnits=5,WriteCapacityUnits=5'
```

Create a file named `terraform.tf` with the following content.  Change the
values of the `bucket` and `dynamodb_table` attributes so they match the names
of the ones you created in the previous steps. You can issue the commands `aws
sts get-caller-identity`, `aws s3 ls`, `aws dynamodb list-tables` to help you
determine the values you need.

```terraform
terraform {
  backend "s3" {
    bucket         = "000000000000-tf"
    dynamodb_table = "000000000000-tf"
    key            = "my-site.tfstate"
    region         = "us-east-1"
  }
}
```

Issue the `terraform validate` command once again to check your syntax. If
needed, edit your files until they are resolved.

## Re-init and then Apply the Configuration
Issue the following command to apply your configuration.

```bash
terraform init
terraform apply
```

When prompted review the plan output and enter `yes` to proceed.

You should see the following output.

```text
Apply complete! Resources: 21 added, 0 changed, 0 destroyed.
```

Execute `terraform apply` again and this time observe that Terraform will
report that there are no changes.

## Output the our site information.

We have created our site and, if we own the domain a simple page should now
show up when you enter the URL `https://<my-site>`.

Create a file named `outputs.tf` with the following content.

```terraform
output "site" {
  value = module.site
}
```

To add the output to your state, execute `terraform apply` and after reviewing
the change respond `yes` to the prompt.

```bash
terraform apply
```

The output values provide you with your website URL and the address for your
EC2 instance. You can access the EC2 instance using the PEM file you have on
your cloud shell instance.

You can use a web browser to visit your home page.

## Update your home page

In our next tutorial, we will define a home page project but for now, we will
directly update your home page.

Create a file called `~/index.html`.

```bash
vim ~/index.html
```

In your [HTML](https://en.wikipedia.org/wiki/HTML) file add the following code.

```html
<head><body><h1>
HELLO WORLD!
</h1></body></head>
```

Save your file using `:wq` and then copy your file to the root of the S3 Bucket
for your website. The name of the S3 bucket is provided in the output from
Terraform.

```bash
bucket=$(terraform output -json | jq .site.bucket)
aws s3 cp ~/index.html "s3://$bucket"
```

After the update use a web browser to view the page and confirm that the site
is working correctly. It may take a couple minutes for the update to be
available on the website.

## Save your work

We now need to commit changes to record the work we have done.

Type `git init` inside your directory to create a new GIT history and ensure
that you are on the `main` branch. We recommend using the name `origin` for
your `https` origin and using the name `ssh` for your SSH url. Setting up your
site with both names will help you start to see that in GIT the same location
can be referenced with different protocols and different names. The `https`
protocol works for anonymous access and in general most of my GitHub
repositories are public to the world. If you do not wish the source code for
your site to be public to the world use the SSH address for both the `origin`
and the `ssh` remotes.

You will of course need to establish an account with GitHub to proceed.

```bash
git init
git branch -m main
git remote add origin https://github.com/XXXXXXXXX/s3d-site.git
git remote add ssh git@github.com:farnsworth2008/s3d-site.git
```

The output should list the follows four items as "Untracked files".

```text
.terraform.lock.hcl
.terraform/
main.tf
terraform.tf
```

This output shows three files and one directory as part of the "Untracked"
state. Two of the three files should be obvious to you. In earlier steps you
created `main.tf` and `terraform.tf`. Clearly, we want to add these new files
to the Git index and commit them.

The directory `.terraform/` is described
[HERE](https://www.terraform.io/cli/init).

We do not want to commit the contents of this directory and as such need to add
`.terraform` to our `.gitignore` file.

Use VIM to edit the `.gitignore` file and add the line `/.terraform/` to that
file. The lines of the `.gitignore` file are not required to be maintained in
any given order but the author of this guide feels it is always best to keep
thing in sorted order so you may choose to follow that convention.

After adusting the `.gitignore` file you must commit the change to that file.

Once you have all your changes committed you should issue the `git status`
command and confirm that your system now reports "clean" status. The changes
are stored only on the EC2 instance until you issue the `git push` command.

Issue the `git push` command as follows. Since we have a remote named `origin`
and another remote name `ssh` on our first push of a branch we must specify
which remote to use. The `-u` option means that in the future we will not need
to explicitly specify which remote to use. I personally like the approach of
using the `origin` remoe for the `https` protocol and using a remote named
`ssh` for our secure remote but many people come up with many approches and
everyone decides what conventions work best for them.

```bash
git push -u ssh HEAD
```

With our Terraform changes applied and our code safely pushed, we can now
proceed.

