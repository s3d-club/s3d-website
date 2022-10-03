---
sidebar_position: 1
---

# S3D Name Module
## Overview
This module produces randomized names that follow a style we find is useful.

Injecting random information into names helps us avoid collision when we are
establishing new resources that replace existing onces. Most of the names in
our configurations use this module. Unless a strong reason exist to avoid
random names we recommend using this module.

Our names are a mix of informative informative and random information. In this
module we use the `random` provider's `random` providers `pet` resource to
construct part of our name but in our wrapper we replace `python` with `znake`
because we have found that resources named as `python` confuse us because the
random pet `python` will likely be confused with teams thinking it is a
reference to the popular programming language of the same name.

We use the `time` provider's `static` resource to capture the date the resource
is created and include it as part of the name.

The name that results also has the prefix that was supplied as input and is
limited to a set size. The final name will be unique enough to avoid collisions
and still be comfortable for us.

[chge]: ./CHANGES.md
[code]: ./CODE-OF-CONDUCT.md
[cont]: ./CONTRIBUTING.md
[lice]: ./LICENSE.md
