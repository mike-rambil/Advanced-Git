[⬅️ Back to Sharing Changes as Patch Files](./sharing-changes-as-patch-files.md)

# Create Patch from Last Commit(s)


![Category: Patch & Diff](https://img.shields.io/badge/Category-Patch%20%26%20Diff-blue)

#### Command
```sh
git format-patch HEAD~1
```

#### Examples
- **Create a .patch file for the last commit.**

```sh
git format-patch HEAD~1```
- **Create a single patch file for all commits on top of main.**

```sh
git format-patch origin/main..HEAD --stdout > my-changes.patch```
- **Create patch files for the last two commits.**

```sh
git format-patch -2```
- **Create patch files for all commits since main.**

```sh
git format-patch -2 origin/main..HEAD```


#### Steps
1. Run '`git format-patch HEAD~1' to create a patch for the last commit`.
2. Use '`git format-patch origin/main..HEAD --stdout > my-changes.patch' to create a single patch file for multiple commits`.


#### Warnings
- ⚠️ Patch files created this way include commit messages, authorship, and timestamps.
- ⚠️ Use 'git am' to apply these patches on another system.


#### Links
- [Official Docs](https://git-scm.com/docs/git-format-patch)


[➡️ See the Next Step: Apply Patch with Commit Metadata](./apply-patch-with-commit-metadata.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: patch, format-patch, committed_
