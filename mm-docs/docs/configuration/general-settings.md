---
id: configuration-general
title: General Settings
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# General Settings

This section allows administrators to configure organization-wide settings for monitoring, time tracking, and activity levels.

<Tabs groupId="general-settings">
  <TabItem value="setting" label="Setting" default>

    Configure core monitoring parameters for the entire organization.

    ![General Settings - Setting Tab](/img/config-general-settings.png)

    **Configuration Options:**

    *   **Screenshot Interval (min):** Use the slider to set how often screenshots are taken (1 to 100 minutes).
    *   **Screenshot Blur Effect:** Control the level of blur applied to screenshots for privacy (slider from 0=None to 3=Max).
    *   **Capture Keyboard Mouse Stroke (min):** Set the interval for capturing activity levels based on keyboard/mouse input (slider from 10 to 60 minutes).
    *   **Idle Time Interval (min):** Define how long a user must be inactive before being marked as idle (slider from 5 to 100 minutes).
    *   **Idle Time Alert (min):** Set the duration of idle time after which an alert is triggered (slider from 0=Off to 100 minutes).
    *   **Session Expiry (Days):** Determine how many days a user's login session remains valid (slider from 1 to 100 days).
    *   **Cut Off Time (hh:mm:ss):** Set the time when the system resets daily tracking data (e.g., 00:00:00 for midnight).
    *   **Time Zone:** Select the organization's primary time zone from the dropdown (e.g., India Standard Time).
    *   **Attendance Hours Per Day (hh:mm:ss):** Define the standard expected working hours per day (e.g., 08:00:00).
    *   **Working Days Per Week (Days):** Check the boxes for the days considered official workdays.
    *   **Start Stop Mail Alert:** Toggle switch to enable/disable email notifications when users start or stop the tracking agent.

    :::tip
    Remember to click the **Update** button at the bottom to save any changes made on this tab.
    :::

  </TabItem>
  <TabItem value="activity" label="Activity Level">

    Define thresholds for categorizing user activity levels based on keyboard/mouse input frequency, often visualized in reports and dashboards.

    ![General Settings - Activity Level Tab](/img/config-activity-level.png)

    **Configuration:**

    *   **Ranges:** Define percentage ranges for different activity levels.
        *   Enter the lower and upper bounds for each level (e.g., 0 &lt;= 20 for low/red, 21 &lt;= 40 for medium/yellow).
        *   The system uses these ranges to assign a color indicator.
    *   **Add Color +:** Click to add a new activity level range and assign its color.
    *   **Delete (X):** Click the 'X' next to a range to remove it.

    :::tip
    Click the **Update** button to save your activity level configuration.
    :::

  </TabItem>
</Tabs>
