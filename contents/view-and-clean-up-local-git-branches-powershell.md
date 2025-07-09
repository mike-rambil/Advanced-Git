# View and Clean Up Local Git Branches (PowerShell)


#### Category
Branch Management
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


#### Tags
 [1mbranches [0m,  [1mcleanup [0m,  [1mpowershell [0m

#### Author
mike-rambil

#### Last Updated
2024-06-10
