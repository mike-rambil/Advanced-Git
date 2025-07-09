# Miscellaneous & Orphaned Git Commands


#### Category
Miscellaneous
> Useful Git commands and scripts not referenced elsewhere.

This file collects useful Git commands and scripts that were previously only in the README and not referenced elsewhere in this repository.


#### Tags
 [1mmisc [0m,  [1mcleanup [0m,  [1madvanced [0m

#### Author
mike-rambil

#### Last Updated
2024-06-10

---

### Subcommands
#### git maintenance start
Runs a cronJob in background for the specified repo for periodic maintenance.
- `git maintenance start`

#### Examples
- **Enable background maintenance for your repository.**

  ```sh
git maintenance start
```


#### Steps
1. Run `git maintenance start` in your repository.


#### Links
- [Official Docs](https://git-scm.com/docs/git-maintenance)


#### Tags
 [1mmaintenance [0m,  [1mautomation [0m

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### git request-pull
Generate a request to pull changes into a repository.
- `git request-pull <start> <url> <end>`

#### Examples
- **Generate a pull request message from v1.0 to v1.1.**

  ```sh
git request-pull v1.0 https://github.com/example/repo.git v1.1
```


#### Steps
1. Run `git request-pull <start> <url> <end>` to generate a pull request message.


#### Links
- [Official Docs](https://git-scm.com/docs/git-request-pull)


#### Tags
 [1mcollaboration [0m,  [1mpull-request [0m

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### View and Clean Up Local Git Branches (Bash)
Scripts to view and clean up local branches using Bash.

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
 [1mbranches [0m,  [1mcleanup [0m,  [1mbash [0m

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### View and Clean Up Local Git Branches (PowerShell)
Scripts to view and clean up local branches using PowerShell.

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

