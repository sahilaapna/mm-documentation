---
id: mera-monitor-user-guide
title: Mera Monitor User Guide
sidebar_position: 1
---

# Mera Monitor User Guide

Welcome to the official documentation for **Mera Monitor**—a comprehensive productivity tracking and monitoring solution for organizations. This guide covers every feature in detail, with step-by-step instructions, best practices, and visual aids.

---

## Table of Contents

1. [Introduction & Getting Started](#introduction--getting-started)
2. [Dashboard Overview](#dashboard-overview)
3. [Productivity Tracking](#productivity-tracking)
4. [Attendance Management](#attendance-management)
5. [Member Management](#member-management)
6. [Department Management](#department-management)
7. [General Settings](#general-settings)
8. [User Default Settings](#user-default-settings)
9. [Cloud Settings](#cloud-settings)
10. [Bulk Configuration Update](#bulk-configuration-update)
11. [Reports](#reports)
    - [Time Tracker Report](#time-tracker-report)
    - [Websites & Applications Report](#websites--applications-report)
12. [Desktop Application Flows](#desktop-application-flows)
    - [Data to Server Flow](#data-to-server-flow)
    - [Login & Data Capture Flow](#login--data-capture-flow)

---

## Introduction & Getting Started

Mera Monitor is designed to help organizations efficiently manage and analyze team performance. It tracks active work hours, application and website usage, and attendance patterns, providing a holistic view of productivity.

### Key Terms

- **Productivity:** Effective use of work hours by team members.
- **Tracking:** Collection and analysis of various usage metrics.

### Organization Signup Process

1. **Visit the Mera Monitor website.**
2. **Click "Sign Up"** and fill in the following:
   - **Admin Name:** Person responsible for setup and management.
   - **Organization Name:** Official company name.
   - **Work Email:** Company email for notifications and verification.
   - **Phone Number:** For correspondence.
   - **Password:** Must meet security criteria.
3. **Email Verification:** An authentication code is sent to your work email. Enter this code to verify and activate your account.

:::tip
All new organizations receive a 14-day free trial.
:::

**Screenshot Required:**  
![Screenshot: Signup Form](./img/signup-form.png)

---

## Dashboard Overview

The dashboard is the central hub for all activities in Mera Monitor. It adapts based on user roles and provides real-time insights.

### User Access Levels

- **Organization Admin:** Full privileges and visibility.
- **Managers/Team Leads:** Access based on assigned roles.
- **Members:** Limited to their own data.

**Screenshot Required:**  
![Screenshot: Dashboard Overview](./img/dashboard-overview.png)

### Real-time Monitoring

- **Total Members:** Number of active registered users.
- **Currently Active Members:** Users logged in and interacting.
- **Offline Members Count:** Registered users not currently active.

### Time Tracking Metrics

- **Total Active Hours:** Total hours users are logged in.
- **Total Productive Hours:** Hours spent on productive activities.
- **Total Non-Productive Hours:** Hours spent on unproductive activities.

Admins can filter all metrics by custom date ranges for historical analysis.

**Screenshot Required:**  
![Screenshot: Dashboard Filters](./img/dashboard-filters.png)

---

## Productivity Tracking

### Activity Classification

Admins can categorize applications and websites as **Productive** or **Unproductive**.

| Activity Type      | Examples                                 |
|--------------------|------------------------------------------|
| Productive         | Project management, data analysis tools  |
| Unproductive       | Social media, non-work-related sites     |

**Best Practice:**  
Regularly review and update classifications to reflect changing workflows.

**Screenshot Required:**  
![Screenshot: Activity Classification](./img/activity-classification.png)

### Productivity Analytics

- **Graphical Representations:** Bar charts showing productive vs. unproductive hours.
- **Performance Rankings:** Top 3 performers and bottom 3 underperformers.
- **Usage Analytics:** Top 5 websites and applications.

**Screenshot Required:**  
![Screenshot: Productivity Analytics](./img/productivity-analytics.png)

**How to Use:**  
Use these analytics to identify trends, reward top performers, and coach underperformers.

---

## Attendance Management

The attendance widget provides a graphical view of team attendance over time.

### Features

- **Tracks login patterns and activity levels.**
- **Identifies absenteeism, peak hours, and participation trends.**

**Use Cases:**
- HR can monitor attendance for payroll and compliance.
- Team leads can spot engagement issues early.

**Screenshot Required:**  
![Screenshot: Attendance Widget](./img/attendance-widget.png)

---

## Member Management

Managing team members is a core feature of Mera Monitor.

### Adding Individual Members

1. Click **Add Members** on the dashboard.
2. Fill in:
   - **Email Address** (required)
   - **Name, Manager, User Access Type, Department** (optional)
3. The member receives an email with an activation link and setup instructions.

**Screenshot Required:**  
![Screenshot: Add Member Form](./img/add-member-form.png)

### Bulk User Upload

1. Download the provided template.
2. Fill in user details (email required, others optional).
3. Upload the file.
4. System sends invites and highlights any errors.

**Screenshot Required:**  
![Screenshot: Bulk Upload](./img/bulk-upload.png)

### Invitation Management

- **Automated Emails:** Sent on member addition.
- **Track Status:** Sent, pending, accepted.
- **Resend or revoke invitations as needed.**

**Screenshot Required:**  
![Screenshot: Invitation Management](./img/invitation-management.png)

---

## Department Management

Departments help segment your organization for better reporting and management.

### Department Overview

- **List all departments.**
- **Search by department name.**
- **View member count and details.**

**Screenshot Required:**  
![Screenshot: Department List](./img/department-list.png)

### Creating Departments

1. Click **Add Department**.
2. Enter the department name.
3. Add members to the department.

**Screenshot Required:**  
![Screenshot: Add Department](./img/add-department.png)

### Administration

- **Edit or delete departments.**
- **Reassign members as needed.**
- **Use filters to quickly find departments.**

**Screenshot Required:**  
![Screenshot: Department Administration](./img/department-admin.png)

---

## General Settings

The General Settings section is the control panel for all monitoring configurations.

### Screenshot Settings

- **Screenshot Interval:** 1–100 minutes.
- **Screenshot Blur Effect:** 0 (none) to 3 (max).

### Activity Monitoring

- **Capture Keyboard/Mouse Stroke:** 10–60 minutes interval.
- **Idle Time Settings:**
  - **Idle Time Interval:** 5–100 minutes.
  - **Idle Time Alert:** 0–100 minutes.
  - **Active User Duration:** 10–60 minutes.

### Session Management

- **Session Expiry:** 1–100 days.
- **Recording Capture Duration:** 5–30 minutes.

### Time and Attendance

- **Cut Off Time:** Daily reset (HH:MM:SS).
- **Time Zone:** Default is IST.
- **Attendance Hours Per Day:** Set expected working hours.
- **Working Days Per Week:** Select official working days.

### Notifications

- **Start/Stop Mail Alert:** Enable/disable email alerts for monitoring events.

**Screenshot Required:**  
![Screenshot: General Settings](./img/general-settings.png)

**Tip:**  
Always click **Update** to save your changes!

---

## User Default Settings

Configure monitoring and privacy defaults for individual users.

### Monitoring Features

- **Capture Screenshot:** Enable/disable per user.
- **View Screenshot:** Control who can view screenshots.
- **Live Monitoring:** Enable live stream and recording.
- **Monitoring Toggle:** Main switch for all features.

### Privacy and Security

- **Stealth Mode:** Hide monitoring indicators.
- **Private Mode:** Allow users to pause monitoring.
- **Notification:** Alert users about monitoring status.

### Time Management

- **Stop Timer Enable:** Users can pause activity tracking.

**Screenshot Required:**  
![Screenshot: User Default Settings](./img/user-default-settings.png)

**Note:**  
Purple toggles = enabled, grey = disabled.

---

## Cloud Settings

Configure secure cloud storage for monitoring data.

### Cloud Details Configuration

- **Storage Type:** Select data to store (e.g., live recordings).
- **Cloud Type:** Choose protocol (e.g., SFTP).
- **Upload Screenshot to Storage:** Enable/disable auto-upload.
- **Server Details:** Enter host, port, username, password, and folder.

**Screenshot Required:**  
![Screenshot: Cloud Settings](./img/cloud-settings.png)

**Warning:**  
Always verify SFTP credentials and test the connection before saving!

---

## Bulk Configuration Update

Streamline settings for multiple users at once.

### Navigation and Selection

- **Organization Level:** Apply changes to all users.
- **Team/Department Level:** Target specific groups.
- **Member Selection:** Pick individual users.

### Configurable Features

- Monitoring controls (screen capture, live stream, etc.)
- User experience (notifications, stop timer, private mode)

**Screenshot Required:**  
![Screenshot: Bulk Configuration Update](./img/bulk-config-update.png)

**Info:**  
Bulk updates are immediate and permanent until changed again.

---

## Reports

Mera Monitor provides detailed reports for productivity and usage analysis.

### Time Tracker Report

#### Accessing the Report

- Go to **Reports** > **Time Tracker**.

#### Views

- **Organization View:** Team-wide metrics.
- **Individual View:** Analyze a specific member’s time usage.

#### Features

- Date range selection
- Member selection
- Export to CSV/Excel
- Sorting and pagination

#### Metrics

| Metric           | Description                                 |
|------------------|---------------------------------------------|
| Active Time      | Time logged in and working                  |
| Productive Time  | Time on productive activities               |
| Unproductive Time| Time on unproductive activities             |
| Idle Time        | Time with no activity                       |
| Away Time        | Explicitly marked as away                   |
| Total Hours      | Sum of all tracked time                     |

**Screenshot Required:**  
![Screenshot: Time Tracker Report](./img/time-tracker-report.png)

**How to Use:**  
Use Organization View for team trends, Individual View for coaching and self-improvement.

---

### Websites & Applications Report

#### Accessing the Report

- Go to **Reports** > **Web And Apps**.

#### Views

- **Organization View:** Aggregated usage across the team.
- **Individual View:** Usage for a specific member.

#### Features

- Date range selection
- Search/filter by name
- Tabs: All, Websites, Applications

#### Table Columns

| Column           | Description                                 |
|------------------|---------------------------------------------|
| Websites/Apps    | Name or URL                                 |
| Time Spent       | Total time spent                            |
| Productive/Unproductive | Classification                       |
| Action           | View detailed usage                         |

**Screenshot Required:**  
![Screenshot: Websites & Applications Report](./img/web-apps-report.png)

**Why is this report important?**  
Helps optimize tool usage and identify distractions.

---

## Desktop Application Flows

### Data to Server Flow

Describes how the desktop app processes and uploads user activity data.

#### Steps

1. **API Token Validation**
2. **Daily Table Check**
3. **User Data Retrieval**
4. **Screen Activity Processing**
   - Grouping activities by app name, title, URL.
   - Calculating away time, first/last activity.
   - Categorizing as productive/unproductive.
5. **Keystroke/Mouse Data Processing**
   - Recording counts, identifying idle time, updating tables.
6. **Iterative Processing for All Users**

#### Key Tables

- Daily Tables (raw data)
- User Screen Activity Table (grouped activities)
- User Daily Activity Table (daily summary)
- User Productivity Table (productivity categorization)
- User Key/Mouse Activity Tables (input tracking)
- User Daily Idle Activity Table (idle records)

**Screenshot Required:**  
![Screenshot: Data to Server Flow](./img/data-to-server-flow.png)

**Info:**  
Data is cleaned up after processing to optimize storage.

---

### Login & Data Capture Flow

Describes the desktop app’s login and data collection process.

#### Steps

1. **User Authentication**
   - Checks local DB, prompts for credentials, validates with server.
2. **Configuration & Initialization**
   - Validates API token, loads config, starts timers, loads projects/tasks.
3. **Data Collection**
   - On upload, screen activity, screenshot timer, keyboard/mouse events, log intervals.
4. **Data Storage**
   - In-memory, local SQLite DB, local folder for screenshots.
5. **Data Upload**
   - Uploads from SQLite DB to main DB, screenshots to cloud.
6. **Stopping Activities**
   - Stops timers, uploads remaining data before shutdown.

#### Triggers & Actions

- User login
- Timers for screenshots, logging, uploads
- User activity (screen, keyboard, mouse)
- Data storage (memory, SQLite, local folder)
- Data upload (main DB, cloud)

**Screenshot Required:**  
![Screenshot: Login & Data Capture Flow](./img/login-data-capture-flow.png)

**Tip:**  
All data is uploaded before shutdown to prevent loss.

---

# End of Guide

For further assistance, contact your Mera Monitor administrator or visit our [support portal](#).