# Sharing Changes as Patch Files


![Category: Patch & Diff](https://img.shields.io/badge/Category-Patch%20%26%20Diff-blue)
> Generate and share patch files for committed or uncommitted changes.

How to create patch files from your changes for sharing via email, SCP, Slack, or other means. Covers both committed (with full commit metadata) and uncommitted changes.


#### Tags
`patch`, `diff`, `sharing`, `email`, `collaboration`

#### Author
mike-rambil

#### Last Updated
2024-06-10

---

### Subcommands
#### Create Patch from Last Commit(s)

#### Command
```sh
git format-patch HEAD~1
```

#### Examples
- **Create a .patch file for the last commit.**


```sh
git format-patch HEAD~1
```
- **Create a single patch file for all commits on top of main.**


```sh
git format-patch origin/main..HEAD --stdout > my-changes.patch
```


#### Steps
1. Run '`git format-patch HEAD~1' to create a patch for the last commit`.
2. Use '`git format-patch origin/main..HEAD --stdout > my-changes.patch' to create a single patch file for multiple commits`.


#### Warnings
- ⚠️ Patch files created this way include commit messages, authorship, and timestamps.
- ⚠️ Use 'git am' to apply these patches on another system.


#### Links
- [Official Docs](https://git-scm.com/docs/git-format-patch)


#### Tags
`patch`, `format-patch`, `committed`

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Apply Patch with Commit Metadata

#### Command
```sh
git am my-changes.patch
```

#### Examples
- **Apply a patch file and preserve commit info.**


```sh
git am my-changes.patch
```


#### Steps
1. Run '`git am my-changes.patch' to apply the patch and preserve commit messages, authorship, and timestamps`.


#### Tags
`patch`, `am`, `apply`

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Create Patch from Uncommitted Changes

#### Command
```sh
git diff > changes.diff
```

#### Examples
- **Create a diff file of uncommitted changes.**


```sh
git diff > changes.diff
```


#### Steps
1. Run '`git diff > changes.diff' to save uncommitted changes to a file`.


#### Warnings
- ⚠️ This does NOT preserve commit metadata or history—just raw changes.


#### Links
- [Official Docs](https://git-scm.com/docs/git-diff)


#### Tags
`diff`, `uncommitted`, `snapshot`

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Apply Diff File

#### Command
```sh
git apply changes.diff
```

#### Examples
- **Apply a diff file of uncommitted changes.**


```sh
git apply changes.diff
```


#### Steps
1. Run '`git apply changes.diff' to apply the changes from a diff file`.


#### Tags
`diff`, `apply`, `uncommitted`

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Patch vs Diff: Quick Reference

#### Tags
`patch`, `diff`, `reference`

#### Author
mike-rambil

#### Last Updated
2024-06-10

