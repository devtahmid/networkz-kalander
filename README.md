<<<<<<< HEAD
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
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> b9c0ff41c0c0202c85402c36171d22da0ebf7e2d
