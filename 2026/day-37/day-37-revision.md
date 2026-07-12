# Day 37 – Docker Revision

## Self Assessment

| Topic | Status |
|--------|--------|
| Run Docker Containers | ✅ Can Do |
| Manage Containers | ✅ Can Do |
| Image Layers | ✅ Can Do |
| Dockerfile | ✅ Can Do |
| CMD vs ENTRYPOINT | ✅ Can Do |
| Build Images | ✅ Can Do |
| Named Volumes | ✅ Can Do |
| Bind Mounts | ✅ Can Do |
| Docker Networks | ✅ Can Do |
| Docker Compose | ✅ Can Do |
| Environment Variables | ✅ Can Do |
| Multi-Stage Builds | ✅ Can Do |
| Docker Hub | ✅ Can Do |
| Healthchecks | ✅ Can Do |

---

## Quick Fire Answers

### Image vs Container

Image is a blueprint. Container is a running instance.

---

### Container Data

Data is deleted when the container is removed unless a volume is used.

---

### Container Communication

Containers communicate using container/service names on the same custom network.

---

### docker compose down vs down -v

`docker compose down`

Removes containers and network.

`docker compose down -v`

Removes containers, network and named volumes.

---

### Multi-Stage Builds

Reduce image size by copying only required build artifacts.

---

### COPY vs ADD

COPY copies files.

ADD can also download URLs and extract archives.

---

### Port Mapping

```bash
-p 8080:80
```

Host Port → Container Port.

---

### Docker Disk Usage

```bash
docker system df
```

---

## Weak Areas Revisited

- Docker Networking
- Multi-Stage Builds

---

## What I Learned

- Docker images are immutable.
- Volumes preserve application data.
- Compose simplifies multi-container deployments.
- Multi-stage builds create lightweight images.
