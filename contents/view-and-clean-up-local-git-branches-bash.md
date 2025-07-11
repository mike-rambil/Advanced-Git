[⬅️ Back to Cleanup Branches Fast ⚡](./cleanup-branches-fast.md)

[⬆️ Previous Step: Delete Local Branches Whose Remote is Gone (PowerShell)](./delete-local-branches-whose-remote-is-gone-powershell.md)

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
- **List branches whose remote is gone.** 

 ```sh
git branch -vv | grep 'gone' 
 ```


#### Steps
1. List local branches.
2. Delete local branches without remote.
3. View branches with deleted remote.
4. Delete stale local branches.


#### Warnings
- ⚠️ Deleting branches is irreversible. Double-check before running destructive commands.


#### ProTips
> [!TIP]
> Use 'git branch -vv' to see tracking info for all branches.

> [!TIP]
> Pipe to 'awk' and 'xargs' for batch deletion.



[➡️ See the Next Step: View and Clean Up Local Git Branches (PowerShell)](./view-and-clean-up-local-git-branches-powershell.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: branches, cleanup, bash_
