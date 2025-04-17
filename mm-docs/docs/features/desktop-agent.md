---
sidebar_position: 6
---

# Desktop Agent

The Mera Monitor desktop agent is a lightweight application designed to track and analyze user activity on their computer. It provides insights into active and idle time, session durations, and quick access to the user's dashboard for more detailed analytics.

## Interface Overview

![Mera Monitor Desktop Agent Interface](/img/features/desktop-agent.png)

<div class="desktop-agent-interface">

1. **User Name Display** - "Sahil Sharma" appears at the top left, clearly identifying the logged-in user
2. **View Dashboard Button** - Located at the top right with a green status indicator showing active tracking
3. **Current Session Timer** - Large central display showing "00:01:08" in HH:MM:SS format
4. **Activity Metrics**
   - Active Time: "04:12" of engaged computer usage
   - Idle Time: "00:29" of inactivity detected
5. **Recent Sessions List** - Right panel showing previous session times:
   - (14:35:05 - 17:15:03)
   - (13:12:05 - 14:12:55)
   - (12:08:29 - 13:11:01)

</div>

:::tip Interactive Elements
Hover over each component in the desktop agent to see real-time information and quick actions. The interface is designed to be intuitive and user-friendly.
:::

## Key Features

- **Current Session Timer**: Displays the elapsed time of the current work session in hours, minutes, and seconds (HH:MM:SS)
- **Active Time Tracking**: Shows the total time the user has been actively engaged with the computer during the current session
- **Idle Time Tracking**: Indicates the total time the user has been inactive during the current session
- **Recent Session History**: Provides a list of recent session start and end times, allowing users to review their work patterns
- **View Dashboard Button**: Offers quick access to the full Mera Monitor dashboard for comprehensive analytics and reporting
- **User Name Display**: Clearly shows the name of the logged-in user
- **Session Status Indicator**: A visual indicator (green dot) that confirms the session is active and being tracked

## Using the Desktop Agent

### 1. Launching the Application

- After successful installation, the Mera Monitor desktop agent will typically launch automatically on system startup
- You can also manually launch the application from your system's applications menu or desktop shortcut

### 2. Understanding the Interface

Each component of the desktop agent serves a specific purpose:

| Component | Description | Location |
|-----------|-------------|-----------|
| User Name | Your profile identifier | Top left |
| Session Timer | Current session duration | Center |
| Active Time | Productive time tracking | Bottom left |
| Idle Time | Inactivity tracking | Bottom right |
| Recent Sessions | Session history | Right panel |
| Dashboard Button | Quick access to web dashboard | Top right |

### 3. Monitoring Your Activity

The desktop agent automatically tracks:
- Active and idle time as you work
- Updates the time fields in real-time
- Maintains a history of your work sessions

### 4. Accessing the Dashboard

Click the "View Dashboard" button to:
- Open the full Mera Monitor dashboard in your web browser
- Access detailed analytics and reports
- Manage your work time and productivity settings

### 5. Ending a Session

Sessions typically end:
- Automatically when the computer shuts down or goes to sleep
- Through the dashboard interface
- Via system tray icon (if available)

## Troubleshooting

### Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Timer Not Starting | Ensure the application is running and your computer is not in sleep/hibernation mode |
| Incorrect Active/Idle Time | Check system settings and application permissions |
| Dashboard Not Loading | Verify internet connection and Mera Monitor account login status |

:::tip Pro Tip
For optimal performance, keep the desktop agent running in the background while working. This ensures accurate tracking of your work sessions and productivity metrics.
:::

:::note Note
The desktop agent requires minimal system resources and is designed to run efficiently in the background without impacting your computer's performance.
:::

<style>
{`
  .desktop-agent-interface {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }

  .desktop-agent-interface ol {
    list-style-type: none;
    padding: 0;
  }

  .desktop-agent-interface li {
    margin: 10px 0;
    padding: 10px;
    background: white;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .desktop-agent-interface li:hover {
    transform: translateX(10px);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .desktop-agent-interface strong {
    color: #6851ff;
  }
`}
</style> 