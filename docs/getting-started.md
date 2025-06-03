---
sidebar_position: 1
---

# Getting Started with Mera Monitor API

This guide will help you get started with the Mera Monitor API by showing you how to generate your API credentials and access tokens for API integration.

## Prerequisites

Before you begin, make sure you have:
1. A Mera Monitor account with administrative access
2. Access to your organization's settings

## Generating API Credentials

### Step 1: Access API Settings
1. Log in to your [Mera Monitor dashboard](https://app.meramonitor.com)
2. Navigate to Configuration > API Credentials
3. You will see your existing API credentials if they have been generated

### Step 2: Generate API Credentials
If you haven't generated API credentials yet:
1. Click on "Generate API Credentials" button
2. The system will automatically generate:
   - Client ID
   - Secret Key

**Important Notes:**
- Each organization can only have one set of API credentials
- The generated credentials will not expire
- Store these credentials securely as they will be used for generating access tokens

### Step 3: Generate Access Token
Once you have your Client ID and Secret Key, you can generate an access token directly in the dashboard:

1. **In the Client Credential screen**, locate the "Access Token" section
2. **Click "Generate Token"** button in the UI
3. **Copy the generated access token** that appears in the interface
4. **Store the token securely** for use in your API integrations

**Access Token Details:**
- Access tokens are generated directly in the Mera Monitor dashboard
- Use this token in the Authorization header for all API calls:
   ```http
   Authorization: Bearer YOUR_ACCESS_TOKEN
   ```
- Tokens have a 60-minute expiration time - check the dashboard for token validity
- Generate new tokens through the dashboard interface when needed
- Never share your access tokens publicly

### Step 4: View and Manage Credentials
Once generated, you can:
1. View your Client ID at any time
2. View and copy your generated access tokens
3. Generate new access tokens as needed through the dashboard

## Using API Credentials

To integrate with the Mera Monitor API:
1. **Generate an access token** through the dashboard interface
2. **Include the access token** in the Authorization header for all API calls
3. **Follow the API documentation** for detailed endpoint information
4. **Generate new tokens** through the dashboard before they expire

## Next Steps

Now that you have your API credentials and know how to generate access tokens, you can:
1. Review the [API Documentation](/docs/api-documentation) for available endpoints
2. Start making API calls to integrate with Mera Monitor
3. Test your integration using the provided endpoints

## Support

If you need help:
- Check our [API Documentation](/docs/api-documentation)
- Contact our support team
- Visit our Support Portal 