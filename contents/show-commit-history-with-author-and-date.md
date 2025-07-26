[⬅️ Back to Past commits of a specific file](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/past-commits-of-a-specific-file.md)

[⬆️ Previous Step: Show Detailed Commit History (With Changes)](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/show-detailed-commit-history-with-changes.md)

# Show Commit History With Author and Date


![Category: History](https://img.shields.io/badge/Category-History-blue)

#### Command
```sh
git log --pretty=format:"%h - %an, %ar : %s" -- filename.txt
```

#### Examples
- **Display commit hash, author, relative date, and commit message.** 

 ```sh
git log --pretty=format:"%h - %an, %ar : %s" -- filename.txt 
 ```
- **Show commit hash, short date, author, and message.** 

 ```sh
git log --pretty=format:'%h | %ad | %an | %s' --date=short -- filename.txt 
 ```


#### Steps
1. Displays commit hash, author, relative date, and commit message.


[➡️ See the Next Step: See Who Last Modified Each Line (Blame)](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/see-who-last-modified-each-line-blame.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: log, author, date_
