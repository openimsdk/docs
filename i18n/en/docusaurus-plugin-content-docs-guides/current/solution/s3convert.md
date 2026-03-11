---
title: 'How to Migrate S3 Storage'
sidebar_position: 7

---

# S3 Storage Migration

### Get the Latest Code
Download the latest version of the project:
  - The latest code includes a built-in `S3` migration tool — no separate action required.
```shell
git clone https://github.com/openimsdk/open-im-server.git
cd open-im-server
```

### Configuration File Guide
Modify the relevant configuration files under the `config` directory as needed to complete the S3 migration configuration:
1. Edit the `openim-rpc-third.yml` configuration file
   - Locate and update the S3-related configuration items to match your migration requirements.
2. About the `minio.yml` configuration file
   - If MinIO is not actually used in your project, this file can be ignored.
   - If needed, update the S3 configuration items according to your migration requirements.
3. The `object.enable` field in `openim-rpc-third.yml` specifies the new S3 storage engine.

### Build the S3 Migration Tool
1. Navigate to the tools directory:
```shell
cd tools/s3
```
2. Run the build command:
```shell
go build -o s3convert main.go
```

### Start Migration
To ensure stability during data migration, follow these guidelines:
1. Preparation
   - Stop services: It is recommended to perform migration while services are stopped to avoid data inconsistency or operation conflicts.
   - Backup MongoDB: Back up the data in the `s3` collection to enable quick recovery in case of unexpected issues.
2. Migration Notes
   - The migration tool does not delete the original `S3` data but will modify related records in the `s3` collection in `MongoDB`.
   - After migration is complete, verify data integrity to ensure all migration steps were executed correctly.
3. Run the migration command
   - `<config dir path>`: Specify the configuration file directory path.
   - `<old s3 name>`: Enter the original S3 configuration name, e.g., `minio`.
```shell
./s3convert -config <config dir path> -name <old s3 name>
```
4. Example command
If configuration files are located in the `config` directory and the original S3 name is `minio`:
```shell
./s3convert -config ./../../config -name minio
```
When you see the output `success`, the migration is complete.
