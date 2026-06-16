# Day 16 – Shell Scripting Basics
> #90DaysOfDevOps | Date: June 16, 2026

---

## Task 1: Your First Script — hello.sh

```bash
#!/bin/bash
# hello.sh — my very first shell script

echo "Hello, DevOps!"
echo "Today is: $(date)"
echo "Running as user: $(whoami)"
```

```bash
$ chmod +x hello.sh
$ ./hello.sh
Hello, DevOps!
Today is: Mon Jun 16 10:00:00 IST 2026
Running as user: devuser
```

### What happens without the shebang?
- Without `#!/bin/bash`, the OS doesn't know which interpreter to use
- It may default to `sh` (dash) instead of `bash` — syntax differences can break the script
- Always include shebang as line 1 — it's the contract between your script and the OS

---

## Task 2: Variables — variables.sh

```bash
#!/bin/bash
# variables.sh — working with variables

NAME="Rahul"
ROLE="DevOps Engineer"
COMPANY="TrainWithShubham"

# Double quotes — variables are expanded
echo "Hello, I am $NAME and I am a $ROLE at $COMPANY"

# Single quotes — variables are NOT expanded (printed literally)
echo 'Hello, I am $NAME and I am a $ROLE'
# Output: Hello, I am $NAME and I am a $ROLE  ← literal text!
```

```bash
$ ./variables.sh
Hello, I am Rahul and I am a DevOps Engineer at TrainWithShubham
Hello, I am $NAME and I am a $ROLE
```

### Single vs Double Quotes
| Quotes | Variable Expansion | Use When |
|--------|-------------------|----------|
| `"double"` | ✅ Yes — `$VAR` becomes its value | Most of the time |
| `'single'` | ❌ No — prints literally | You want exact string with $ signs |

---

## Task 3: User Input — greet.sh

```bash
#!/bin/bash
# greet.sh — taking user input with read

read -p "Enter your name: " NAME
read -p "Enter your favourite DevOps tool: " TOOL

echo ""
echo "Hello $NAME, your favourite tool is $TOOL!"
echo "Great choice — keep learning and keep building! 🚀"
```

```bash
$ ./greet.sh
Enter your name: Rahul
Enter your favourite DevOps tool: Docker

Hello Rahul, your favourite tool is Docker!
Great choice — keep learning and keep building! 🚀
```

---

## Task 4a: Number Check — check_number.sh

```bash
#!/bin/bash
# check_number.sh — if-else conditions

read -p "Enter a number: " NUM

if [ $NUM -gt 0 ]; then
    echo "✅ $NUM is POSITIVE"
elif [ $NUM -lt 0 ]; then
    echo "❌ $NUM is NEGATIVE"
else
    echo "⚪ The number is ZERO"
fi
```

```bash
$ ./check_number.sh
Enter a number: 42
✅ 42 is POSITIVE

$ ./check_number.sh
Enter a number: -5
❌ -5 is NEGATIVE

$ ./check_number.sh
Enter a number: 0
⚪ The number is ZERO
```

---

## Task 4b: File Check — file_check.sh

```bash
#!/bin/bash
# file_check.sh — check if a file exists

read -p "Enter filename to check: " FILENAME

if [ -f "$FILENAME" ]; then
    echo "✅ File '$FILENAME' EXISTS"
    echo "   Size: $(du -sh $FILENAME | cut -f1)"
    echo "   Permissions: $(ls -l $FILENAME | awk '{print $1}')"
elif [ -d "$FILENAME" ]; then
    echo "📁 '$FILENAME' is a DIRECTORY, not a file"
else
    echo "❌ File '$FILENAME' does NOT exist"
fi
```

```bash
$ ./file_check.sh
Enter filename to check: notes.txt
✅ File 'notes.txt' EXISTS
   Size: 4.0K
   Permissions: -rw-rw-r--

$ ./file_check.sh
Enter filename to check: ghost.txt
❌ File 'ghost.txt' does NOT exist
```

---

## Task 5: Combined Script — server_check.sh

```bash
#!/bin/bash
# server_check.sh — check a system service interactively

SERVICE="nginx"

echo "================================"
echo "   Server Health Check Script   "
echo "================================"
echo "Service: $SERVICE"
echo ""

read -p "Do you want to check the status of $SERVICE? (y/n): " ANSWER

if [ "$ANSWER" = "y" ] || [ "$ANSWER" = "Y" ]; then
    echo ""
    echo "Checking $SERVICE status..."
    echo "----------------------------"

    # Check if service is active
    if systemctl is-active --quiet $SERVICE; then
        echo "✅ $SERVICE is ACTIVE and RUNNING"
        systemctl status $SERVICE --no-pager | head -10
    else
        echo "❌ $SERVICE is NOT running"
        echo "Last 5 log lines:"
        journalctl -u $SERVICE -n 5 --no-pager
        echo ""
        echo "To start: sudo systemctl start $SERVICE"
    fi

elif [ "$ANSWER" = "n" ] || [ "$ANSWER" = "N" ]; then
    echo "Skipped."
else
    echo "⚠️  Invalid input. Please enter y or n."
fi
```

```bash
$ ./server_check.sh
================================
   Server Health Check Script
================================
Service: nginx

Do you want to check the status of nginx? (y/n): y

Checking nginx status...
----------------------------
✅ nginx is ACTIVE and RUNNING
● nginx.service - A high performance web server
   Active: active (running) since Mon 2026-06-16
```

---

## If-Else Syntax Reference

```bash
# Comparison operators
-eq   equal
-ne   not equal
-gt   greater than
-lt   less than
-ge   greater than or equal
-le   less than or equal

# File checks
-f    is a regular file
-d    is a directory
-e    exists (file or dir)
-r    is readable
-x    is executable

# String checks
=     strings are equal
!=    strings are not equal
-z    string is empty
```

---

## What I Learned

- **Shebang is mandatory** — `#!/bin/bash` must be line 1. It tells the OS exactly which shell to use. Without it, your script may behave unexpectedly.
- **Single vs double quotes matter** — `"$NAME"` expands the variable. `'$NAME'` prints it literally. Wrong quotes = wrong output.
- **`[ ]` needs spaces** — `if [$NUM -gt 0]` FAILS. It must be `if [ $NUM -gt 0 ]` — spaces inside brackets are required.
- **`read -p`** is the clean way to take user input — prompt and variable in one line.
- **Real DevOps use:** Shell scripts automate repetitive tasks — health checks, deployments, log cleanups. Every script you write today will save hours next month.

---
*Day 16 / 90 — #90DaysOfDevOps | #DevOpsKaJosh | #TrainWithShubham*
