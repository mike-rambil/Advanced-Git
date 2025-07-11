[⬅️ Back to Cleanup Branches Fast ⚡](./cleanup-branches-fast.md)

[⬆️ Previous Step: View and Clean Up Local Git Branches (Bash)](./view-and-clean-up-local-git-branches-bash.md)

# View and Clean Up Local Git Branches (PowerShell)


![Category: Branch Management](https://img.shields.io/badge/Category-Branch%20Management-blue)
> Scripts to view and clean up local branches using PowerShell.


#### Examples
- **List local branches without a remote connection.**


```sh
git branch -vv | Select-String -NotMatch "origin/"
```
- **Delete local branches without remote tracking.**


```sh
git branch -vv | Select-String -NotMatch "origin/" | ForEach-Object { $branch = ($_ -split "\s+")[1]; git branch -D $branch }
```


#### Steps
1. List local branches.
2. Delete local branches without remote.
3. View branches with deleted remote.
4. Delete stale local branches.


#### Warnings
- ⚠️ Deleting branches is irreversible. Double-check before running destructive commands.


---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: branches, cleanup, powershell_
