[⬅️ Back to Git Essentials & Hidden Gems](./git-essentials-hidden-gems.md)

# git maintenance start


![Category: Maintenance](https://img.shields.io/badge/Category-Maintenance-blue)
> Runs a cronJob in background for the specified repo for periodic maintenance.

`git maintenance start` enables background maintenance tasks for your Git repository. It sets up scheduled jobs (using your system’s scheduler, like cron on Unix or Task Scheduler on Windows) to automatically run Git maintenance commands at regular intervals. This keeps your repository fast and healthy by running tasks like garbage collection, commit-graph optimization, and cleanup operations in the background, so you don’t have to remember to do it manually.


#### Command
```sh
git maintenance start
```

#### Examples
- **Enable background maintenance for your repository.**


```sh
git maintenance start
```
- **Run maintenance tasks every hour for more active repos.**


```sh
git maintenance start --schedule=hourly
```


#### Steps
1. Run `git maintenance start` in your repository.
2. Optionally, use `--schedule=hourly` or `--schedule=daily` to control how often maintenance runs.
3. `Git will now automatically run tasks like garbage collection, pruning unreachable objects, and optimizing internal data structures in the background`.
4. You can stop background maintenance with `git maintenance stop` if needed.


#### ProTips
> [!TIP]
> Set up maintenance on large or long-lived repos to keep them fast and healthy.

> [!TIP]
> Use with cron or scheduled tasks for automation.

> [!TIP]
> If you notice Git getting slow, check if maintenance is enabled or run it manually.



#### Links
- [Official Docs](https://git-scm.com/docs/git-maintenance)


[➡️ See the Next Step: git request-pull](./git-request-pull.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: maintenance, automation_
