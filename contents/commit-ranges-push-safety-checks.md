[⬅️ Back to Table of Contents](https://github.com/mike-rambil/Advanced-Git/blob/main/README.md#commit-ranges-push-safety-checks)

# Commit Ranges & Push-Safety Checks


![Category: Collaboration](https://img.shields.io/badge/Category-Collaboration-blue)
> Know exactly what you're about to push (or pull) using `git status -sb` and the `..` / `...` range operators.

When other people (or other terminals, CI bots, or AI agents) push to the same branch, "just push" is how surprises happen. Git's range syntax answers the questions you should ask first:

- **Am I ahead, behind, or both?** → `git status -sb`
- **Which commits will `git push` send?** → `git log origin/main..main`
- **Which commits would `git pull` bring in?** → `git log main..origin/main`
- **How far apart are we, and on which side?** → `git log --left-right origin/main...main`
- **What did *my* branch change since it diverged?** → `git diff origin/main...main`

The one rule to remember: **`A..B` means "what B has that A doesn't"**, and `A...B` means "what either side has that the other doesn't" (for `log`) or "B's changes since it split from A" (for `diff`). `log` and `diff` interpret the dots differently, which is why this topic trips people up.

The examples below use a real diverged repo: you made 3 local commits (`L1`–`L3`) on `main` while a teammate pushed 2 commits (`O1`, `O2`) to `origin/main`.


#### ProTips
> [!TIP]
> Always `git fetch` first. `origin/main` is only as fresh as your last fetch, so every range check against it can be stale.

> [!TIP]
> Read `A..B` out loud as "from A up to B": the commits you'd have to add to A to reach B.


## Key Topics & Subcommands
- [git status -sb: Ahead/Behind at a Glance](./git-status-sb-ahead-behind-at-a-glance.md): One line that tells you whether a push will succeed and how many commits it carries.
- [git log A..B: What B Has That A Doesn't](./git-log-a-b-what-b-has-that-a-doesn-t.md): Two-dot log lists commits reachable from B but not from A.
- [git log A...B: Symmetric Difference with --left-right](./git-log-a-b-symmetric-difference-with-left-right.md): Three-dot log lists commits on either side but not both. Add --left-right to see which side.
- [git diff: Two-Dot vs Three-Dot](./git-diff-two-dot-vs-three-dot.md): Two-dot diff compares two snapshots. Three-dot diff shows only B's changes since it diverged from A.
- [Two-Dot vs Three-Dot Cheat Sheet](./two-dot-vs-three-dot-cheat-sheet.md): One table for all four combinations, plus when the two forms give the same answer.
- [Pre-Push Safety Check Recipe](./pre-push-safety-check-recipe.md): Four commands to run before pushing to a branch other people also push to.


[➡️ Continue to Next Topic: Past commits of a specific file](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/past-commits-of-a-specific-file.md)

---

_Author: mike-rambil • Updated: 2026-10-07 • Tags: range, log, diff, status, push, ahead-behind, merge-base_
