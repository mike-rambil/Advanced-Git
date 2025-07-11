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


#### Steps
1. Run `git request-pull <start> <url> <end>` to generate a pull request message.


#### ProTips
> [!TIP]
> Use request-pull to generate a summary for code reviews.

> [!TIP]
> Include a clear start and end point for clarity.



#### Links
- [Official Docs](https://git-scm.com/docs/git-request-pull)


---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: collaboration, pull-request_
