---
id: api-reference
title: API Reference
sidebar_position: 1
---

# API Reference

Mera Monitor provides a comprehensive REST API that allows you to integrate and interact with the platform programmatically. This documentation covers all available API endpoints, authentication methods, and usage examples.

## Authentication

### API Keys
```http
Authorization: Bearer YOUR_API_KEY
```

### OAuth 2.0
```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Rate Limiting
- 100 requests per minute per API key
- 1000 requests per hour per API key
- Rate limit headers included in responses

## Base URL
```
https://api.meramonitor.com/v1
```

## Endpoints

### User Management

#### Get User Profile
```http
GET /users/{user_id}
```

Response:
```json
{
  "id": "user_123",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "admin",
  "department": "Engineering",
  "created_at": "2024-01-01T00:00:00Z"
}
```

#### Update User Profile
```http
PUT /users/{user_id}
```

Request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "department": "Engineering"
}
```

### Activity Tracking

#### Get User Activity
```http
GET /users/{user_id}/activity
```

Query Parameters:
- `start_date`: Start date (YYYY-MM-DD)
- `end_date`: End date (YYYY-MM-DD)
- `type`: Activity type (app, website, etc.)

Response:
```json
{
  "activities": [
    {
      "id": "activity_123",
      "type": "app",
      "name": "Chrome",
      "start_time": "2024-01-01T09:00:00Z",
      "end_time": "2024-01-01T10:00:00Z",
      "duration": 3600
    }
  ],
  "total_count": 100,
  "has_more": true
}
```

### Project Management

#### Get Projects
```http
GET /projects
```

Response:
```json
{
  "projects": [
    {
      "id": "project_123",
      "name": "Website Redesign",
      "status": "active",
      "start_date": "2024-01-01",
      "end_date": "2024-03-01",
      "team": ["user_123", "user_456"]
    }
  ],
  "total_count": 50,
  "has_more": true
}
```

#### Create Project
```http
POST /projects
```

Request:
```json
{
  "name": "New Project",
  "start_date": "2024-01-01",
  "end_date": "2024-03-01",
  "team": ["user_123", "user_456"]
}
```

### Reporting

#### Get Reports
```http
GET /reports
```

Query Parameters:
- `type`: Report type (productivity, attendance, etc.)
- `start_date`: Start date (YYYY-MM-DD)
- `end_date`: End date (YYYY-MM-DD)
- `format`: Report format (json, csv, pdf)

Response:
```json
{
  "report_id": "report_123",
  "type": "productivity",
  "start_date": "2024-01-01",
  "end_date": "2024-01-31",
  "data": {
    "metrics": {
      "productive_time": 120,
      "unproductive_time": 30,
      "total_time": 150
    },
    "details": [
      {
        "date": "2024-01-01",
        "productive_time": 8,
        "unproductive_time": 2
      }
    ]
  }
}
```

### Webhooks

#### Register Webhook
```http
POST /webhooks
```

Request:
```json
{
  "url": "https://your-domain.com/webhook",
  "events": ["user.activity", "project.update"],
  "secret": "your_webhook_secret"
}
```

#### Webhook Payload
```json
{
  "event": "user.activity",
  "timestamp": "2024-01-01T00:00:00Z",
  "data": {
    "user_id": "user_123",
    "activity_type": "app",
    "activity_name": "Chrome",
    "duration": 3600
  }
}
```

## Error Handling

### Error Response Format
```json
{
  "error": {
    "code": "invalid_request",
    "message": "Invalid API key",
    "details": {
      "field": "api_key",
      "reason": "expired"
    }
  }
}
```

### Common Error Codes
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `429`: Too Many Requests
- `500`: Internal Server Error

## SDK Examples

### Python
```python
from meramonitor import MeraMonitor

client = MeraMonitor(api_key='your_api_key')

# Get user activity
activity = client.get_user_activity(
    user_id='user_123',
    start_date='2024-01-01',
    end_date='2024-01-31'
)

# Create project
project = client.create_project(
    name='New Project',
    start_date='2024-01-01',
    end_date='2024-03-01',
    team=['user_123', 'user_456']
)
```

### JavaScript
```javascript
const MeraMonitor = require('meramonitor');

const client = new MeraMonitor({
  apiKey: 'your_api_key'
});

// Get user activity
client.getUserActivity({
  userId: 'user_123',
  startDate: '2024-01-01',
  endDate: '2024-01-31'
}).then(activity => {
  console.log(activity);
});

// Create project
client.createProject({
  name: 'New Project',
  startDate: '2024-01-01',
  endDate: '2024-03-01',
  team: ['user_123', 'user_456']
}).then(project => {
  console.log(project);
});
```

## Best Practices

### API Usage
1. **Rate Limiting**: Monitor rate limits
2. **Error Handling**: Implement proper error handling
3. **Retry Logic**: Implement retry for failed requests
4. **Caching**: Cache responses when appropriate
5. **Security**: Keep API keys secure

### Development
1. **Testing**: Test API integration thoroughly
2. **Documentation**: Keep integration docs updated
3. **Monitoring**: Monitor API usage
4. **Versioning**: Use API versioning
5. **Security**: Follow security best practices

## Contact for API Support

If you have any questions or need help implementing our API, please contact our API support team at [support@meramonitor.com](mailto:support@meramonitor.com).

## Support

### Resources
- [API Status Page](https://status.meramonitor.com)
- [Developer Forum](https://forum.meramonitor.com)
- [API Documentation](https://docs.meramonitor.com/api)
- [Support Email](support@meramonitor.com) 