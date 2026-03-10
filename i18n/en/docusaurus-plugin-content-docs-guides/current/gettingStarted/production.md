---
title: 'Production Environment'
sidebar_position: 8
---




In production environments, cluster deployments are typically used to ensure high availability of components and services. However, with limited resources, some developers may opt for single-machine deployment (using source code or Docker containers) in production. This document covers data backup, failure recovery, and potential risks in single-machine deployment environments.

## 1. Scheduled MongoDB Backup
IMServer stores its core data in MongoDB, so backing up MongoDB data can recover most of the data. Set up the MongoDB backup directory and scheduled tasks before starting containers.

### Data Backup

IMServer stores its core data in MongoDB, so backing up MongoDB data enables recovery of most data. Here are the backup steps:

1. **Modify Backup Directory**

   - Edit the `MONGO_BACKUP_DIR` path in the `.env` file (default: `components/backup/mongo/`). It is recommended to set the backup directory to a different disk than the `components` directory to avoid losing both original data and backups due to a single disk failure.

3. **Scheduled Backup Configuration**
   - Configure a scheduled backup task in Linux by editing crontab:
   ```sh
   crontab -e
   ```
   - Add the following scheduled task to run a backup at 2:00 AM daily, keeping the 2 most recent backups. Adjust the `cron` expression as needed for different schedules:
   ```sh
   0 2 * * * docker exec mongo mongodump --uri="mongodb://openIM:openIM123@localhost:27017/openim_v3" --out="/data/backup/$(expr $(date +\%s) / 86400 \% 2)"
   ```
   - Use `crontab -l` to verify the scheduled task was set up correctly.



## 2. Handling Component Failures

1. If `mongo`, `redis`, `kafka`, `etcd`, or other components stop unexpectedly, first try restarting all components and the IMServer service.

2. If services fail to start due to data issues (e.g., disk failure, disk full), first stop all components and the IMServer service.
   - If `redis` fails to start, delete the `components/redis/` directory.
   - If `kafka` fails to start, delete the `components/kafka/` directory.
   - If `mongo` fails to start:
        - 1. Delete the `components/redis/`, `components/mongodb/`, and `components/kafka/` directories.
        - 2. Restore from backup: `docker exec -it mongo mongorestore --uri="mongodb://openIM:openIM123@localhost:27017/openim_v3" /data/backup/your_backup_name/openim_v3`
		- **your_backup_name is either 0 or 1 — choose the more recent directory**
   - If `etcd` fails to start, delete the `components/etcd/` directory.

3. After performing the above steps, restart all components and the IMServer service.

## 3. Potential Risks

1. **Single-Machine Deployment Risk**
   If a machine failure makes both the original data disk and backup disk inaccessible, data cannot be directly recovered. In this case, you may need to use your cloud provider's snapshot service for data recovery.

2. **Backup Directory Recommendation**
   To prevent data loss from a single disk failure, it is recommended to set MongoDB's backup directory `MONGO_BACKUP_DIR` on a separate disk from the `components` directory.

3. **Data Recovery Risk**
   When restoring MongoDB data, any data created after the backup time will be lost. However, backing up too frequently may significantly impact MongoDB performance.

4. **Impact of Deleting Redis Data**
   Deleting Redis data may cause **incorrect unread message counts**.
