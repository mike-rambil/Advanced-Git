[⬅️ Back to Sharing Changes as Patch Files](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/sharing-changes-as-patch-files.md)

[⬆️ Previous Step: Create Patch from Last Commit(s)](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/create-patch-from-last-commit-s.md)

# Apply Patch with Commit Metadata


![Category: Patch & Diff](https://img.shields.io/badge/Category-Patch%20%26%20Diff-blue)

#### Command
```sh
git am my-changes.patch
```

#### Examples
- **Apply a patch file and preserve commit info.** 

 ```sh
git am my-changes.patch 
 ```
- **Apply a patch and add a Signed-off-by line.** 

 ```sh
git am --signoff my-changes.patch 
 ```


#### Steps
1. Run '`git am my-changes.patch' to apply the patch and preserve commit messages, authorship, and timestamps`.


[➡️ See the Next Step: Create Patch from Uncommitted Changes](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/create-patch-from-uncommitted-changes.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: patch, am, apply_
