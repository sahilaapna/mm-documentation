---
id: configuration-cloud
title: Cloud Settings
sidebar_position: 3
---

# Cloud Settings

Configure secure cloud storage for backing up monitoring data, such as screenshots and recordings.

## Cloud Details Configuration

*   **Storage Type:** Select the types of data you want to store in the cloud (e.g., screenshots, live recordings).
*   **Cloud Type:** Choose the connection protocol for your cloud storage (e.g., SFTP, S3).
*   **Upload Screenshot to Storage:** Enable or disable the automatic upload of screenshots to the configured cloud storage.
*   **Server Details:** Enter the necessary credentials and path for your cloud storage:
    *   **Host:** Server address (e.g., `sftp.yourdomain.com`).
    *   **Port:** Connection port (e.g., `22` for SFTP).
    *   **Username:** Login username.
    *   **Password:** Login password.
    *   **Folder:** Specific directory/path on the server where data should be stored.

![Screenshot: Cloud Settings](/img/add-department.png)

:::warning Important
Always verify your storage credentials and test the connection before saving the configuration to ensure data can be uploaded successfully.
:::
