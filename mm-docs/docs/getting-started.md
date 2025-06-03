---
sidebar_position: 1
---

# Getting Started with Mera Monitor API

This guide will help you get started with the Mera Monitor API by showing you how to generate and use your API credentials.

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
   - Client Secret

**Important Notes:**
- Each organization can only have one set of API credentials
- The generated credentials will not expire
- The client secret will only be shown once during generation
- Store these credentials securely as they will be used for all API integrations

### Step 3: View and Manage Credentials
Once generated, you can:
1. View your Client ID at any time
2. Regenerate the Client Secret if needed (this will invalidate the previous secret)
3. Copy the credentials for use in your applications

## Using API Credentials

To use the API credentials:
1. Include the Client ID and Client Secret in your authentication requests
2. Use the generated access token in the Authorization header for all API calls
3. Follow the [API Documentation](/docs/api-documentation) for detailed endpoint information

## Best Practices

1. **Security**
   - Never share your client secret
   - Store credentials securely
   - Use environment variables for credentials
   - Implement proper error handling for authentication failures

2. **API Usage**
   - Monitor your API usage
   - Implement proper error handling
   - Use appropriate retry mechanisms

## Next Steps

Now that you have your API credentials, you can:
1. Review the [API Documentation](/docs/api-documentation) for available endpoints
2. Start making API calls to integrate with Mera Monitor
3. Test your integration using the provided endpoints

## Support

If you need help:
- Check our [API Documentation](/docs/api-documentation)
- Contact our support team
- Visit our Support Portal 