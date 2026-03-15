# Merging Main Branch into Feature Branch

## Method 1: Using `git merge`

This method integrates the main changes via a new "merge commit", preserving the full history of both branches and resulting in a non-linear history.

1. Save your local changes (if any) using `git stash` if you don't want to commit them yet, or simply commit them.
2. Switch to your main branch to ensure it's up to date with the remote repository:

    ```bash
    git checkout main
    ```

3. Pull the latest changes from the remote main branch:

    ```bash
    git pull origin main
    ```

4. Switch back to your feature branch:

    ```bash
    git checkout your-feature-branch
    ```

5. Merge the main branch into your feature branch:

    ```bash
    git merge main
    ```

6. Resolve conflicts if prompted by Git, then `git add` the resolved files and `git commit` to finalize the merge.
7. Push your updated feature branch to the remote repository:

    ```bash
    git push origin your-feature-branch
    ```

---

## Method 2: Using `git rebase` (Recommended for a Clean History)

This method reapplies your feature branch's commits on top of the latest main commits, creating a linear history and avoiding extraneous merge commits.

1. Save or commit any local changes on your feature branch.
2. Switch to your main branch and pull the latest changes:

    ```bash
    git checkout main
    git pull origin main
    ```

3. Switch back to your feature branch:

    ```bash
    git checkout your-feature-branch
    ```

4. Rebase your feature branch onto the main branch:

    ```bash
    git rebase main
    ```

5. Resolve conflicts if they arise. After resolving conflicts in a file, use:

    ```bash
    git add <filename>
    git rebase --continue
    ```

6. Force push your feature branch to the remote repository. This is necessary because rebase changes the commit history:

    ```bash
    git push origin your-feature-branch --force
    ```

    **Caution:** Use `--force` (or the safer `--force-with-lease`) with care, especially if others are working on the same feature branch, as it overwrites the remote history.
