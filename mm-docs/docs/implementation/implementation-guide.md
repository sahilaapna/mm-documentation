---
sidebar_label: 'Implementation Guide'
---

# Mera Monitor Implementation Guide

## 1. Introduction

Welcome to Mera Monitor! This guide provides step-by-step instructions for Organization Administrators to implement and configure Mera Monitor within your organization after the initial registration and account verification process. Following these steps will ensure accurate data capture and a smooth onboarding experience for your team members.

The implementation process involves several key stages:

1.  **Account Activation:** Initial login and dashboard familiarization.
2.  **Initial Configuration (Organization Level):** Setting up core platform-wide settings.
3.  **Adding Users:** Bringing your team members onto the platform.
4.  **User-Level Configuration:** Customizing settings for individual users or groups.
5.  **Desktop Agent Installation:** Deploying the monitoring software.
6.  **Ongoing Management:** Continuous monitoring and refinement.

Let's walk through each step.

---

## 2. Account Activation

-   **Initial Login:** After successful registration and email verification, the designated **Organization Admin** should log in to the Mera Monitor dashboard using the credentials created during signup.
-   **Dashboard Familiarization:** Take a few moments to explore the dashboard layout.

    :::tip[Explore the Dashboard]
    Note the locations of key sections like **Settings**, **Member Management**, **Departments**, **Projects & Tasks** (if applicable), and **Reports**. Understanding the layout now will help later.
    :::

---

## 3. Initial Configuration (Organization Level)

:::important[Configuration Timing]
It is **highly recommended** to perform these initial configurations **before adding any users** to the platform. Configuration changes should ideally be made during **off-business hours** when users are not actively being monitored to avoid potential data inconsistencies.
:::

Navigate to the **General Settings** section.

### 3.1. Determine Monitoring Mode (Stealth vs. Interactive)

-   Decide whether your organization will use **Stealth Mode** (monitoring runs discreetly without user login) or **Interactive Mode** (users log into the agent, typically aware of monitoring).
-   Configure the relevant setting (e.g., **Stealth Mode** toggle in **User Default Settings**, applied via **Bulk Configuration**) at the organization level based on your choice. This decision impacts the installation and user experience.

### 3.2. Set Organization Time Zone

-   Go to **General Settings -> Time and Attendance**.
-   Set the **Time Zone** to match the primary geographical location of your organization's headquarters or main user base (e.g., India Standard Time (IST), Eastern Standard Time (EST)).

    :::info[Why Time Zone Matters]
    This ensures organization-level reports and summaries align correctly with your primary business hours.
    :::

### 3.3. Define Working Days

-   In **General Settings -> Time and Attendance**, configure the **Working Days Per Week**.
-   Select the days your organization typically operates (e.g., Monday to Friday). This is crucial for accurate attendance and productivity reporting.

### 3.4. Set Default Cut-Off Time

-   In **General Settings -> Time and Attendance**, set the default **Cut Off Time**.
-   This time defines when one workday ends and the next begins for data logging purposes (e.g., `00:00:00` for midnight).

    :::note
    While this can be overridden at the user level (see Step 5.2), setting a sensible default is recommended.
    :::

### 3.5. Review Other General Settings

-   Briefly review other settings like **Screenshot Interval**, **Idle Time** thresholds, etc., under **General Settings**. You can adjust these later, but understanding the defaults is helpful.

### 3.6. Activity Classification (Optional - Recommended Later)

:::tip[Delay Classification for Better Results]
While you can start classifying applications and websites as **Productive/Unproductive** now, it's often better to do this **after some initial data has been collected** (perhaps after a week or two). This allows you to see what tools your team *actually* uses.
:::

-   **Important:** Perform activity classification updates during **off-business hours**.

---

## 4. Adding Users

Once the initial organization-level configuration is complete, you can add team members.

### 4.1. Choose Method

-   **Individual Addition:** Use the "Add Members" button on the dashboard for adding users one by one. You'll need their email address and can optionally add Name, Manager, User Access Type, and Department.
-   **Bulk User Upload:** For adding multiple users, download the template `.csv` file, fill in the user details (**Email** is mandatory), and upload the file.

