---
id: tech-ref-data-flow
title: Data to Server Flow
sidebar_position: 1
---

# Desktop App: Data to Server Flow

This outlines the typical process the Mera Monitor desktop application uses to process collected user activity data and upload it to the central server.

## Steps

1.  **API Token Validation:** Ensure the application has a valid token to communicate with the server.
2.  **Daily Table Check:** Identify relevant daily data tables (often SQLite) containing raw captured data.
3.  **User Data Retrieval:** Fetch user-specific activity data recorded by the desktop agent.
4.  **Screen Activity Processing:**
    *   Aggregate raw screen activity records, grouping them by application name, window title, and URL (if applicable).
    *   Calculate derived metrics like away time, first/last activity timestamps within a timeframe.
    *   Apply productivity classifications (Productive/Unproductive) based on defined rules.
5.  **Keystroke/Mouse Data Processing:**
    *   Aggregate keyboard stroke counts and mouse click/movement data.
    *   Identify periods of idle time based on lack of input.
    *   Update relevant activity and idle time tables.
6.  **Iterative Processing:** Repeat the processing steps for all monitored users managed by the application instance.
7.  **Data Upload:** Securely transmit the processed data to the main server database.
8.  **Cleanup:** Optionally, clean up or archive raw data locally after successful processing and upload to manage disk space.

## Key Data Tables (Conceptual)

The process often involves interacting with several local and server-side tables:

*   **Local Daily Tables:** Store raw, timestamped activity logs (e.g., application focus changes, URLs visited, keyboard/mouse events).
*   **User Screen Activity Table:** Stores aggregated and processed screen time per application/URL.
*   **User Daily Activity Table:** Contains daily summaries of total active, productive, unproductive, and idle time.
*   **User Productivity Table:** Maps applications/websites to their productivity status.
*   **User Key/Mouse Activity Tables:** Stores aggregated input activity counts.
*   **User Daily Idle Activity Table:** Records detected periods of user idle time.

![Screenshot: Data to Server Flow Diagram](/img/add-department.png)

:::info Note
Data processing might occur at set intervals or triggered by specific events (e.g., user logout, system shutdown) to ensure timely updates on the server.
::: 