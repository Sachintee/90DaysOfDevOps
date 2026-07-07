# Day 34 – Docker Compose: Real-World Multi-Container Apps

## What is an Application Stack?

A multi-container application consists of multiple services working together, such as a web application, database, and cache.

Docker Compose allows these services to be managed from a single YAML file.

---

## Task 1 – Three-Service Stack

Build a Compose application with:

- Flask Web App
- MySQL Database
- Redis Cache

The web application is built from a custom Dockerfile.

---

## Task 2 – depends_on & Healthcheck

Use `depends_on` so the web app starts after MySQL.

Add a healthcheck to ensure MySQL is fully ready before the application starts.

---

## Task 3 – Restart Policies

### restart: always

Automatically restarts containers even after system reboot.

### restart: on-failure

Restarts only when the container exits with an error.

---

## Task 4 – Build from Dockerfile

Use:

```yaml
build: ./app
```

instead of a pre-built image.

Rebuild the application after code changes using:

```bash
docker compose up --build
```

---

## Task 5 – Networks & Volumes

Create:

- Custom bridge network
- Named volume for MySQL
- Labels for services

This improves organization and data persistence.

---

## Task 6 – Scaling

Scale the web service:

```bash
docker compose up --scale web=3
```

Multiple containers are created.

Port conflicts occur because multiple containers cannot bind to the same host port.

---

## What I Learned

- Docker Compose manages production-like applications.
- Healthchecks improve service startup reliability.
- Named networks simplify communication.
- Volumes preserve database data.
- Scaling requires a load balancer or reverse proxy.




# Docker Compose Advanced

## Build

```bash
docker compose up --build
```

## Scale

```bash
docker compose up --scale web=3
```

## Restart

```yaml
restart: always
restart: on-failure
```

## Healthcheck

```yaml
healthcheck:
```

## Depends On

```yaml
depends_on:
```

## Networks

```yaml
networks:
```

## Volumes

```yaml
volumes:
```

## Important Commands

```bash
docker compose up
docker compose down
docker compose up --build
docker compose up --scale web=3
docker compose ps
docker compose logs
docker compose restart
docker compose stop
```
