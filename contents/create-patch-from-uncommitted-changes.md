[⬅️ Back to Sharing Changes as Patch Files](./sharing-changes-as-patch-files.md)

[⬆️ Previous Step: Apply Patch with Commit Metadata](./apply-patch-with-commit-metadata.md)

# Create Patch from Uncommitted Changes


![Category: Patch & Diff](https://img.shields.io/badge/Category-Patch%20%26%20Diff-blue)

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


[➡️ See the Next Step: Apply Diff File](./apply-diff-file.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: diff, uncommitted, snapshot_
