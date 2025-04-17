---
id: database-schema
title: Database Schema
sidebar_position: 2
---

# Database Schema

This document provides a detailed overview of Mera Monitor's database schema, including table structures, relationships, and indexes. The database is designed to efficiently store and manage all system data.

## Users Table

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role VARCHAR(50) NOT NULL,
    department VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true,
    INDEX idx_email (email),
    INDEX idx_role (role),
    INDEX idx_department (department)
);
```

## Teams Table

```sql
CREATE TABLE teams (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    department VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_department (department)
);
```

## Team Members Table

```sql
CREATE TABLE team_members (
    team_id UUID REFERENCES teams(id),
    user_id UUID REFERENCES users(id),
    role VARCHAR(50) NOT NULL,
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (team_id, user_id),
    INDEX idx_user_id (user_id)
);
```

## Projects Table

```sql
CREATE TABLE projects (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL,
    start_date DATE,
    end_date DATE,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_dates (start_date, end_date)
);
```

## Project Members Table

```sql
CREATE TABLE project_members (
    project_id UUID REFERENCES projects(id),
    user_id UUID REFERENCES users(id),
    role VARCHAR(50) NOT NULL,
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (project_id, user_id),
    INDEX idx_user_id (user_id)
);
```

## Tasks Table

```sql
CREATE TABLE tasks (
    id UUID PRIMARY KEY,
    project_id UUID REFERENCES projects(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL,
    priority VARCHAR(50) NOT NULL,
    assigned_to UUID REFERENCES users(id),
    created_by UUID REFERENCES users(id),
    due_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_project_id (project_id),
    INDEX idx_status (status),
    INDEX idx_assigned_to (assigned_to)
);
```

## Activities Table

```sql
CREATE TABLE activities (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    type VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE,
    duration INTEGER,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id),
    INDEX idx_type (type),
    INDEX idx_start_time (start_time)
);
```

## Attendance Table

```sql
CREATE TABLE attendance (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    date DATE NOT NULL,
    clock_in TIMESTAMP WITH TIME ZONE,
    clock_out TIMESTAMP WITH TIME ZONE,
    status VARCHAR(50) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, date),
    INDEX idx_user_id (user_id),
    INDEX idx_date (date)
);
```

## Reports Table

```sql
CREATE TABLE reports (
    id UUID PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    parameters JSONB,
    data JSONB,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_type (type),
    INDEX idx_created_by (created_by)
);
```

## Settings Table

```sql
CREATE TABLE settings (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    category VARCHAR(50) NOT NULL,
    key VARCHAR(100) NOT NULL,
    value JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, category, key),
    INDEX idx_user_id (user_id),
    INDEX idx_category (category)
);
```

## Audit Logs Table

```sql
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    action VARCHAR(50) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id UUID NOT NULL,
    changes JSONB,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id),
    INDEX idx_action (action),
    INDEX idx_entity (entity_type, entity_id)
);
```

## Relationships

### One-to-Many Relationships
- User -> Activities
- User -> Attendance
- User -> Reports
- Project -> Tasks
- Team -> Team Members
- Project -> Project Members

### Many-to-Many Relationships
- Users &lt;-&gt; Teams (through team_members)
- Users &lt;-&gt; Projects (through project_members)

### One-to-One Relationships
- User -> Settings (per category)

## Indexes

### Primary Indexes
- All tables have UUID primary keys
- Composite primary keys for junction tables

### Secondary Indexes
- Email lookup for users
- Status filtering for projects and tasks
- Date-based queries for activities and attendance
- User-based queries across tables
- Category-based settings lookup

## Data Types

### Common Types
- UUID for IDs
- VARCHAR for strings
- TEXT for long text
- TIMESTAMP WITH TIME ZONE for timestamps
- JSONB for flexible data
- BOOLEAN for flags
- INTEGER for durations

### Enums
- Status: active, completed, archived
- Priority: low, medium, high, urgent
- Role: admin, manager, user, guest
- Activity Type: app, website, document

## Best Practices

### Performance
1. **Indexing**: Appropriate indexes for common queries
2. **Partitioning**: Large tables partitioned by date
3. **Archiving**: Old data archived to separate tables
4. **Caching**: Frequently accessed data cached
5. **Query Optimization**: Optimized query patterns

### Data Integrity
1. **Foreign Keys**: Enforced referential integrity
2. **Constraints**: Data validation constraints
3. **Triggers**: Automated data updates
4. **Audit Trail**: Comprehensive change tracking
5. **Backup Strategy**: Regular data backups

### Security
1. **Access Control**: Role-based access
2. **Data Encryption**: Sensitive data encrypted
3. **Audit Logging**: All changes logged
4. **Input Validation**: Strict input validation
5. **SQL Injection Prevention**: Parameterized queries

## Maintenance

### Regular Tasks
1. **Index Maintenance**: Regular index optimization
2. **Vacuum**: Regular table vacuuming
3. **Statistics Update**: Update query statistics
4. **Backup Verification**: Verify backup integrity
5. **Performance Monitoring**: Monitor query performance

### Monitoring
1. **Table Sizes**: Monitor table growth
2. **Index Usage**: Track index effectiveness
3. **Query Performance**: Monitor slow queries
4. **Connection Pool**: Monitor connections
5. **Disk Usage**: Monitor storage usage 