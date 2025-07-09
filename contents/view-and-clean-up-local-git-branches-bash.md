# View and Clean Up Local Git Branches (Bash)


#### Category
Branch Management
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


#### Tags
`branches`, `cleanup`, `bash`

#### Author
mike-rambil

#### Last Updated
2024-06-10
