[⬅️ Back to Sharing Changes as Patch Files](./sharing-changes-as-patch-files.md)

[⬆️ Previous Step: Apply Diff File](./apply-diff-file.md)

# Patch vs Diff: Quick Reference


![Category: Patch & Diff](https://img.shields.io/badge/Category-Patch%20%26%20Diff-blue)
| Command | Use Case | Preserves Commit Info? | Can Apply With |
|---|---|---|---|
| git diff > file.diff | Share uncommitted changes | ❌ | git apply |
| git format-patch > file.patch | Share committed changes | ✅ | git am |


[➡️ Continue to Next Topic: Pull Changes of Specific Files from a Commit](./pull-changes-of-specific-files-from-a-commit.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: patch, diff, reference_
