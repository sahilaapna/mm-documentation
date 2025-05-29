---
sidebar_position: 3
---

# API Documentation

This section provides detailed information about the API endpoints, request parameters, and response formats.

## Base URL

```
https://clientapi.meramonitor.com
```

## Authentication

### Get Token

Generate an access token using credentials.

```http
POST /api/oauth/token
```

#### Content Type
```
application/x-www-form-urlencoded
```

#### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| grant_type | string | Yes | Must be "client_credentials" |
| redirect_uri | string | Yes | Must be "urn:ietf:wg:oauth:2.0:oob" |
| client_id | string | Yes | OAuth client ID |
| client_secret | string | Yes | OAuth client secret |
| Email | string | Yes | AdminEmail |

#### Sample Request
```http
POST /oauth/token HTTP/1.1
Host: devintegrationapi.meramonitor.com
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&redirect_uri=urn:ietf:wg:oauth:2.0:oob&client_id=yourclientid&client_secret=yourclientsecret
```

#### Sample Response
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

## Endpoints

### Check-In/Check-Out

Get check in check out details of users.

```http
GET /api/attendance/checkincheckout
```

#### Description
Check in or check out a user based on the provided details.

#### Authentication
Send the token in the Authorization header as a Bearer token.

#### Content Type
Query string parameters (mapped to a class)

#### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| FromDate | string | Yes | Format "YYYY-MM-DD" |
| ToDate | string | Yes | Format "YYYY-MM-DD" |
| Email | string | Yes | Optional – provide to filter data for a specific user |

#### Authorization Header
```
Authorization: Bearer {access_token}
```

#### Sample Request
```http
GET /api/attendance/checkincheckout/user?Email=xxxx@yopmail.com&FromDate=2024-08-23&ToDate=2024-08-23
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

#### Sample Response
```json
{
    "data": [
        {
            "name": "xxxxxx",
            "email": "xxxxxx@yopmail.com",
            "attendence": [
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

#### Failure Responses

Invalid date format:
```json
{
    "data": null,
    "message": "Invalid date format. Please use 'yyyy-MM-dd'.",
    "success": false,
    "statusCode": 400
}
```

User not found:
```json
{
    "data": null,
    "message": "User not found.",
    "success": false,
    "statusCode": 404
}
```

No data found:
```json
{
    "data": null,
    "message": "No data found.",
    "success": false,
    "statusCode": 404
}
```

## Error Responses

The API uses standard HTTP status codes to indicate the success or failure of requests. Common error codes:
- `400 Bad Request`: The request was invalid
- `401 Unauthorized`: Authentication failed
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Resource not found
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

## Support

If you need help with the API, please contact our support team or visit our support portal. 