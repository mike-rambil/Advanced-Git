[⬅️ Back to Git Essentials & Hidden Gems](./git-essentials-hidden-gems.md)

[⬆️ Previous Step: git maintenance start](./git-maintenance-start.md)

# git request-pull


![Category: Collaboration](https://img.shields.io/badge/Category-Collaboration-blue)
> Generate a request to pull changes into a repository.

`git request-pull` generates a summary message describing the changes between two commits, which you can send to a project maintainer to request that they pull your changes. This is especially useful for email-based workflows or when collaborating outside of platforms like GitHub. The command outputs a message that includes a comparison summary, a list of commits, and their messages, making it easy for maintainers to review and apply your changes.


#### Command
```sh
git request-pull <start> <url> <end>
```

#### Examples
- **Generates a summary like:** 

 ```sh


The following changes since commit 1234567... (main):

  Some previous commit message

are available in the Git repository at:

  https://github.com/example/repo.git feature-branch

for you to fetch changes up to 89abcde... (feature-branch):

  New feature commit message
  Another commit message

----------------------------------------------------------------
 file1.txt | 10 ++++++++++
 file2.js  |  5 +++++
 2 files changed, 15 insertions(+)
 
 ```
- **Generate a pull request message from v1.0 to v1.1.** 

 ```sh
git request-pull v1.0 https://github.com/example/repo.git v1.1 
 ```
- **Request a pull for a feature branch based on main.** 

 ```sh
git request-pull main https://github.com/example/repo.git feature-branch 
 ```


#### Steps
1. Identify the base commit or branch you want to compare from (e.g., main or v1.0).
2. Run `git request-pull <start> <url> <end>` to generate a pull request message.
3. Send the generated message to the project maintainer (e.g., via email or chat).


#### ProTips
> [!TIP]
> Use this command when collaborating via email or outside of web-based platforms.

> [!TIP]
> Include a clear start and end point for clarity.

> [!TIP]
> Review the generated message before sending to ensure it accurately describes your changes.



#### Links
- [Official Docs](https://git-scm.com/docs/git-request-pull)


---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: collaboration, pull-request_
