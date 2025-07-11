# Contribution Format Guide

> **Purpose:**
> This file defines the required format for documenting Git commands in this repository. All contributors should follow this structure when adding or updating entries in `toc-source.json`.
>
> **How to Contribute:**
>
> - When you want to add a new Git command or script, copy the template below and fill in each field as described.
> - Place your new entry in `toc-source.json` using this format.
> - Submit your changes via a Pull Request (PR).
> - Well-formatted contributions make it easy to generate documentation and keep the project organized.
>
> **Where to Find This:**
>
> - This file: `dev-docs/FORMAT.md` (always up to date)
> - Main documentation and contribution guidelines may also reference this file.

---

# Format for Documenting Git Commands (JSON-Compatible)

This project uses a structured format for documenting Git commands, which is stored in [`../toc-source.json`](../toc-source.json). Use the following template for each command:

---

## Name

- **Type:** string
- **Description:** The official name/title of the command or script.

## Category

- **Type:** string
- **Description:** The category this command belongs to (e.g., Collaboration, History, Worktree).

## Short Description

- **Type:** string
- **Description:** A concise summary of what the command does.

## Long Description

- **Type:** string (optional)
- **Description:** A more detailed explanation of the command, its context, and use cases.

## Command

- **Type:** string (optional)
- **Description:** The full command syntax, including placeholders for arguments.

## Examples

- **Type:** list of objects
- **Each object:**
  - `code`: string (the command as used)
  - `description`: string (what the example does)

## Steps

- **Type:** list of strings
- **Description:** Step-by-step instructions for using the command.

## Flags

- **Type:** object (optional)
- **Each key:** flag (e.g., `-f`, `-d`)
- **Each value:** string (description of the flag)

## Prerequisites

- **Type:** list of strings (optional)
- **Description:** Requirements before using the command.

## Warnings

- **Type:** list of strings (optional)
- **Description:** Important cautions or risks.

## Tags

- **Type:** list of strings
- **Description:** Keywords for search and categorization.

## Author

- **Type:** string
- **Description:** Who contributed this entry.

## Last Updated

- **Type:** string (date)
- **Description:** Last update date (YYYY-MM-DD).

## Links

- **Type:** list of objects (optional)
- **Each object:**
  - `label`: string (e.g., "Official Docs")
  - `url`: string (link to resource)

## Related Commands

- **Type:** list of strings (optional)
- **Description:** Other commands related to this one.

---

### Example Entry (Markdown)

## git clean

**Category:** Stashing and Cleaning  
**Short Description:** Remove untracked files and directories from your repository.  
**Long Description:** `git clean` is a powerful command that helps remove untracked files and directories from your repository. It is particularly useful when you want to reset your working directory without affecting committed files.  
**Command:** `git clean`

**Examples:**

- `git clean -n -d` — Preview what will be deleted (dry run).
- `git clean -f` — Delete all untracked files.

**Steps:**

1. Preview deletions: `git clean -n -d`
2. Delete untracked files: `git clean -f`
3. Delete untracked files and directories: `git clean -f -d`

**Flags:**

- `-n`: Shows what will be deleted without actually deleting anything.
- `-f`: Forces deletion of untracked files.
- `-d`: Deletes untracked directories.
- `-i`: Interactive mode to selectively delete files.
- `-x`: Removes ignored and untracked files.
- `-X`: Removes only ignored files.

**Prerequisites:**

- Make sure you have committed all important changes.

**Warnings:**

- This will permanently delete files! Always use `-n` before `-f`.
- Be cautious with `-x` and `-X` as they remove ignored files, which might include config files.

**Tags:** clean, untracked, workspace  
**Author:** mike-rambil  
**Last Updated:** 2024-06-10

**Links:**

- [Official Docs](https://git-scm.com/docs/git-clean)

**Related Commands:**

- `git status`
