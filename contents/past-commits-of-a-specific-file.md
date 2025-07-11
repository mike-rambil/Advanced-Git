[⬅️ Back to Table of Contents](../README.md#past-commits-of-a-specific-file)

# Past commits of a specific file


![Category: History and Inspection](https://img.shields.io/badge/Category-History%20and%20Inspection-blue)
> See all commits and changes for a specific file.

## Subcommands
- [Show Commit History of a Specific File](./show-commit-history-of-a-specific-file.md)
- [Show Detailed Commit History (With Changes)](./show-detailed-commit-history-with-changes.md)
- [Show Commit History With Author and Date](./show-commit-history-with-author-and-date.md)
- [See Who Last Modified Each Line (Blame)](./see-who-last-modified-each-line-blame.md)

You can see all commits related to a specific file using Git commands. Here are a few ways to do it:


---

### Subcommands
#### Show Commit History of a Specific File

#### Command
```sh
git log --oneline -- filename.txt
```

#### Examples
- **List all commits that modified `filename.txt`.**


```sh
git log --oneline -- filename.txt
```


#### Steps
1. Lists all commits that modified `filename.txt`.


#### Tags
`log`, `file`, `history`

#### Related Commands
- git log -p -- filename.txt
- git blame filename.txt


#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Show Detailed Commit History (With Changes)

#### Command
```sh
git log -p -- filename.txt
```

#### Examples
- **Show each commit and the actual changes made to `filename.txt`.**


```sh
git log -p -- filename.txt
```


#### Steps
1. Shows each commit and the actual changes made to `filename.txt`.


#### Tags
`log`, `diff`, `file`

#### Related Commands
- git log --oneline -- filename.txt


#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Show Commit History With Author and Date

#### Command
```sh
git log --pretty=format:"%h - %an, %ar : %s" -- filename.txt
```

#### Examples
- **Display commit hash, author, relative date, and commit message.**


```sh
git log --pretty=format:"%h - %an, %ar : %s" -- filename.txt
```


#### Steps
1. Displays commit hash, author, relative date, and commit message.


#### Tags
`log`, `author`, `date`

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### See Who Last Modified Each Line (Blame)

#### Command
```sh
git blame filename.txt
```

#### Examples
- **Show the last commit that changed each line of the file.**


```sh
git blame filename.txt
```


#### Steps
1. Shows the last commit that changed each line of the file.


#### Warnings
- ⚠️ Blame can be misleading if the file has been heavily refactored.


#### Tags
`blame`, `file`, `history`

#### Author
mike-rambil

#### Last Updated
2024-06-10


---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: history, inspection, file_
