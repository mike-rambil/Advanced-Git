[⬅️ Back to Sharing Changes as Patch Files](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/sharing-changes-as-patch-files.md)

[⬆️ Previous Step: Create Patch from Uncommitted Changes](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/create-patch-from-uncommitted-changes.md)

# Apply Diff File


![Category: Patch & Diff](https://img.shields.io/badge/Category-Patch%20%26%20Diff-blue)

#### Command
```sh
git apply changes.diff
```

#### Examples
- **Apply a diff file of uncommitted changes.** 

 ```sh
git apply changes.diff 
 ```
- **Show what would change if the diff were applied.** 

 ```sh
git apply --stat changes.diff 
 ```


#### Steps
1. Run '`git apply changes.diff' to apply the changes from a diff file`.


[➡️ See the Next Step: Patch vs Diff: Quick Reference](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/patch-vs-diff-quick-reference.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: diff, apply, uncommitted_
