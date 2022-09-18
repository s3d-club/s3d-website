---
sidebar_position: 1
---

# S3D Workflow
The S3D workflow is the idealized process we follow to bring work to releases.
Our tools are designed to support this workflow.

Our workflow includes `Semantic Versioning`, `GIT`, and the `CHANGELOG.md`
file.

## We use the following GIT remotes

| Name     | Usage                                                |
| -------- | ---------------------------------------------------- |
| `origin` | **https** address for the central repository         |
| `ssh`    | **ssh** address for the central repository           |
| `fork`   | **ssh** address of our personal fork                 |
| `up`     | **https** address of the upstream project _(if any)_ |

## We use the following branches.

| Name         | Usage                                             |
| ------------ | ------------------------------------------------- |
| `main`       | The tagged history of the project                 |
| `next`       | Changes under test to decide if it can be merged  |
| `seen`       | Changes **seen** but not ready to be merged       |
| `work/#.#.#` | Changes for a given topic.                        |

We like the top level of projects to be simple four letter words.

Each of our projects has the (`main`, `next`, and `seen`) branches. We use
`work/#.#.#` branches to prepare a given release.

### Work Branches
We use the prefix `work/` for
[topic](https://git-scm.com/docs/gitworkflows#_topic_branches) branches. A work
branch is created from an existing release tag. Creation of the branch from
`main` is the same as creating the branch from the latest release tag. A work
branch that is a fix for the an earlier release is created from the associated
tag.

```bash title="New work example"
git checkout -b work/12.3.0 main
```

```bash title="Bug fix example"
git checkout -b work/4.0.1 4.0.0
```

The name of the **primay** work branch for a release may be something like
`work/6.0.1` Alphanumeric suffixes are used for parallel development branches
when work that is tentitivly planned for a release but may not be completed in
time or may for various reasons benefit from isolation in a branch. ,
`work/6.0.1-a`, and `work/6.0.1-b` are valid examples of this convention.
Pre-release branches end with the alphabetic suffix to distinguish them from
each other. If external ticket system numbers must be referenced that occurs in
the body of commit messages and/or the text of our `CHANGES.md` file.

In the context of a patch release, we may have activity in `work/8.2.3` as we
are creating the `3rd` patch of our `8.2` version. We may also may have
activity in `work/12.0.0` where release `12.0.0` is in the final steps before
it will be merged to `next`. High risk features may be in branches such as
`work/12.0.0-impl-new-foo`. All work branches are prefixed with a version
number and as such `work/research-bar-mutator` would be an unaceptable branch
name. We would prefer `work/12.0.0-reseach/bar-mutator` because even if we know
that research will not be completed prior to the release of version `12.0.0` we
wish to track that the state of the reseach is in the context of version
`12.0.0`. At some point the branch may be merged to a new branch such as
`work/12.1.0-reseach/bar-mutator` if it needs to become based on the `12.1.0`
release. Depending on the complexity of the issue a `rebase` may also be used.
Work not planned for any release can occur in forks but if it is in the central
project repository it must be in `work/<MAJOR>.<MINOR>.<PATCH>` branches.

We merge from the `next` or a `next/#.#` branch into `main` with a
[--no-ff](https://git-scm.com/docs/git-merge#Documentation/git-merge.txt---no-ff)
merge when we release and apply a tag that we
[--sign](https://git-scm.com/docs/git-tag#Documentation/git-tag.txt---sign) and
describe with a
[--message](https://git-scm.com/docs/git-tag#Documentation/git-tag.txt--mltmsggt)
value. Tags with signatures are described in [signing your
work](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work) and referred
to to as "annotated tags". Each time we merge to main, we increment the version
number and create a `next/#.#` branch if one does not already exist.

The version number in the `CHANGES.md` defines the current state of
development. The way we use the `CHANGES.md` document is discussed
[HERE](/docs/views/changes)

The first commit on our GIT projects is simply an entry with a `CHANGES.md`
file. No other files should exist in the first commit. The `CHANGES.md` file
describes only that a version `0.0.1-1` has been start. We tag version `0.0.0`
and create branch `work/0.0.0` immediately after making the first commit.

Once the first commit has been made, we create the `next` branch. We know we
will have a `next` release and as such, we need that branch. Other branches are
only created when needed.

The second commit to the project occurs on the `next` branch where the
`CHANGES.md` file is edited to add `**TODO**` items. From the start of the
project all work occurs only in `work/` branches.

- We never need to **freeze** development
- Branch states are clear and predictable
- The `CHANGES.md` file is is correct _(or close)_ at all times
- We have tags on all critial points of development
- Consistent patterns work well for scripting and the [S3D](.) CLI

The history of the `s3d-cli` tool follows this approach. Te `s3d-cli` tool is a
project where `s3d flow` commands are developed allowing user of the CLI to
automatically make commits with the associated changes to version numbers.

```text title="The history of this site"
M─┐ [next] Merge branch 'work/0.0.2' into next
│ o [work/0.0.2] {ssh/work/0.0.2} 0.0.1-1 Changes; completed 7 of 16 items
M─┤ [main] {ssh/next} {ssh/main} <0.0.1> <work/0.0.1> 0.0.1
│ M─┐ Merge branch 'work/0.0.1' into next
│ │ o Added `git clean -fdx` to `s3d-install`
│ │ o Removed stub commands
│ │ o `CHANGES.md`
│ │ o `main.go`
│ │ o 0.0.1-2 Misc.
│ │ o `README.md`
│ │ o `LICENSE`
│ M─┤ Merge branch 'work/0.0.1' into next
│ │ o `CHANGES.md`
│ │ o `README.md`
│ M─┤ Merge branch 'work/0.0.1' into next
│ │ o [fix] Planning
│ o─┘ <0.0.1-1> 0.0.1-1 Prototype #1
I─┘ <0.0.0> 0.0.0
```
