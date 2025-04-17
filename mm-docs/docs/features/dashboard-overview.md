---
id: dashboard-overview
title: Dashboard Overview
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 📊 Dashboard Overview

:::tip Key Benefits
- 🎯 **Centralized Control**: Access all essential monitoring tools in one place
- 📈 **Real-time Insights**: Monitor productivity and performance as it happens
- 🔄 **Adaptive Views**: Different perspectives for admins, managers, and users
:::

The Mera Monitor dashboard provides a comprehensive, real-time view of your organization's productivity metrics. This guide breaks down the elements visible on the main dashboard.

![Mera Monitor Dashboard Overview](/img/dashboard.png)

## Understanding the Dashboard Layout

The dashboard is organized into several key sections:

### 1. Header and Navigation

Located at the very top, this area includes:
- **Greeting & Date**: Welcomes the logged-in user (e.g., "Hi Admin, Good Afternoon") and shows the current date.
- **View Modes**: Buttons to switch between **Organization View**, **Team View**, and **Individual View**, allowing data analysis at different levels.
- **Date Range Selector**: Allows filtering the dashboard data for specific periods (e.g., "2025-03-29 → 2025-04-04").
- **Profile Access**: Typically includes the user's profile picture or initials, providing access to profile settings and logout options.

### 2. Sidebar Menu

Positioned on the left, this menu provides access to all major features of Mera Monitor:
- **Dashboard**: Returns to this main overview page.
- **My Team**, **Change Manager**, **Live Tracking**, **Reports**, **Project & Task**, **Pricing and Billing**, **Time Claim**, **Time Entry**, **Holiday**, **Configuration**: Links to respective modules for detailed management and analysis.

### 3. Download Application Banner

Displayed prominently if the desktop agent isn't detected or actively tracking:
- **Prompt**: Encourages users to "Download application to start tracking your time."
- **Download App Button**: Provides a direct link to download the necessary desktop agent software.

### 4. Live Data Overview

This section provides a snapshot of the current workforce status:

<div class="metrics-grid">
  <div class="metric-card total">
    <h3>35</h3>
    <p>Total Members</p>
    <span class="icon">👥</span>
    <small>Represents the total number of users configured in the system within the current view (Organization/Team).</small>
  </div>
  <div class="metric-card active">
    <h3>00</h3>
    <p>Active Members</p>
    <span class="icon">✓</span>
    <small>Shows the count of members currently active and being tracked by the desktop agent. (Shows "No Active Members" if zero).</small>
  </div>
  <div class="metric-card offline">
    <h3>35</h3>
    <p>Offline Members</p>
    <span class="icon">⭘</span>
    <small>Indicates the number of members who are currently not active or logged out.</small>
  </div>
</div>

### 5. Productivity Time Metrics

Adjacent to the Live Data, this section summarizes key time-based productivity indicators for the selected date range:

<div class="productivity-metrics">
  <div class="metric">
    <span class="icon">⏱️</span>
    <div class="details">
      <h4>Total Active Hours</h4>
      <p class="time">--:--:-- hrs</p>
      <small>Total duration users were logged in and actively using their computers.</small>
    </div>
  </div>
  <div class="metric">
    <span class="icon">📈</span>
    <div class="details">
      <h4>Total Productive Hours</h4>
      <p class="time">--:--:-- hrs</p>
      <small>Time spent on applications and websites categorized as productive.</small>
    </div>
  </div>
  <div class="metric">
    <span class="icon">📉</span>
    <div class="details">
      <h4>Total Unproductive Hours</h4>
      <p class="time">--:--:-- hrs</p>
      <small>Time spent on applications and websites categorized as unproductive.</small>
    </div>
  </div>
</div>

### 6. Performance Analysis Section

This area provides deeper insights into productivity trends:
- **Productive vs Unproductive Graph**: (Shows "No Active Data - Download to get started" when no data is available) Typically displays a visual comparison (e.g., bar or line chart) of productive and unproductive time over the selected period.
- **Top Productive**: (Shows "No Active Data") Lists members who have demonstrated the highest levels of productive activity.
- **Less Productive**: (Shows "No Active Data") Lists members with lower levels of productive activity, potentially indicating areas for support.

### 7. Web & Apps Usage Overview

Provides insights into digital tool usage:

<div class="monitoring-section">
  <div class="monitoring-card">
    <h3>Websites</h3>
    <p>(Shows "No Active Data") Displays the most frequently visited websites by users.</p>
  </div>
  <div class="monitoring-card">
    <h3>Applications</h3>
    <p>(Shows "No Active Data") Shows the most used applications across the team/organization.</p>
  </div>
</div>

### 8. Attendance Overview

Visualizes attendance patterns for the last 7 days:
- **Chart**: A bar chart showing the daily count of users.
- **Legend**: Differentiates between members marked as "Present" and those "On Leave".
- **Axis**: The Y-axis represents the "User Count", and the X-axis shows the dates for the past seven days.
- **Navigation**: Arrows (← →) allow viewing previous or next periods if applicable.

<style>
{`
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }

  .metric-card {
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    background: var(--ifm-card-background-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .metric-card:hover {
    transform: translateY(-4px);
  }

  .metric-card h3 {
    font-size: 2.5rem;
    margin: 0;
    color: var(--ifm-color-primary);
  }

  .metric-card p {
    margin-bottom: 0.5rem;
  }

  .metric-card small {
    font-size: 0.85em;
    color: var(--ifm-font-color-secondary);
    margin-top: auto;
  }

  .productivity-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }

  .metric {
    display: flex;
    align-items: flex-start;
    padding: 1.5rem;
    border-radius: 8px;
    background: var(--ifm-card-background-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }

  .metric:hover {
    transform: translateY(-4px);
  }

  .metric .icon {
    font-size: 2rem;
    margin-right: 1rem;
    margin-top: 0.25rem;
  }

  .metric .details {
    flex: 1;
  }

  .metric h4 {
    margin: 0 0 0.25rem 0;
    color: var(--ifm-color-primary);
  }

  .metric p {
    margin-bottom: 0.25rem;
  }

  .metric small {
    font-size: 0.85em;
    color: var(--ifm-font-color-secondary);
    display: block;
  }

  .time {
    font-size: 1.2rem;
    color: var(--ifm-color-secondary);
    margin: 0 0 0.5rem 0 !important;
  }

  .monitoring-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }

  .monitoring-card {
    padding: 1.5rem;
    border-radius: 8px;
    background: var(--ifm-card-background-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }

  .monitoring-card:hover {
    transform: translateY(-4px);
  }

  .monitoring-card h3 {
    color: var(--ifm-color-primary);
    margin-top: 0;
  }
`}
</style> 