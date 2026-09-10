# Day 46 – Reusable Workflows & Composite Actions

## Objective

Today I learned how to avoid repeating GitHub Actions workflow logic by using:

- Reusable workflows
- `workflow_call`
- Workflow inputs
- Workflow secrets
- Workflow outputs
- Composite actions

---

## Task 1: `workflow_call`

A reusable workflow is a workflow that can be called by another workflow.

It is triggered using:

```yaml
on:
  workflow_call: