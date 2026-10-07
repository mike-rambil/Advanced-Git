[⬅️ Back to Commit Ranges & Push-Safety Checks](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/commit-ranges-push-safety-checks.md)

[⬆️ Previous Step: git status -sb: Ahead/Behind at a Glance](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/git-status-sb-ahead-behind-at-a-glance.md)

# git log A..B: What B Has That A Doesn't


![Category: Collaboration](https://img.shields.io/badge/Category-Collaboration-blue)
> Two-dot log lists commits reachable from B but not from A.

`git log A..B` shows commits reachable from `B` that are **not** reachable from `A`. In other words, "what B has that A doesn't", or "what A needs to catch up to B". It is shorthand for `git log ^A B`.

Flip the sides to flip the question:

```
$ git log --oneline origin/main..main     # what `git push` will send
dd4a108 L3: tweak feature.txt
79c2ff7 L2: edit app.txt
74bf8a1 L1: add feature.txt

$ git log --oneline main..origin/main     # what `git pull` would bring in
bf35bd9 O2: teammate updates teammate.txt
e990b1a O1: teammate adds teammate.txt
```

Omitting one side defaults it to `HEAD`: `git log origin/main..` is the same as `git log origin/main..HEAD`.


#### Command
```sh
git log A..B
```

#### Examples
- **Commits your push will send.** 

 ```sh
git log --oneline origin/main..main 
 ```
- **Commits a pull would bring in.** 

 ```sh
git log --oneline main..origin/main 
 ```
- **Same as the first, using your branch's upstream (`@{u}`) and HEAD.** 

 ```sh
git log --oneline @{u}.. 
 ```


#### Links
- [Specifying Ranges (gitrevisions)](https://git-scm.com/docs/gitrevisions#_specifying_ranges)


[➡️ See the Next Step: git log A...B: Symmetric Difference with --left-right](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/git-log-a-b-symmetric-difference-with-left-right.md)

---

_Author: mike-rambil • Updated: 2026-10-07 • Tags: log, range, two-dot_
