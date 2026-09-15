# Day 48 – GitHub Actions Project: End-to-End CI/CD Pipeline

## Objective

The objective of Day 48 was to build a complete production-style CI/CD pipeline using GitHub Actions. The project combines concepts learned from Day 40 to Day 47, including reusable workflows, secrets, Docker, pull request triggers, environments, scheduled workflows, and GitHub Actions outputs.

---

## Project Overview

A simple Python Flask application was created with two endpoints:

- `/` – Application information
- `/health` – Application health status

The application was containerized using Docker and integrated with GitHub Actions for automated testing, Docker image publishing, deployment, and scheduled health monitoring.

### Technologies Used

- Python
- Flask
- Pytest
- Docker
- Docker Hub
- GitHub Actions
- GitHub Environments
- YAML
- Git
- GitHub

---

# Pipeline Architecture

```text
                    ┌─────────────────────┐
                    │    Pull Request     │
                    │    feature/* → main │
                    └──────────┬──────────┘
                               │
                               ▼
                 ┌──────────────────────────┐
                 │ Reusable Build & Test    │
                 │ Python + Dependencies    │
                 │ Pytest                   │
                 └────────────┬─────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │   PR Checks Pass  │
                    └──────────────────┘


                    Merge to main
                         │
                         ▼
                 ┌──────────────────────────┐
                 │ Reusable Build & Test    │
                 └────────────┬─────────────┘
                              │
                              ▼
                 ┌──────────────────────────┐
                 │ Reusable Docker Workflow │
                 │ Build + Push to Docker   │
                 │ Hub                      │
                 └────────────┬─────────────┘
                              │
                              ▼
                 ┌──────────────────────────┐
                 │ Production Environment   │
                 │ Deployment               │
                 └──────────────────────────┘


                 Every 12 Hours
                        │
                        ▼
              ┌──────────────────────┐
              │ Scheduled Health     │
              │ Check                │
              └──────────┬───────────┘
                         │
                         ▼
                 Pull Docker Image
                         │
                         ▼
                  Run Container
                         │
                         ▼
                   Curl /health
                         │
                         ▼
                GitHub Step Summary
