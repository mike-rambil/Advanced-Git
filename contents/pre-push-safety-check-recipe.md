[⬅️ Back to Commit Ranges & Push-Safety Checks](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/commit-ranges-push-safety-checks.md)

[⬆️ Previous Step: Two-Dot vs Three-Dot Cheat Sheet](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/two-dot-vs-three-dot-cheat-sheet.md)

# Pre-Push Safety Check Recipe


![Category: Collaboration](https://img.shields.io/badge/Category-Collaboration-blue)
> Four commands to run before pushing to a branch other people also push to.

Run these in order before `git push`, especially on a shared branch like `main`:

```sh
git fetch origin && git status -sb               # 1. ahead/behind, against a fresh remote
git log --oneline origin/main..main             # 2. exactly which commits will be pushed
git diff --stat origin/main..main               # 3. which files those commits touch
git log --oneline --left-right origin/main...main  # 4. if diverged: who has what
```

- Only `[ahead N]`: step 2 lists the N commits you'll push. Review them and push.
- Any `behind`: pull first (`git pull --rebase` or merge), then rerun the checks. Until you do, step 3 will show the remote's new work as red deletions.
- Step 2 lists commits you didn't expect (another session, a stray WIP commit): stop and sort it out *before* they're public.


#### Warnings
- ⚠️ Once pushed, rewriting shared history needs a force-push. Prefer catching surprises here. If you must, use `git push --force-with-lease`.


#### ProTips
> [!TIP]
> Swap `origin/main` for `@{u}` to make the recipe work on any branch with an upstream, e.g. `git log --oneline @{u}..`.



#### Related Commands
- `git push --force-with-lease`
- `git pull --rebase`


[➡️ Continue to Next Topic: Past commits of a specific file](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/past-commits-of-a-specific-file.md)

---

_Author: mike-rambil • Updated: 2026-10-07 • Tags: push, safety, checklist, fetch_
