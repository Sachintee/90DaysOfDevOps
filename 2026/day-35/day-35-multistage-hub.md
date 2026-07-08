# Day 35 – Multi-Stage Builds & Docker Hub

## What is a Multi-Stage Build?

A multi-stage build uses multiple `FROM` instructions in one Dockerfile. The first stage builds the application, while the final stage copies only the required files into a lightweight image.

This reduces image size and improves security.

---

## Task 1 – Single Stage Build

- Create a simple Node.js application.
- Build and run it using one Dockerfile.
- Check the image size.

Example:

```bash
docker images
```

---

## Task 2 – Multi-Stage Build

Create two stages:

- Builder Stage
- Runtime Stage

Copy only the built application into the final image.

Compare image sizes.

### Why is it smaller?

- Build tools are removed.
- Dependencies used only during build are excluded.
- Uses a lightweight base image.

---

## Task 3 – Push to Docker Hub

Login to Docker Hub.

```bash
docker login
```

Tag image:

```bash
docker tag my-app:v1 username/my-app:v1
```

Push:

```bash
docker push username/my-app:v1
```

Verify by pulling the image.

---

## Task 4 – Docker Hub Repository

- Add repository description.
- Understand image tags.
- Pull a specific version.

Example:

```bash
docker pull username/my-app:v1
```

---

## Task 5 – Image Best Practices

- Use Alpine instead of Ubuntu.
- Use specific image tags.
- Don't run containers as root.
- Combine RUN commands.
- Reduce image layers.

---

## What I Learned

- Multi-stage builds create smaller images.
- Docker Hub stores and shares images.
- Running containers as non-root improves security.
- Alpine images reduce image size significantly.



# Multi-Stage Builds

## Build Image

```bash
docker build -t my-app:v1 .
```

## Multi-Stage

```dockerfile
FROM node:20 AS builder

FROM alpine
COPY --from=builder
```

## Docker Hub

```bash
docker login
docker tag
docker push
docker pull
docker logout
```

## Image Size

```bash
docker images
```

## Best Practices

```dockerfile
USER appuser
```

```dockerfile
FROM node:20-alpine
```

## Important Commands

```bash
docker build
docker images
docker login
docker tag
docker push
docker pull
docker logout
```