### 4.2. Invitations

-   Upon adding users (individually or via bulk upload), the system automatically sends invitation emails.
-   **Interactive Mode:** Users will receive an email with an activation link to set their password. They will use these credentials to log into the desktop agent.
-   **Stealth Mode:** Users are added to the system, but may not receive activation emails depending on the exact stealth configuration. The agent will be installed (often silently) without requiring user login.

### 4.3. Department Association (Optional)

-   If using departments, create them under the "Departments" section and associate members accordingly for better organization and reporting.

---

## 5. User-Level Configuration (Critical for Accuracy)

:::warning[Vital Step for Accuracy]
This is a **critical step**, especially for organizations with users in different time zones or with non-standard work schedules. Default settings inherited from the organization level might not be correct for every user. Mismatched settings can lead to inaccurate data.
:::

### 5.1. Verify/Set User Time Zone

-   **Importance:** The **Time Zone** setting for *each user* **must match the time zone configured on their computer**. Mismatched time zones will lead to inaccurate data capture and reporting.
-   **Action:** Use the **Bulk Configuration Update** feature or edit individual user settings to ensure the **Time Zone** setting for each user correctly reflects their machine's time zone.

### 5.2. Verify/Set User Cut-Off Time

-   **Importance:** The **Cut Off Time** determines when Mera Monitor rolls over the date for logging purposes. If a user works across midnight (e.g., a night shift ending at 4 AM), the default midnight (`00:00:00`) cut-off might incorrectly split their work day into two separate days.
-   **Action:** For users with shifts ending after midnight but before the start of the next standard workday, adjust their individual **Cut Off Time** to occur *after* their shift ends (e.g., `05:00:00` or `06:00:00` for a shift ending at 4 AM). Use **Bulk Configuration Update** or individual edits.

### 5.3. Review User Default Settings

-   Use **Bulk Configuration Update** or individual edits to adjust other user-specific settings if needed (e.g., enabling/disabling **Stop Timer Enable**, **Private Mode**, **View Screenshot** permissions based on roles or policies).

---

## 6. Desktop Agent Installation

After users are added and configured, the Mera Monitor desktop agent needs to be installed on their computers.

### 6.1. Obtain Installer

-   Download the appropriate installer (Windows, macOS, Linux) from the Mera Monitor platform.

### 6.2. Installation Process

-   The installation method may vary depending on your IT policies.
-   **Interactive Mode:**
    -   Users typically run the installer.
    -   After installation, the agent will prompt for the user's credentials (email and password they set during account activation).
    -   Once logged in, the agent starts tracking.
-   **Stealth Mode:**
    -   Installation is often performed silently by IT administrators using deployment tools.
    -   The agent starts automatically without requiring user login or credentials.

### 6.3. Installation Support

:::warning[Potential Installation Issues]
Be prepared for potential installation issues on specific user machines (e.g., conflicts with antivirus/security software, unique system configurations). Contact Mera Monitor support if you encounter persistent problems. In some unique cases, an update to the desktop agent might be required.
:::

---

## 7. Ongoing Management and Monitoring

-   **Project & Task Management (If Enabled):** If your organization uses this feature, configure projects, tasks, and allocate them to users as described in the user guide.
-   **Review Reports:** Regularly check the **Time Tracker**, **Websites & Applications**, and other reports to monitor productivity, attendance, and application usage.
-   **Refine Configuration:** Periodically review and update **Activity Classifications** (Productive/Unproductive) and other settings based on evolving work patterns and organizational needs.

    :::important[Off-Hours Configuration]
    Remember to make configuration changes like Activity Classification during **off-business hours**.
    :::
-   **User Management:** Add new users, manage departures, and update user roles or department assignments as needed.

---

## 8. Conclusion

Successfully implementing Mera Monitor involves careful initial configuration (especially **Time Zones** and **Cut-Off Times**), followed by user addition and agent installation. By following these steps and referencing the detailed Mera Monitor User Guide for specific feature operations, you can effectively leverage the platform to gain valuable insights into your organization's productivity. Remember to plan for potential support needs during the installation phase. 