[⬅️ Back to Past commits of a specific file](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/past-commits-of-a-specific-file.md)

[⬆️ Previous Step: Show Commit History of a Specific File](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/show-commit-history-of-a-specific-file.md)

# Show Detailed Commit History (With Changes)


![Category: History](https://img.shields.io/badge/Category-History-blue)

#### Command
```sh
git log -p -- filename.txt
```

#### Examples
- **Show each commit and the actual changes made to `filename.txt`.** 

 ```sh
git log -p -- filename.txt 
 ```
- **Show the last two commits and their changes for a file.** 

 ```sh
git log -p -2 -- filename.txt 
 ```


#### Steps
1. Shows each commit and the actual changes made to `filename.txt`.


#### Related Commands
- git log --oneline -- filename.txt


[➡️ See the Next Step: Show Commit History With Author and Date](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/show-commit-history-with-author-and-date.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: log, diff, file_
