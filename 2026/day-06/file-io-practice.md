# Day 06 – Linux File Read & Write Practice
> #90DaysOfDevOps | Date: June 6, 2026

---

## Commands Practiced

```bash
# 1. Create an empty file
$ touch notes.txt
```
> Creates an empty file. If file already exists, just updates its timestamp.

```bash
# 2. Write first line (overwrites if file exists)
$ echo "DevOps is about automation and collaboration" > notes.txt
```
> `>` redirects output INTO the file. Overwrites everything.

```bash
# 3. Append second line
$ echo "Linux is the foundation of all DevOps work" >> notes.txt
```
> `>>` appends to the file. Does NOT overwrite — safe to use.

```bash
# 4. Append third line using tee (writes AND displays at the same time)
$ echo "Practice daily to build real muscle memory" | tee -a notes.txt
Practice daily to build real muscle memory
```
> `tee -a` writes to file AND prints to terminal simultaneously.
> Useful in scripts when you want to log AND see output at the same time.

```bash
# 5. Read the full file
$ cat notes.txt
DevOps is about automation and collaboration
Linux is the foundation of all DevOps work
Practice daily to build real muscle memory
```
> `cat` dumps the entire file to terminal. Best for short files.

```bash
# 6. Read only the first 2 lines
$ head -n 2 notes.txt
DevOps is about automation and collaboration
Linux is the foundation of all DevOps work
```
> `head -n N` shows first N lines. Great for peeking at large log files.

```bash
# 7. Read only the last 2 lines
$ tail -n 2 notes.txt
Linux is the foundation of all DevOps work
Practice daily to build real muscle memory
```
> `tail -n N` shows last N lines.
> `tail -f file.log` follows a live log file in real time — used daily in DevOps.

---

## Key Difference: `>` vs `>>` vs `tee`

| Command | What it does | Safe to use? |
|---------|-------------|-------------|
| `>`     | Overwrites the file completely | ⚠️ Careful |
| `>>`    | Appends to the file | ✅ Safe |
| `tee -a` | Appends + shows on screen | ✅ Safe |

---

## One Command I Will Use Every Day
```bash
tail -f /var/log/syslog
```
Follows live logs in real time. Essential when debugging a running service.

---
*Day 06 / 90 — #90DaysOfDevOps | #DevOpsKaJosh | #TrainWithShubham*
