[⬅️ Back to Commit Ranges & Push-Safety Checks](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/commit-ranges-push-safety-checks.md)

[⬆️ Previous Step: git log A...B: Symmetric Difference with --left-right](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/git-log-a-b-symmetric-difference-with-left-right.md)

# git diff: Two-Dot vs Three-Dot


![Category: Collaboration](https://img.shields.io/badge/Category-Collaboration-blue)
> Two-dot diff compares two snapshots. Three-dot diff shows only B's changes since it diverged from A.

`git diff` compares **snapshots**, not commit lists, so the dots mean something different here than in `git log`.

**`git diff A..B`** is identical to `git diff A B`: a straight comparison of the two tips. Red `-` lines exist in A but not in B, and green `+` lines are new in B. **Caveat:** if A has its own newer commits, their content shows up as red "deletions", even though B never deleted anything. B just doesn't have it yet.

**`git diff A...B`** diffs from the **merge base** of A and B to B. It shows only what B changed since the branches split, and ignores whatever happened on A. This is what a GitHub pull request's "Files changed" tab shows.

```
        A1──A2          ← A
       /
──M───
       \
        B1──B2          ← B

git diff A..B   →  A2 vs B2
git diff A...B  →  M  vs B2
```

In the demo repo, the teammate's `teammate.txt` appears as a deletion with two dots, and disappears with three:

```
$ git diff --stat origin/main..main
 app.txt      | 1 +
 feature.txt  | 2 ++
 teammate.txt | 2 --          ← not deleted by you, you just don't have it yet
 3 files changed, 3 insertions(+), 2 deletions(-)

$ git diff --stat origin/main...main
 app.txt     | 1 +
 feature.txt | 2 ++
 2 files changed, 3 insertions(+)
```


#### Command
```sh
git diff A...B
```

#### Examples
- **Only your changes since you branched off origin/main (PR-style).** 

 ```sh
git diff origin/main...main 
 ```
- **Exact difference between the two tips (what main would look like vs. origin/main).** 

 ```sh
git diff origin/main..main 
 ```
- **Long form of the three-dot diff.** 

 ```sh
git diff $(git merge-base origin/main main) main 
 ```


#### Warnings
- ⚠️ Don't read red lines in a two-dot diff as "I deleted this" when you're behind. Check `git status -sb` or use three dots.


#### Links
- [Official Docs](https://git-scm.com/docs/git-diff)


#### Related Commands
- `git merge-base`


[➡️ See the Next Step: Two-Dot vs Three-Dot Cheat Sheet](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/two-dot-vs-three-dot-cheat-sheet.md)

---

_Author: mike-rambil • Updated: 2026-10-07 • Tags: diff, range, merge-base, pull-request_
