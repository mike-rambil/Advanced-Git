[⬅️ Back to Table of Contents](../README.md#git-clean-remove-untracked-files-and-directories)

# Git Clean: Remove Untracked Files and Directories


![Category: Stashing and Cleaning](https://img.shields.io/badge/Category-Stashing%20and%20Cleaning-blue)
> Remove untracked files and directories from your repository.

`git clean` is a powerful command that helps remove untracked files and directories from your repository. It is particularly useful when you want to reset your working directory without affecting committed files.


#### Command
```sh
git clean
```

#### Flags
- `-n`: Shows what will be deleted without actually deleting anything.
- `-f`: Forces deletion of untracked files.
- `-d`: Deletes untracked directories.
- `-i`: Interactive mode to selectively delete files.
- `-x`: Removes ignored and untracked files.
- `-X`: Removes only ignored files.


#### Examples
- **Preview what will be deleted (dry run).** 

 ```sh
git clean -n -d 
 ```
- **Delete all untracked files.** 

 ```sh
git clean -f 
 ```
- **Delete all untracked files and directories.** 

 ```sh
git clean -f -d 
 ```
- **Interactive mode for selective deletion.** 

 ```sh
git clean -i 
 ```
- **Delete untracked and ignored files.** 

 ```sh
git clean -f -x 
 ```


#### Steps
1. Preview deletions: `git clean -n -d`
2. Delete untracked files: `git clean -f`
3. Delete untracked files and directories: `git clean -f -d`
4. Interactive deletion: `git clean -i`
5. Remove ignored and untracked files: `git clean -f -x`
6. Remove only ignored files: `git clean -f -X`


#### Prerequisites
- Make sure you have committed all important changes.


#### Warnings
- ⚠️ This will permanently delete files! Always use `-n` before `-f`.
- ⚠️ Be cautious with `-x` and `-X` as they remove ignored files, which might include config files.


#### Links
- [Official Docs](https://git-scm.com/docs/git-clean)


---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: clean, untracked, workspace_
