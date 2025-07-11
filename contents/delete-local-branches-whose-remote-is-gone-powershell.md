[⬅️ Back to Cleanup Branches Fast ⚡](./cleanup-branches-fast.md)

[⬆️ Previous Step: Delete Local Branches Whose Remote is Gone (Bash)](./delete-local-branches-whose-remote-is-gone-bash.md)

# Delete Local Branches Whose Remote is Gone (PowerShell)


![Category: Branch Management](https://img.shields.io/badge/Category-Branch%20Management-blue)
> Delete all local branches whose remote counterpart has been deleted, using PowerShell.


#### Command
```sh
git fetch -p
git branch -vv | ForEach-Object { if ($_ -match '\[.*: gone\]') { $parts = $_.Trim() -split '\s+'; $branch = $parts[0]; if ($branch -ne '') { git branch -d $branch } } }
```

#### Examples
- **Delete all local branches whose remote is gone.**


```sh
git fetch -p
git branch -vv | ForEach-Object { if ($_ -match '[.*: gone]') { $parts = $_.Trim() -split '\s+'; $branch = $parts[0]; if ($branch -ne '') { git branch -d $branch } } }
```
- **Delete only feature branches whose remote is gone.**


```sh
git fetch -p
git branch -vv | ForEach-Object { if ($_ -match '[origin/feature: gone]') { $parts = $_.Trim() -split 's+'; $branch = $parts[0]; if ($branch -ne '') { git branch -d $branch } } }
```


#### Steps
1. Fetch latest remote info: `git fetch -p`
2. List local branches whose remote is gone: `git branch -vv | ForEach-Object { if ($_ -match '[.*: gone`]') ... }
3. Delete those branches inside the loop.


#### Warnings
- ⚠️ This will permanently delete local branches. Double-check before running.
- ⚠️ Make sure you have no unmerged work on these branches.


#### ProTips
> [!TIP]
> Great for Windows users to automate branch cleanup.

> [!TIP]
> Review the list before confirming deletion.



[➡️ See the Next Step: View and Clean Up Local Git Branches (Bash)](./view-and-clean-up-local-git-branches-bash.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: branches, cleanup, gone, powershell_
