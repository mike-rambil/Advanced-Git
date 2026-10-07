[⬅️ Back to Commit Ranges & Push-Safety Checks](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/commit-ranges-push-safety-checks.md)

[⬆️ Previous Step: git diff: Two-Dot vs Three-Dot](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/git-diff-two-dot-vs-three-dot.md)

# Two-Dot vs Three-Dot Cheat Sheet


![Category: Collaboration](https://img.shields.io/badge/Category-Collaboration-blue)
> One table for all four combinations, plus when the two forms give the same answer.

| | `A..B` (two dots) | `A...B` (three dots) |
|---|---|---|
| **`git log`** | Commits in B, not in A | Commits in A or B, not both (add `--left-right` for `<` / `>`) |
| **`git diff`** | Snapshot A vs snapshot B (same as `git diff A B`) | merge-base(A, B) vs B: only B's changes since divergence |

**When do `..` and `...` agree?** When A is an ancestor of B, i.e. B is not behind A. Then the merge base *is* A, so `git diff A...B` equals `git diff A..B`, and A has no commits of its own, so `git log A...B` lists the same commits as `git log A..B`. In push terms: once you've pulled/rebased and `git status -sb` shows only `[ahead N]`, both forms give the same answer.


[➡️ See the Next Step: Pre-Push Safety Check Recipe](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/pre-push-safety-check-recipe.md)

---

_Author: mike-rambil • Updated: 2026-10-07 • Tags: range, reference, cheat-sheet_
