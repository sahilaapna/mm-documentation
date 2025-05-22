---
sidebar_position: 2
---

# API Documentation

## Base URL

https://qaintegrationapi.meramonitor.com

## Authentication - Get Token

### Endpoint
POST /api/oauth/token

### Description
Generates an access token using client credentials. This token is required for all API requests. The token is valid for 30 days (2,592,000 seconds) from the time of generation. Make sure to implement proper token refresh logic in your application.

### Content-Type
application/x-www-form-urlencoded

### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| grant_type | string | Yes | Must be "client_credentials" |
| redirect_uri | string | Yes | Must be "urn:ietf:wg:oauth:2.0:oob" |
| client_id | string | Yes | OAuth client ID obtained from Mera Monitor settings |
| client_secret | string | Yes | OAuth client secret obtained from Mera Monitor settings |

### Sample Request
```http
POST /api/oauth/token
Host: yourdomain.com
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
redirect_uri=urn:ietf:wg:oauth:2.0:oob&
client_id=yourclientid&
client_secret=yourclientsecret
```

### Sample Response
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 2592000
}
```

## Check-In/Check-Out - All Users

### Endpoint
GET /api/attendance/checkincheckout

### Description
Retrieves check-in and check-out records for all users in your organization within a specified date range. This endpoint is useful for generating attendance reports and monitoring employee attendance patterns. The response includes detailed timing information for each check-in and check-out event.

### Authentication
Send the token in the Authorization header as a Bearer token. The token must be valid and not expired.

### Query Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| FromDate | string | Yes | Start date in "YYYY-MM-DD" format |
| ToDate | string | Yes | End date in "YYYY-MM-DD" format |

### Authorization Header
```http
Authorization: Bearer {access_token}
```

### Sample Request
```http
GET /api/attendance/checkincheckout?FromDate=2024-08-23&ToDate=2024-08-23
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

### Sample Success Response
```json
{
  "data": [
    {
      "name": "xxxxxx",
      "email": "xxxxxx@yopmail.com",
      "attendance": [
        {
          "date": "2024-08-23T00:00:00Z",
          "checkIn": "2024-08-23T12:27:49.088Z",
          "checkOut": "2024-08-23T14:05:12.837Z"
        }
      ]
    }
  ],
  "message": "Data retrieved successfully.",
  "success": true,
  "statusCode": 200
}
```

### Failure Responses
```json
{
  "data": null,
  "message": "Invalid date format. Please use 'yyyy-MM-dd'.",
  "success": false,
  "statusCode": 400
}
```

```json
{
  "data": null,
  "message": "No data found.",
  "success": false,
  "statusCode": 404
}
```

## Check-In/Check-Out - Specific User

### Endpoint
GET /api/attendance/checkincheckout/user

### Description
Retrieves check-in and check-out records for a specific user within a specified date range. This endpoint is useful for tracking individual employee attendance and generating personalized attendance reports. The response includes detailed timing information for each check-in and check-out event for the specified user.

### Authentication
Send the token in the Authorization header as a Bearer token. The token must be valid and not expired.

### Query Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| FromDate | string | Yes | Start date in "YYYY-MM-DD" format |
| ToDate | string | Yes | End date in "YYYY-MM-DD" format |
| Email | string | Yes | User's email address registered in Mera Monitor |

### Authorization Header
```http
Authorization: Bearer {access_token}
```

