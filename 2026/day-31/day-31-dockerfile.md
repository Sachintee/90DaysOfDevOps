# Day 31 – Dockerfile: Build Your Own Images

## What is a Dockerfile?

A Dockerfile is a text file that contains instructions to build a Docker image automatically.

---

## Task 1 – First Dockerfile

- Create a Dockerfile using Ubuntu as the base image.
- Install curl using RUN.
- Set a default command to print a message.
- Build and run the custom image.

---

## Task 2 – Dockerfile Instructions

### FROM
Specifies the base image.

### RUN
Executes commands during image build.

### COPY
Copies files from the host to the image.

### WORKDIR
Sets the default working directory.

### EXPOSE
Documents the application port.

### CMD
Defines the default command when a container starts.

---

## Task 3 – CMD vs ENTRYPOINT

### CMD
- Provides the default command.
- Can be overridden while running the container.

### ENTRYPOINT
- Defines the main executable.
- Additional arguments are appended.
- Cannot be easily overridden.

**Use CMD** for default behavior.

**Use ENTRYPOINT** when the container should always execute the same application.

---

## Task 4 – Static Website

- Create an `index.html`
- Use `nginx:alpine`
- Copy the HTML page to `/usr/share/nginx/html`
- Build and run the image
- Access the website in a browser

---

## Task 5 – .dockerignore

Ignore unnecessary files:

- node_modules
- .git
- *.md
- .env

This reduces image size and speeds up builds.

---

## Task 6 – Build Optimization

Docker caches every layer.

Frequently changing instructions should be placed near the end of the Dockerfile to maximize cache reuse.

---

## What I Learned

- Dockerfiles automate image creation.

# – Dockerfile

## Build Image

```bash
docker build -t my-ubuntu:v1 .
```

## Run Image

```bash
docker run my-ubuntu:v1
```

## Dockerfile Instructions

```dockerfile
FROM
RUN
COPY
WORKDIR
EXPOSE
CMD
ENTRYPOINT
```

## Website Image

```bash
docker build -t my-website:v1 .
docker run -d -p 8080:80 my-website:v1
```

## .dockerignore

```text
node_modules
.git
*.md
.env
```

## Useful Commands

```bash
docker build
docker images
docker run
docker exec
docker logs
docker inspect
docker history
```

## Key Points

- Dockerfile builds images.
- Images are built layer by layer.
- CMD is replaceable.
- ENTRYPOINT is fixed.
- Cache speeds up rebuilds.
- CMD and ENTRYPOINT serve different purposes.
- Layer caching improves build performance.
- .dockerignore keeps images clean and smaller.
