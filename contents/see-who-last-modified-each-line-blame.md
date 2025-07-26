[⬅️ Back to Past commits of a specific file](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/past-commits-of-a-specific-file.md)

[⬆️ Previous Step: Show Commit History With Author and Date](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/show-commit-history-with-author-and-date.md)

# See Who Last Modified Each Line (Blame)


![Category: History](https://img.shields.io/badge/Category-History-blue)

#### Command
```sh
git blame filename.txt
```

#### Examples
- **Show the last commit that changed each line of the file.** 

 ```sh
git blame filename.txt 
 ```
- **Blame only lines 10 to 20 of a file.** 

 ```sh
git blame -L 10,20 filename.txt 
 ```


#### Steps
1. Shows the last commit that changed each line of the file.


#### Warnings
- ⚠️ Blame can be misleading if the file has been heavily refactored.


[➡️ Continue to Next Topic: Git Clean: Remove Untracked Files and Directories](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/git-clean-remove-untracked-files-and-directories.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: blame, file, history_
