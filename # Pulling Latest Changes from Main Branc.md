# Pulling Latest Changes from Main Branch into Feature Branch

To pull the latest changes from the main branch into your current feature branch, you have two primary methods: merging (best for collaboration) or rebasing (best for a clean, linear history).

---

## Method 1: Merging (Recommended for Collaboration)

This is the safest method if you are sharing your feature branch with others. It creates a new "merge commit" that ties the two branches together.

1. Commit or stash your current work to ensure a clean working directory.
2. Switch to your feature branch:

    ```bash
    git checkout feature-branch
    ```

3. Pull changes directly from the remote main:

    ```bash
    git pull origin main
    ```

    Alternatively, you can update your local main branch first and then merge it locally:

    ```bash
    git checkout main
    git pull
    git checkout feature-branch
    git merge main
    ```

---

## Method 2: Rebasing (Recommended for a Clean History)

Use this method to keep your project history clean. It "replays" your feature branch commits on top of the latest main commits. 

**Warning:** Do not rebase if others are also working on this feature branch, as it rewrites history.

1. Update your local main branch:

    ```bash
    git checkout main
    git pull
    git checkout feature-branch
    ```

2. Rebase your branch:

    ```bash
    git rebase main
    ```

3. Resolve conflicts (if any), then continue:

    ```bash
    git rebase --continue
    ```

4. Force push to update the remote (since history has changed):

    ```bash
    git push origin feature-branch --force
    ```

---

Choose the method that best suits your workflow and team collaboration needs.# Pulling Latest Changes from Main Branch into Feature Branch

To pull the latest changes from the main branch into your current feature branch, you have two primary methods: merging (best for collaboration) or rebasing (best for a clean, linear history).

---

## Method 1: Merging (Recommended for Collaboration)

This is the safest method if you are sharing your feature branch with others. It creates a new "merge commit" that ties the two branches together.

1. Commit or stash your current work to ensure a clean working directory.
2. Switch to your feature branch:

    ```bash
    git checkout feature-branch
    ```

3. Pull changes directly from the remote main:

    ```bash
    git pull origin main
    ```

    Alternatively, you can update your local main branch first and then merge it locally:

    ```bash
    git checkout main
    git pull
    git checkout feature-branch
    git merge main
    ```

---

## Method 2: Rebasing (Recommended for a Clean History)

Use this method to keep your project history clean. It "replays" your feature branch commits on top of the latest main commits. 

**Warning:** Do not rebase if others are also working on this feature branch, as it rewrites history.

1. Update your local main branch:

    ```bash
    git checkout main
    git pull
    git checkout feature-branch
    ```

2. Rebase your branch:

    ```bash
    git rebase main
    ```

3. Resolve conflicts (if any), then continue:

    ```bash
    git rebase --continue
    ```

4. Force push to update the remote (since history has changed):

    ```bash
    git push origin feature-branch --force
    ```

---

Choose the method that best suits your workflow and team collaboration needs.