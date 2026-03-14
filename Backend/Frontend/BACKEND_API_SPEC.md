# Backend API Specification for LearnDrift Frontend

This document specifies the exact API endpoints and response formats your backend needs to implement for the frontend to work properly.

## Base URL
```
http://localhost:8000
```

## Authentication

### POST /login
Login endpoint for both students and instructors.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "role": "student" // or "instructor"
}
```

**Success Response (200):**
```json
{
  "role": "student",
  "name": "John Doe",
  "id": "123",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Response (401):**
```json
{
  "message": "Invalid credentials"
}
```

---

## Student Endpoints

### GET /student/dashboard/:id
Get student dashboard data.

**Headers:**
```
Authorization: Bearer {token}
```

**Success Response (200):**
```json
{
  "totalQuizzes": 24,
  "avgAccuracy": 75,
  "avgTime": "6.2 min",
  "weakTopic": "Trees",
  "accuracyTrend": {
    "labels": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "data": [65, 70, 68, 75, 72, 78, 80]
  },
  "topicPerformance": {
    "labels": ["Arrays", "Strings", "Trees", "DBMS", "OS"],
    "data": [85, 70, 65, 80, 75]
  },
  "recentActivity": [
    {
      "quiz": "Arrays Quiz 1",
      "score": "8/10",
      "time": "5 mins",
      "date": "2026-03-09"
    }
  ],
  "recommendations": [
    {
      "title": "Practice Trees",
      "description": "Your accuracy dropped in tree problems",
      "color": "from-yellow-500 to-yellow-600",
      "borderColor": "yellow-500"
    }
  ]
}
```

### GET /student/progress/:id
Get student progress data.

**Success Response (200):**
```json
{
  "accuracyOverTime": {
    "labels": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "data": [65, 70, 68, 75, 72, 78, 80]
  },
  "topicScores": {
    "labels": ["Arrays", "Strings", "Trees", "DBMS", "OS"],
    "data": [85, 70, 65, 80, 75]
  },
  "correct": 156,
  "incorrect": 44,
  "totalAttempts": 200,
  "accuracy": 78,
  "avgTime": "6.2 min"
}
```

### GET /student/topics/:id
Get topic-wise performance.

**Success Response (200):**
```json
{
  "topics": [
    {
      "name": "Arrays",
      "attempts": 45,
      "accuracy": 85,
      "avgTime": "5.2 min",
      "trend": "Improving",
      "trendIcon": "📈",
      "color": "green"
    },
    {
      "name": "Strings",
      "attempts": 38,
      "accuracy": 70,
      "avgTime": "6.1 min",
      "trend": "Stable",
      "trendIcon": "➡️",
      "color": "blue"
    }
  ]
}
```

### GET /student/recommendations/:id
Get personalized recommendations.

**Success Response (200):**
```json
{
  "recommendations": [
    {
      "type": "Practice",
      "title": "Practice more on Graphs",
      "description": "Your accuracy in graph problems is below average",
      "priority": "High",
      "icon": "📚"
    },
    {
      "type": "Speed",
      "title": "Improve solving time",
      "description": "Try to solve problems faster",
      "priority": "Medium",
      "icon": "⏱️"
    }
  ]
}
```

### POST /student/submit-answer
Submit quiz answer.

**Request Body:**
```json
{
  "studentId": "123",
  "questionId": 101,
  "answer": "B",
  "isCorrect": true,
  "timeTaken": 34,
  "retryCount": 1,
  "timestamp": "2026-03-10T10:00:00"
}
```

**Success Response (200):**
```json
{
  "message": "Answer submitted successfully",
  "correct": true
}
```

---

## Instructor Endpoints

### GET /instructor/dashboard
Get instructor dashboard data.

**Success Response (200):**
```json
{
  "totalStudents": 156,
  "activeStudents": 142,
  "highDrift": 18,
  "totalAlerts": 34,
  "avgDriftScore": "0.42",
  "driftTrend": {
    "labels": ["Week 1", "Week 2", "Week 3", "Week 4"],
    "data": [0.35, 0.42, 0.38, 0.45]
  },
  "weakAreas": {
    "labels": ["Arrays", "Strings", "Trees", "DBMS", "OS"],
    "data": [12, 8, 15, 6, 10]
  },
  "recentAlerts": [
    {
      "student": "Asha Kumar",
      "topic": "Recursion",
      "score": 0.89,
      "level": "High"
    }
  ],
  "studentsNeedingAttention": [
    {
      "name": "Asha Kumar",
      "accuracy": "45%",
      "drift": 0.89,
      "status": "High"
    }
  ]
}
```

### GET /students
Get list of all students.

**Success Response (200):**
```json
{
  "students": [
    {
      "id": 1,
      "name": "Asha Kumar",
      "attempts": 45,
      "accuracy": 45,
      "avgTime": "8.2 min",
      "drift": 0.89,
      "status": "High"
    }
  ]
}
```

### GET /student/:id/analysis
Get detailed student analysis.

**Success Response (200):**
```json
{
  "student": {
    "id": 1,
    "name": "Asha Kumar",
    "email": "asha@example.com",
    "totalAttempts": 45,
    "accuracy": 45,
    "avgTime": "8.2 min",
    "driftScore": 0.89,
    "status": "High Risk"
  },
  "accuracyTrend": {
    "labels": ["Week 1", "Week 2", "Week 3", "Week 4"],
    "data": [75, 68, 55, 45]
  },
  "topicPerformance": {
    "labels": ["Arrays", "Strings", "Trees", "DBMS", "OS"],
    "data": [45, 50, 38, 55, 48]
  },
  "alertHistory": [
    {
      "date": "2026-03-09",
      "topic": "Recursion",
      "drift": 0.89,
      "action": "Review recommended"
    }
  ]
}
```

### GET /drift-analysis
Get drift analysis data.

**Success Response (200):**
```json
{
  "driftData": [
    {
      "student": "Asha Kumar",
      "topic": "Recursion",
      "drift": 0.89,
      "level": "High",
      "remark": "Repeated mistakes"
    }
  ],
  "driftDistribution": {
    "labels": ["High Drift", "Medium Drift", "Low Drift"],
    "data": [18, 35, 103]
  },
  "topicDrift": {
    "labels": ["Arrays", "Strings", "Trees", "DBMS", "OS"],
    "data": [0.65, 0.42, 0.78, 0.38, 0.52]
  }
}
```

### GET /alerts
Get all alerts.

**Success Response (200):**
```json
{
  "alerts": [
    {
      "student": "Asha Kumar",
      "topic": "Recursion",
      "drift": 0.89,
      "alert": "Repeated mistakes and increased solving time",
      "action": "Instructor review recommended",
      "date": "2026-03-09",
      "priority": "High"
    }
  ]
}
```

---

## Error Handling

All endpoints should return appropriate HTTP status codes:

- **200**: Success
- **400**: Bad Request
- **401**: Unauthorized (invalid token or credentials)
- **404**: Not Found
- **500**: Internal Server Error

**Error Response Format:**
```json
{
  "message": "Error description here"
}
```

---

## Authentication Flow

1. User submits login credentials
2. Backend validates and returns token
3. Frontend stores token in localStorage
4. All subsequent requests include token in Authorization header
5. Backend validates token for protected routes
6. If token invalid (401), frontend redirects to login

---

## CORS Configuration

Your backend must allow requests from `http://localhost:3000`:

```python
# Example for FastAPI
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## Testing Your Backend

Use these curl commands to test your endpoints:

```bash
# Test login
curl -X POST http://localhost:8000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password","role":"student"}'

# Test student dashboard (replace TOKEN)
curl http://localhost:8000/student/dashboard/123 \
  -H "Authorization: Bearer TOKEN"
```
