[⬅️ Back to Past commits of a specific file](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/past-commits-of-a-specific-file.md)

# Show Commit History of a Specific File


![Category: History](https://img.shields.io/badge/Category-History-blue)

#### Command
```sh
git log --oneline -- filename.txt
```

#### Examples
- **List all commits that modified `filename.txt`.** 

 ```sh
git log --oneline -- filename.txt 
 ```
- **Show commit history for a different file.** 

 ```sh
git log --oneline -- path/to/anotherfile.js 
 ```


#### Steps
1. Lists all commits that modified `filename.txt`.


#### Related Commands
- git log -p -- filename.txt
- git blame filename.txt


[➡️ See the Next Step: Show Detailed Commit History (With Changes)](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/show-detailed-commit-history-with-changes.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: log, file, history_
