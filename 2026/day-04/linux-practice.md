Day 04 – Linux Practice: Processes and Services

#90DaysOfDevOps | Date: June 4, 2026


1. Process Checks
Command 1 — List all running processes
bash$ ps aux
Output (sample):
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.1  22572  1200 ?        Ss   10:00   0:01 /sbin/init
root      1023  0.0  0.1  72300  3400 ?        Ss   10:01   0:00 sshd: /usr/sbin/sshd -D
www-data  2045  0.1  0.5 123456  8900 ?        S    10:05   0:02 nginx: worker process
What I learned: Every process has a PID, owner, CPU%, and memory%. aux shows ALL users' processes.

Command 2 — Find a specific process by name
bash$ pgrep -l cron
Output:
847 cron
What I learned: pgrep is faster than ps aux | grep when you just need the PID. The -l flag shows the name alongside the PID.

2. Service Checks
Command 3 — Check SSH service status
bash$ systemctl status ssh
Output:
● ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/lib/systemd/system/ssh.service; enabled)
     Active: active (running) since 2026-06-04 10:01:33 IST; 30min ago
    Process: 1020 ExecStartPre=/usr/sbin/sshd -t (code=exited, status=0)
   Main PID: 1023 (sshd)
What I learned:

active (running) = healthy ✅
enabled = will auto-start on reboot
Main PID = the process ID to track


Command 4 — List all running services
bash$ systemctl list-units --type=service --state=running
Output (sample):
UNIT                   LOAD   ACTIVE SUB     DESCRIPTION
cron.service           loaded active running Regular background program processing daemon
docker.service         loaded active running Docker Application Container Engine
ssh.service            loaded active running OpenBSD Secure Shell server
What I learned: This gives a bird's-eye view of everything running on the system — essential for auditing a new server.

3. Log Checks
Command 5 — Read last 20 lines of SSH logs
bash$ journalctl -u ssh -n 20 --no-pager
Output (sample):
Jun 04 10:01:33 myserver sshd[1023]: Server listening on 0.0.0.0 port 22
Jun 04 10:01:33 myserver sshd[1023]: Server listening on :: port 22
Jun 04 10:15:44 myserver sshd[1023]: Accepted publickey for devuser from 192.168.1.5
Jun 04 10:15:44 myserver sshd[1023]: pam_unix(sshd:session): session opened for user devuser
What I learned: Logs tell you WHO connected, FROM WHERE, and WHEN. Critical for security audits.

Command 6 — Follow system logs live
bash$ tail -n 50 /var/log/syslog
Output (sample):
Jun 04 10:30:15 myserver kernel: [  0.000000] Booting Linux 5.15.0
Jun 04 10:30:16 myserver systemd[1]: Started OpenBSD Secure Shell server.
Jun 04 10:30:17 myserver cron[847]: (CRON) INFO (pidfile fd = 3)
What I learned: /var/log/syslog is the master log file — everything gets written here. Use tail -f to watch it live during troubleshooting.

4. Mini Troubleshooting Flow

Scenario: A service stopped responding. What do you do?

Step 1 → Check status
$ systemctl status <service>
         ↓ Look for: active/inactive, error messages

Step 2 → Read the logs
$ journalctl -u <service> -n 50
         ↓ Look for: errors, exit codes, failed config

Step 3 → Fix the issue
$ sudo vim /etc/<service>/config
         ↓ Fix the misconfiguration

Step 4 → Restart and verify
$ sudo systemctl restart <service>
$ systemctl status <service>
         ↓ Confirm: active (running)
Real example I practiced — SSH service:
StepCommandResultStatus checksystemctl status sshactive (running) ✅Log checkjournalctl -u ssh -n 20Listening on port 22 ✅List all servicessystemctl list-units --state=running3 services running ✅Live followjournalctl -u ssh -fWatching live connections ✅

Key Takeaways

ps aux → snapshot of all processes right now
pgrep -l <name> → fast way to find if a process is alive
systemctl status → first command when a service is down
journalctl -u <service> -f → live log tail — your best production tool
Always check both the service status AND its logs — status shows what, logs show why
