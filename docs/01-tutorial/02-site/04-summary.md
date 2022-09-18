# Summary

In this tutorial you configured your site using Terraform modules.

For now, your AWS Account simply provides you a place with a simple [home
page](https://en.wikipedia.org/wiki/Home_page). Your AWS account manages the
hosted zone of the domain for your site. You have a
[ACM](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html)
managed certificate. Your home page can be visited at `https://www.<DNS_NAME>`
_(or you can leave out the `www` component)_. It is not much but it is the
start of great things for your site.

You also have an `admin-dev-work-1.<DNS_NAME>` where you can administer your
site. This EC2 instance provides you an enviornment where you have Linux based
development tools including VIM and Terraform.

Later, you will make use of the site in the work you do to build your skills.
