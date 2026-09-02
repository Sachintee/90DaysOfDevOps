# Day 42 – Runners: GitHub-Hosted & Self-Hosted

## Objective

Day 42 focused on GitHub Actions runners.

I learned the difference between GitHub-hosted runners and self-hosted runners.

I also configured a Linux self-hosted runner and successfully executed a GitHub Actions job on my own Ubuntu machine.

---

# Task 1 – GitHub-Hosted Runners

I created a workflow with three jobs.

The jobs ran on:

- `ubuntu-latest`
- `windows-latest`
- `macos-latest`

Each job printed:

- Operating system
- Hostname
- Current user

GitHub-hosted runners are virtual machines managed by GitHub.

GitHub provisions and maintains the runner environment.

---

# Task 2 – Pre-installed Software

On the Ubuntu runner I checked:

```bash
docker --version
python3 --version
node --version
git --version