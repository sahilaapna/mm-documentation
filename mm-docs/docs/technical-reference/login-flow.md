---
id: tech-ref-login-flow
title: Login & Data Capture Flow
sidebar_position: 2
---

# Desktop App: Login & Data Capture Flow

This describes the process the Mera Monitor desktop application follows for user login and subsequent data collection.

## Steps

1.  **User Authentication:**
    *   Checks for existing sessions/credentials stored locally (e.g., in SQLite DB).
    *   If no valid local session, prompts the user for login credentials (username/password).
    *   Validates entered credentials against the central server.
2.  **Configuration & Initialization:**
    *   Validates the API token received from the server upon successful login.
    *   Loads user-specific configuration settings (monitoring rules, privacy settings) from the server or local cache.
    *   Initializes necessary components like activity tracking timers, screenshot capture mechanisms, etc.
    *   Loads any relevant project or task lists associated with the user.
3.  **Data Collection (Continuous):**
    *   Monitors user activity based on configured intervals and triggers:
        *   **Screen Activity:** Captures application focus changes, window titles, URLs.
        *   **Screenshots:** Takes screenshots at the configured interval.
        *   **Keyboard/Mouse Events:** Tracks input activity (counts, not specific keys) to measure activity levels and detect idle time.
        *   **Log Intervals:** Periodically saves captured data locally.
4.  **Data Storage (Local):**
    *   Temporarily stores data in memory for immediate processing.
    *   Persists raw and aggregated data to a local database (e.g., SQLite).
    *   Saves captured screenshots to a designated local folder.
5.  **Data Upload (Periodic):**
    *   At configured intervals or based on triggers (e.g., network availability), uploads processed data from the local SQLite DB to the main server database.
    *   Uploads saved screenshots from the local folder to the configured cloud storage (if enabled).
6.  **Stopping Activities (e.g., Logout/Shutdown):**
    *   Gracefully stops all monitoring timers and activity listeners.
    *   Ensures any remaining locally stored data is uploaded to the server/cloud before the application closes to prevent data loss.

## Triggers & Actions

*   **User Login:** Initiates authentication and configuration loading.
*   **Timers:** Trigger periodic actions like screenshot capture, data logging, and data upload.
*   **User Activity:** Changes in screen focus, keyboard/mouse input trigger data capture.
*   **Data Storage Events:** Writing data to memory, SQLite, and local folders.
*   **Data Upload Events:** Transmitting data to the main database and cloud storage.

![Screenshot: Login & Data Capture Flow Diagram](/img/add-department.png)

:::tip
The application is designed to ensure all captured data is securely uploaded before shutdown whenever possible.
::: 