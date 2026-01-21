[⬅️ Back to Git Command Reference (Full List)](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/git-command-reference-full-list.md)

[⬆️ Previous Step: git clone --mirror <repository>](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/git-clone-mirror-repository.md)

# git merge-base


![Category: Collaboration](https://img.shields.io/badge/Category-Collaboration-blue)
> Find the common ancestor commit between two or more branches.

git merge-base finds the best common ancestor(s) between two commits to use in a three-way merge. The common ancestor is the most recent commit that is reachable from both branches. This is useful for understanding where branches diverged, scripting merge operations, and debugging merge conflicts. Best commonly used to find common ancestor between a feature branch and main branch to squash commits locally.


#### Command
```sh
git merge-base <commit|branch> <commit|branch>
```

#### Flags
- `-a, --all`: Output all merge bases instead of just one.
- `--octopus`: Compute the best common ancestors of all supplied commits, for an n-way merge.
- `--independent`: Print a minimal subset of commits that cannot be reached from any other. Useful for filtering redundant commits.
- `--is-ancestor`: Check if the first commit is an ancestor of the second. Exits 0 if true, 1 if not.
- `--fork-point`: Find the point where a branch forked from a ref, using reflog history for accuracy.


#### Examples
- **Find the common ancestor between main and feature-branch.** 

 ```sh
git merge-base main feature-branch 
 ```
- **Find all common ancestors (useful when there are multiple merge bases).** 

 ```sh
git merge-base --all main feature-branch 
 ```
- **Check if HEAD~5 is an ancestor of HEAD (exits 0 if true, 1 if false).** 

 ```sh
git merge-base --is-ancestor HEAD~5 HEAD 
 ```
- **Find the fork point where the current branch diverged from main.** 

 ```sh
git merge-base --fork-point main 
 ```


#### Steps
1. Identify the two branches or commits you want to compare.
2. Run `git merge-base <commit1> <commit2> to find their common ancestor`.
3. Use the resulting commit hash for further operations like diffing or rebasing.


#### ProTips
> [!TIP]
>  Use it to find common branch between main and your feature branch to squash commits



#### Links
- [Official Docs](https://git-scm.com/docs/git-merge-base)


#### Related Commands
- git merge
- git rebase
- git log
- git diff


[➡️ Continue to Next Topic: Useful Rare Git Commands You Never Heard Of](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/useful-rare-git-commands-you-never-heard-of.md)

---

_Author: mike-rambil • Updated: 2025-01-20 • Tags: rebase, PR, merge-base, merge_
