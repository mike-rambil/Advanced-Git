[⬅️ Back to Cleanup Branches Fast ⚡](./cleanup-branches-fast.md)

# Delete Local Branches Whose Remote is Gone (Bash)


![Category: Branch Management](https://img.shields.io/badge/Category-Branch%20Management-blue)
> Delete all local branches whose remote counterpart has been deleted, using Bash.

This command fetches the latest remote info and deletes all local branches whose remote tracking branch no longer exists (marked as 'gone'). Useful for cleaning up after remote branch deletions.


#### Command
```sh
git fetch -p && git branch -vv | grep '\[origin/.*: gone\]' | awk '{print $1}' | xargs -r git branch -d
```

#### Examples
- **Delete all local branches whose remote is gone.** 

 ```sh
git fetch -p && git branch -vv | grep '\[origin/.*: gone\]' | awk '{print $1}' | xargs -r git branch -d```
- **Delete only feature branches whose remote is gone.** 

 ```sh
git fetch -p && git branch -vv | grep '\[origin/feature: gone\]' | awk '{print $1}' | xargs -r git branch -d```


#### Steps
1. Fetch latest remote info: `git fetch -p`
2. List local branches whose remote is gone: `git branch -vv | grep '[origin/.*: gone`]'
3. Delete those branches: ... | awk '{print $1}' | xargs -r `git branch -d`


#### Warnings
- ⚠️ This will permanently delete local branches. Double-check before running.
- ⚠️ Make sure you have no unmerged work on these branches.


#### ProTips
> [!TIP]
> Use this after deleting branches on the remote to keep your local repo tidy.

> [!TIP]
> Add 'echo' before 'git branch -d' to preview what will be deleted.



[➡️ See the Next Step: Delete Local Branches Whose Remote is Gone (PowerShell)](./delete-local-branches-whose-remote-is-gone-powershell.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: branches, cleanup, gone, bash_
