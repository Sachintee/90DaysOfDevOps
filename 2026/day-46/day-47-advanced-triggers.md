# Day 47 – Advanced Triggers: PR Events, Cron Schedules & Event-Driven Pipelines

## Objective

Today I learned about advanced GitHub Actions triggers including:

- Pull request activity types
- PR validation
- Cron schedules
- Path filters
- Branch filters
- `workflow_run`
- `repository_dispatch`

---

## Task 1: PR Lifecycle

File:

`.github/workflows/pr-lifecycle.yml`

The workflow responds to:

- opened
- synchronize
- reopened
- closed

It prints:

- Event type
- PR title
- PR author
- Source branch
- Target branch

A special condition detects merged pull requests:

```yaml
if: github.event.action == 'closed' && github.event.pull_request.merged == true