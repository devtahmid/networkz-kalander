# KalenderNetz fullstack

This project contains:
- `backend/` → FastAPI + PostgreSQL API
- `frontend/` → React frontend

## Project Structure

```text
project_calnetw/
├── backend/
├── frontend/
└── README.md
```

## Backend Setup

1. Open `backend/`
2. Copy `.env.example` to `.env`
3. Put your PostgreSQL password into `DATABASE_URL`
4. Run:

```bash
python -m venv .venv
.venv\Scripts\activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

Swagger docs:

```text
http://127.0.0.1:8000/docs
```

## Frontend Setup

1. Open `frontend/`
2. Run:

```bash
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

## Main Features

- User registration
- User login with JWT authentication
- Public event browsing
- Calendar view
- Venues view
- Organizations view
- Admin dashboard
- Publish / unpublish / delete events

## Main Routes

- `/calendar`
- `/browse`
- `/venues`
- `/organizations`
- `/admin`

## User Flow

- Register a user
- Login from the frontend
- Open the admin dashboard with an admin user
- Publish pending events from the admin dashboard
- Published events appear on public pages
- Public events are loaded from `/events/public`

## Environment Variables

Create `backend/.env` and add:

```env
DATABASE_URL=postgresql+psycopg2://postgres:123@localhost:5433/kalendernetz
SECRET_KEY=change-this-to-a-long-random-secret
ACCESS_TOKEN_EXPIRE_MINUTES=120
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

## Notes

- Public pages use `/events/public`
- Admin routes require authentication
- Past events may be hidden if `upcoming_only=true`
- To show past events too, use `upcoming_only=false`

## Authors

Project team for KalenderNetz
