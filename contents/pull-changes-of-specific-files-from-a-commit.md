[⬅️ Back to Table of Contents](../README.md#pull-changes-of-specific-files-from-a-commit)

# Pull Changes of Specific Files from a Commit


![Category: Selective File Restore](https://img.shields.io/badge/Category-Selective%20File%20Restore-blue)
> Restore or pull changes for specific files from a past commit without reverting the entire commit.

How to use git to pull or restore changes for only certain files from a specific commit, without affecting the rest of your working directory or reverting the whole commit. Useful for cherry-picking file-level changes.


#### Command
```sh
git checkout <commit-hash> -- <file1> <file2>
```

#### Examples
- **Restore file1.txt and file2.txt from the specified commit.** 

 ```sh
git checkout e8ab7f64fdfcc7bdaaed8d96c0ac26dce035663f -- path/to/file1.txt path/to/file2.txt 
 ```
- **Stage, commit, and push the restored files to a new branch.** 

 ```sh
git add path/to/file1.txt path/to/file2.txt
git commit -m "Pulled changes for file1.txt and file2.txt from commit e8ab7f64"
git push origin revert/productionOrder 
 ```
- **Restore files using the newer 'git restore' command.** 

 ```sh
git restore --source e8ab7f64fdfcc7bdaaed8d96c0ac26dce035663f path/to/file1.txt path/to/file2.txt 
 ```


#### Steps
1. Checkout the specific files from the desired commit using '`git checkout <commit-hash> -- <file1> <file2`>'.
2. Stage the changes with '`git add <file1> <file2`>'.
3. Commit the changes with a descriptive message.
4. Push your branch and create a pull request if needed.


#### Warnings
- ⚠️ This will overwrite the current working directory versions of the specified files.
- ⚠️ Make sure to commit or stash any local changes to those files before running the command.


#### Links
- [Git Docs: git checkout](https://git-scm.com/docs/git-checkout)


---


## 🎉 Congratulations!

You've reached the end of this comprehensive Git guide! You've learned some of the most advanced Git techniques and commands.

**What's next?**
- [📚 Explore more Git topics in the main guide](../README.md)
- 🚀 **Great Git contributors put everything into practice** - if you discovered something useful or have your own Git tips, consider contributing to this repository!
- 💡 Found a bug or have suggestions? [Open an issue or submit a PR](../README.md#contributors--credits)

[🏠 Back to Main README](../README.md)

---


_Author: mike-rambil • Updated: 2024-06-10 • Tags: checkout, restore, file, commit, cherry-pick_
