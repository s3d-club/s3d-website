---
sidebar_position: 3
---
# S3D Workflow
The S3D workflow is the process we follow to bring work into releases.

Our tools are designed to support this workflow. The [S3D
CLI](/docs/source/s3d-cli/) has commands that automate away much of the tedious
work required to produce GIT commits with quality informative comments and
helps teams describe development progress.

Our process is quite a bit different from [GIT
Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow),
[GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow),
or [GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html).

Some core differences:
- We always tag **before** we merge
- We have shorter branch names `work` vs `feature`
- Our focus a lot more on tagging vs. branches
- Our `main` branch is a clean history of only release tags
- Our `work/` branches replace (`feature/`, `fix/`, `hotfix/`, and other names)

At **ANY** point we describe the context as a version numbeer. We also simplify
branch names, workflow steps, and provide automation for committing and
tagging.

Since we are **opinionated**, we have exact rules for how we name things. For
example, we only use `origin` as a name for an `https` address of the central
repo. Sure, `git` allows you to use `ssh` protocol for the origin remote but
that only works if you have priviliges to that remote.  Since in the course of
our work we have some repos from other teams where we don't have push access we
simply decide that in our world view `origin` is a name we reserve for general
purpose non push access. If we `push` something it will be to the remotes named
`ssh`, `fork`, or `up`.Standard names supports a structure where our scripts
are able to find the content needed for operations.

## We use the following GIT remotes
| Name     | Usage                                                |
| -------- | ---------------------------------------------------- |
| `origin` | **https** address for the central repository         |
| `ssh`    | **ssh** address for the central repository           |
| `fork`   | **ssh** address of our personal fork                 |
| `source` | **https** address of the upstream project _(if any)_ |
| `up`     | **ssh** address of the upstream project _(if any)_   |

## We use the following branches
| Name         | Usage                                             |
| ------------ | ------------------------------------------------- |
| `main`       | The tagged history of the project release         |
| `work/#.#.#` | Changes for a given topic.                        |

Projects may have other branches that we ignore those in the context of our
flow.

## We use the following tags
| Name       | Usage                                                          |
| ---------- | ---------------------------------------------------------------|
| #.#.#      | Version tags _(these tags are remove and/or re-pushed rarely)_ |
| #.#.#-#### | Pre-release tags _(repushed and/or removed often)_             |

In our system, pre-release numbers are in the range of `1000` to `9999`. If the
range limit is reached we increment the patch number so we can restart the
pre-release number and document the _yanked_ release.

### Work Branches
We use the prefix `work/` for
[topic](https://git-scm.com/docs/gitworkflows#_topic_branches) branches. A work
branch is created from an existing release tag. Creation of the branch from
`main` is the same as creating the branch from the latest release tag.

A work branch that is a fix for the an earlier release is created from the
associated tag. When work is completed or abandoned, the branch is removed.

Work branches are entirely optional. Some of us prefer to do most of our work
on detatched heads. The real reason to us a work branch is when sharing a
stream of work with others on a team because with a branch they do not need to
know the number of the latest tag.

```bash title="New work example"
git checkout -b work/12.3.0 main
```

```bash title="Bug fix example"
git checkout -b work/4.0.1 4.0.0
```

The version number in the `CHANGES.md` defines the current state of
development. _(Our `CHANGES.md` document is discussed
[HERE](./changes))_

The first commit on our GIT projects is usually a tagged version `0.0.0`.

### Merge to `main`
We create a pre-release tags **PRIOR** to the merge to main. We inspect and
test and it's history. In a development cycle **many** pre-release tags are
created and shared. Only at the point where we are completely happy with a tag
do we run the tool that creates the final release tag. After the the final
release tag is created it goes through it's final testing and only then do we
merge that point into our main branch.

By delaying the merge of to main until the last possible point we are able use
our `main` branch a carefully currated history that provides long term value
for the team.

### Rewriting History
History re-writing is **VERY** rare but it does happen.

We believe history rewriting and repushing tags is vaild and occasionally
**good** provided the following is maintained.
- Appropiate tracking of the authorship is maintained
- The team understands [patch theory](https://go.s3d.club/patch)
- New tags are the the same _(or very near to the same)_ content _(only history
  should be changed in a tag rewrite)_
- A message in the annotation of the new tag describing why it was rewritten
  and providing a reference to the prior revision.