### Sample Request
```http
GET /api/attendance/checkincheckout/user?Email=xxxx@yopmail.com&FromDate=2024-08-23&ToDate=2024-08-23
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

### Sample Success Response
```json
{
  "data": {
    "name": "xxxxxx",
    "email": "xxxxxx@yopmail.com",
    "attendance": [
      {
        "date": "2024-08-23T00:00:00Z",
        "checkIn": "2024-08-23T12:27:49.088Z",
        "checkOut": "2024-08-23T14:05:12.837Z"
      }
    ]
  },
  "message": "Data retrieved successfully.",
  "success": true,
  "statusCode": 200
}
```

### Failure Responses
```json
{
  "data": null,
  "message": "Invalid date format. Please use 'yyyy-MM-dd'.",
  "success": false,
  "statusCode": 400
}
```

```json
{
  "data": null,
  "message": "User not found.",
  "success": false,
  "statusCode": 404
}
```

```json
{
  "data": null,
  "message": "No data found.",
  "success": false,
  "statusCode": 404
}
```

## Endpoints

### Get User Profile

Retrieves the profile information for the authenticated user.

```http
GET /api/v1/user/profile
```

#### Response

```json
{
  "id": "user_123",
  "name": "John Doe",
  "email": "john@example.com",
  "created_at": "2024-03-20T10:00:00Z"
}
```

### Create Document

Creates a new document in the system.

```http
POST /api/v1/documents
```

#### Request Body

```json
{
  "title": "Document Title",
  "content": "Document content in markdown format",
  "tags": ["tag1", "tag2"]
}
```

#### Response

```json
{
  "id": "doc_456",
  "title": "Document Title",
  "content": "Document content in markdown format",
  "tags": ["tag1", "tag2"],
  "created_at": "2024-03-20T10:00:00Z",
  "updated_at": "2024-03-20T10:00:00Z"
}
```

### Update Document

Updates an existing document.

```http
PUT /api/v1/documents/{document_id}
```

#### Request Body

```json
{
  "title": "Updated Title",
  "content": "Updated content",
  "tags": ["tag1", "tag3"]
}
```

#### Response

```json
{
  "id": "doc_456",
  "title": "Updated Title",
  "content": "Updated content",
  "tags": ["tag1", "tag3"],
  "created_at": "2024-03-20T10:00:00Z",
  "updated_at": "2024-03-20T10:30:00Z"
}
```

### Delete Document

Deletes a document from the system.

```http
DELETE /api/v1/documents/{document_id}
```

#### Response

```json
{
  "success": true,
  "message": "Document deleted successfully"
}
```

## Error Responses

The API uses standard HTTP status codes to indicate the success or failure of requests. Error responses include a message explaining what went wrong:

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid",
    "details": {
      "field": "title",
      "reason": "Title is required"
    }
  }
}
```

Common error codes:
- `400 Bad Request`: The request was invalid
- `401 Unauthorized`: Authentication failed
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Resource not found
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

## Rate Limiting

The API implements rate limiting to ensure fair usage and system stability. Each API key is limited to 100 requests per minute. When you exceed this limit, you'll receive a 429 Too Many Requests response. The current rate limit status is included in the response headers:

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1616236800
```

## Pagination

List endpoints support pagination using `limit` and `offset` query parameters:

```http
GET /api/v1/documents?limit=10&offset=0
```

The response includes pagination metadata:

```json
{
  "data": [...],
  "pagination": {
    "total": 100,
    "limit": 10,
    "offset": 0,
    "has_more": true
  }
}
```

## Webhooks

You can configure webhooks to receive notifications about events in your account. To set up a webhook:

```http
POST /api/v1/webhooks
```

#### Request Body

```json
{
  "url": "https://your-domain.com/webhook",
  "events": ["document.created", "document.updated"],
  "secret": "your_webhook_secret"
}
```

#### Response

```json
{
  "id": "webhook_789",
  "url": "https://your-domain.com/webhook",
  "events": ["document.created", "document.updated"],
  "created_at": "2024-03-20T10:00:00Z"
}
```

## SDKs and Libraries

We provide official SDKs for popular programming languages:

- [Python SDK](https://github.com/your-org/python-sdk)
- [JavaScript SDK](https://github.com/your-org/javascript-sdk)
- [Ruby SDK](https://github.com/your-org/ruby-sdk)

## Support

If you need help with the API, please contact our support team at api-support@example.com or visit our [support portal](https://support.example.com). 

## Best Practices

1. **Error Handling**
   - Implement proper error handling for all API responses
   - Check status codes and error messages
   - Implement retry logic for transient errors

2. **Date Handling**
   - Always use the correct date format (YYYY-MM-DD)
   - Consider timezone differences
   - Validate dates before making requests

3. **Security**
   - Keep your access token secure
   - Implement token refresh logic
   - Use HTTPS for all API requests

4. **Performance**
   - Cache responses when appropriate
   - Implement proper rate limiting handling
   - Use appropriate date ranges for queries 