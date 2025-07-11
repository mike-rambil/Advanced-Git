[⬅️ Back to Miscellaneous & Orphaned Git Commands](./miscellaneous-orphaned-git-commands.md)

[⬆️ Previous Step: git request-pull](./git-request-pull.md)

# View and Clean Up Local Git Branches (Bash)


![Category: Branch Management](https://img.shields.io/badge/Category-Branch%20Management-blue)
> Scripts to view and clean up local branches using Bash.


#### Examples
- **List local branches without a remote connection.**


```sh
git branch -vv | grep -E '^\s*\S+\s+[^\[]+$'
```
- **Delete local branches without remote tracking.**


```sh
git branch -vv | grep -E '^\s*\S+\s+[^\[]+$' | awk '{print $1}' | xargs git branch -D
```


#### Steps
1. List local branches.
2. Delete local branches without remote.
3. View branches with deleted remote.
4. Delete stale local branches.


#### Warnings
- ⚠️ Deleting branches is irreversible. Double-check before running destructive commands.


[➡️ See the Next Step: View and Clean Up Local Git Branches (PowerShell)](./view-and-clean-up-local-git-branches-powershell.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: branches, cleanup, bash_
