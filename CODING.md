# Full-Stack Document Edit Lock Manager Challenge

## Background
The Societal Guardianship Case Management System needs a basic collaborative editing feature for legal documents. Your task is to implement a simple full-stack solution for a document locking mechanism that prevents concurrent edits.

## Challenge Overview
Implement a basic document locking system with the following components:
1. Backend API (Node.js/Express)
2. Frontend interface (React)
3. Database integration (PostgreSQL)

## Requirements

### Core Functionality
- Only one user can edit the document at a time.
- If a user in one browser locks the document, a user in another browser should not be able to edit it.
- Users should be notified immediately if they attempt to edit a locked document.
- In the interest of time, this system only needs to handle one document with multiple users trying to access it. Scaling it to multiple documents is out-of-scope.
- Locks should be released immediately when a user ends their editing session.
- All actions (lock acquisition and release) should be recorded in the database.

### Backend
- Implement RESTful API endpoints for:
  - Starting an edit session: POST /api/documents/lock
  - Ending an edit session: DELETE /api/documents/lock
  - Checking lock status: GET /api/documents/lock
- Handle lock creation and release with proper error handling
- Integrate with the provided PostgreSQL database for persistent storage of locks
- Use appropriate HTTP status codes for different scenarios (e.g., 200 for success, 403 for locked document)
- Ensure that the API can handle requests from multiple clients (browsers) concurrently

### Frontend
- Create a React component that allows users to:
  - Start editing the document (attempt to acquire a lock)
  - End editing the document (release a lock)
  - View the current lock status of the document
- Display appropriate messages for:
  - Successful lock acquisition
  - Failed lock acquisition (document already locked)
  - Successful lock release
- Implement a simple visual indicator showing whether the document is locked or editable
- Handle errors gracefully and display user-friendly error messages

### Database
- Design and implement a schema to store the document lock with the following information:
  - Litigant ID (user who holds the lock)
  - Lock acquisition timestamp
- Implement the following queries:
  - Check if the document is currently locked
  - Create a new lock
  - Release an existing lock
  - Retrieve information about the current lock on the document
- Use appropriate data types for each field (e.g., TIMESTAMP for lock timestamp)

## Provided Structure
We provide a `docker-compose.yml` file that sets up:
- A PostgreSQL database
- A Node.js/Express backend service
- A React frontend service

Your task is to implement the necessary code within this structure. The `docker-compose.yml` file will include:
- Database service with a named volume for data persistence
- Backend service with the Node.js application directory mounted as a volume
- Frontend service with the React application directory mounted as a volume
- Appropriate port mappings for each service

## API Specifications

### Input
For starting/ending edit sessions, the API should accept:
```json
{
  "eventType": "start_edit" | "end_edit",
  "timestamp": number,
  "litigantId": string
}
```

### Output
For 'start_edit' events, the API should return:
- Success: `"{litigantId} started editing the document at {timestamp}"`
- Failure: `"{litigantId} cannot edit the document at {timestamp} because it is locked by {lockingLitigantId} since {lockTimestamp}"`

The API should also include appropriate HTTP status codes and, in case of errors, clear error messages to aid in debugging and user feedback.

## Getting Started

Read the setup instructions in `SETUP.md`

