[⬅️ Back to Git Essentials & Hidden Gems](./git-essentials-hidden-gems.md)

[⬆️ Previous Step: git maintenance start](./git-maintenance-start.md)

# git request-pull


![Category: Collaboration](https://img.shields.io/badge/Category-Collaboration-blue)
> Generate a request to pull changes into a repository.


#### Command
```sh
git request-pull <start> <url> <end>
```

#### Examples
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
