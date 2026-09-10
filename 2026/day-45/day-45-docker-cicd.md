# Day 45 – Docker Build & Push in GitHub Actions

## Objective

The goal of Day 45 was to create a complete CI/CD pipeline that automatically builds a Docker image and pushes it to Docker Hub.

---

## Task 1: Prepare

I created a simple Node.js application for the Docker CI/CD exercise.

Project files:

```text
github-actions-practice/
├── .github/
│   └── workflows/
│       └── docker-publish.yml
├── Dockerfile
├── app.js
└── package.json