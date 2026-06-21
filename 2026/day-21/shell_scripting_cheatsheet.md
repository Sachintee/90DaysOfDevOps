# `shell_scripting_cheatsheet.md`

````markdown
# Shell Scripting Cheat Sheet

## Quick Reference Table

| Topic | Syntax | Example |
|--------|--------|---------|
| Variable | `VAR="value"` | `NAME="DevOps"` |
| Argument | `$1`, `$2` | `./script.sh arg1` |
| If | `if [ condition ]; then` | `if [ -f file ]; then` |
| For Loop | `for i in list; do` | `for i in 1 2 3; do` |
| Function | `name() { ... }` | `greet() { echo "Hi"; }` |
| Grep | `grep pattern file` | `grep -i "error" log.txt` |
| Awk | `awk '{print $1}' file` | `awk -F: '{print $1}' /etc/passwd` |
| Sed | `sed 's/old/new/g' file` | `sed -i 's/foo/bar/g' config.txt` |

---

## 1. Basics

### Shebang

```bash
#!/bin/bash
````

Defines the shell interpreter.

### Run a Script

```bash
chmod +x script.sh
./script.sh
bash script.sh
```

### Comments

```bash
# Single-line comment
echo "Hello"  # Inline comment
```

### Variables

```bash
NAME="Sachin"
echo $NAME
echo "$NAME"
echo '$NAME'
```

### User Input

```bash
read -p "Enter name: " USER
```

### Arguments

```bash
$0   # Script name
$1   # First argument
$#   # Argument count
$@   # All arguments
$?   # Exit status
```

---

## 2. Operators & Conditionals

### String Tests

```bash
[ "$a" = "$b" ]
[ "$a" != "$b" ]
[ -z "$var" ]
[ -n "$var" ]
```

### Integer Tests

```bash
[ "$n" -eq 10 ]
[ "$n" -ne 5 ]
[ "$n" -lt 20 ]
[ "$n" -gt 10 ]
[ "$n" -le 50 ]
[ "$n" -ge 5 ]
```

### File Tests

```bash
[ -f file.txt ]
[ -d /tmp ]
[ -e file.txt ]
[ -r file.txt ]
[ -w file.txt ]
[ -x script.sh ]
[ -s file.txt ]
```

### If-Else

```bash
if [ condition ]; then
  echo "True"
elif [ other ]; then
  echo "Else"
fi
```

### Logical Operators

```bash
cmd1 && cmd2
cmd1 || cmd2
! cmd
```

### Case Statement

```bash
case $opt in
  start) echo "Start" ;;
  stop) echo "Stop" ;;
  *) echo "Invalid" ;;
esac
```

---

## 3. Loops

### For Loop

```bash
for i in {1..5}; do
  echo $i
done
```

### C-Style Loop

```bash
for ((i=1; i<=5; i++)); do
  echo $i
done
```

### While Loop

```bash
while read line; do
  echo "$line"
done < file.txt
```

### Until Loop

```bash
until [ $n -eq 0 ]; do
  ((n--))
done
```

### Loop Control

```bash
break
continue
```

### Loop Files

```bash
for file in *.log; do
  echo "$file"
done
```

---

## 4. Functions

```bash
greet() {
  echo "Hello, $1"
}

greet "Sachin"
```

### Return Values

```bash
return 0
echo $?
```

### Local Variables

```bash
demo() {
  local msg="Hi"
}
```

---

## 5. Text Processing

```bash
grep -in "error" log.txt
grep -r "nginx" /etc
grep -c "ERROR" app.log
```

```bash
awk -F: '{print $1}' /etc/passwd
sed -i 's/old/new/g' file.txt
cut -d: -f1 /etc/passwd
```

```bash
sort file.txt
sort -rn file.txt
uniq -c file.txt
tr 'a-z' 'A-Z'
wc -l file.txt
head -5 file.txt
tail -f app.log
```

---

## 6. Useful One-Liners

```bash
find /tmp -mtime +7 -delete
find . -name "*.log" | xargs wc -l
sed -i 's/dev/stage/g' *.conf
systemctl is-active nginx
tail -f app.log | grep ERROR
```

---

## 7. Error Handling & Debugging

```bash
set -euo pipefail
set -x
```

```bash
exit 0
exit 1
```

```bash
trap 'cleanup' EXIT
```

```
```
