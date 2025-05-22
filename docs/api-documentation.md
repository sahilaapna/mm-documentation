---
sidebar_position: 3
---

# API Documentation

This section provides detailed information about the API endpoints, request parameters, and response formats.

## Authentication

All API requests require authentication using an API key. Include your API key in the request header:

```http
Authorization: Bearer YOUR_API_KEY
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

API requests are limited to 100 requests per minute per API key. The current rate limit status is included in the response headers:

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