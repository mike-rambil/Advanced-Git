[⬅️ Back to Commit Ranges & Push-Safety Checks](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/commit-ranges-push-safety-checks.md)

[⬆️ Previous Step: git log A..B: What B Has That A Doesn't](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/git-log-a-b-what-b-has-that-a-doesn-t.md)

# git log A...B: Symmetric Difference with --left-right


![Category: Collaboration](https://img.shields.io/badge/Category-Collaboration-blue)
> Three-dot log lists commits on either side but not both. Add --left-right to see which side.

`git log A...B` shows the **symmetric difference**: commits reachable from `A` or `B`, but not from both (i.e. everything after their merge base, on both sides). On its own the output doesn't say which side a commit came from, so pair it with `--left-right`:

- `<` marks a commit only in `A` (the left side)
- `>` marks a commit only in `B` (the right side)

```
$ git log --oneline --left-right origin/main...main
< bf35bd9 O2: teammate updates teammate.txt
> dd4a108 L3: tweak feature.txt
< e990b1a O1: teammate adds teammate.txt
> 79c2ff7 L2: edit app.txt
> 74bf8a1 L1: add feature.txt
```

Use it to answer "how far apart are we, and on which side?" in one command. Two `<` lines = behind 2, three `>` lines = ahead 3, which matches `git status -sb`.


#### Command
```sh
git log --left-right A...B
```

#### Examples
- **Show both sides of a divergence, marked < (remote only) and > (local only).** 

 ```sh
git log --oneline --left-right origin/main...main 
 ```
- **Same, drawn as a graph.** 

 ```sh
git log --oneline --left-right --graph origin/main...main 
 ```


#### Links
- [Official Docs (--left-right)](https://git-scm.com/docs/git-log#Documentation/git-log.txt---left-right)


[➡️ See the Next Step: git diff: Two-Dot vs Three-Dot](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/git-diff-two-dot-vs-three-dot.md)

---

_Author: mike-rambil • Updated: 2026-10-07 • Tags: log, range, three-dot, symmetric-difference_
