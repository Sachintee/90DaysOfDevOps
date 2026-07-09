# Day 36 – Docker Project: Dockerize a Full Application

## Project

Dockerized a complete Python Flask application using Docker and Docker Compose.

The project includes:

- Flask Application
- MySQL Database
- Dockerfile
- Docker Compose
- Docker Hub Image

---

# Task 1 – Application

Selected a simple Flask application because it is lightweight and easy to containerize.

Application Stack

- Flask
- MySQL
- Docker
- Docker Compose

---

# Task 2 – Dockerfile

Features:

- Python 3.11 Slim Image
- Multi-stage friendly
- Non-root User
- Small Image Size
- .dockerignore

---

# Task 3 – Docker Compose

Configured

- Flask App
- MySQL Database
- Named Volume
- Custom Network
- Environment Variables
- Database Healthcheck

---

# Task 4 – Docker Hub

Login

```bash
docker login
```

Tag

```bash
docker tag flask-app:v1 yourusername/flask-app:v1
```

Push

```bash
docker push yourusername/flask-app:v1
```

---

# Task 5 – Testing

Removed

- Images
- Containers

Pulled image from Docker Hub and successfully started the project using Docker Compose.

---

## Challenges

- MySQL startup delay
- Container communication
- Docker build optimization

Solved using

- Healthchecks
- depends_on
- Named networks

---

## Final Image

Base Image

Python 3.11 Slim

Approx Size

180–220 MB

---

## What I Learned

- Dockerize complete applications
- Build production-ready Dockerfiles
- Docker Compose orchestration
- Push images to Docker Hub
- Deploy applications anywhere



# Docker Project

## Build

```bash
docker build -t flask-app:v1 .
```

## Run

```bash
docker run flask-app:v1
```

## Compose

```bash
docker compose up -d
docker compose down
docker compose up --build
```

## Docker Hub

```bash
docker login
docker tag
docker push
docker pull
```

## Cleanup

```bash
docker system prune
docker image prune
docker container prune
```

## Important Files

```text
Dockerfile
docker-compose.yml
.env
README.md
.dockerignore
```

## Important Commands

```bash
docker build
docker run
docker compose up
docker compose down
docker login
docker push
docker pull
docker images
docker ps
docker logs
```
