# SOCIAL-MEDIA-

Concise MERN social media starter project (backend + frontend).

## Overview
- Backend: Node.js + Express + Mongoose (MongoDB)
- Frontend: React

## Prerequisites
- Node.js (18+ recommended)
- npm (or yarn)
- MongoDB (local or Atlas)

## Setup
1. Backend

```bash
cd backend
npm install
# set MONGO_URI in .env
# start server
node index.js
# or (dev) npx nodemon index.js
```

2. Frontend

```bash
cd frontend
npm install
npm start
```

## Environment
- Create a `.env` file in `backend/` with at least:

```
MONGO_URI=mongodb://localhost:27017/your-db
PORT=8081
```

## Notes
- The `backend/models/user.model.js` defines required and unique fields for `username` and `email`.
- If you see MongoDB duplicate-key errors (E11000), inspect indexes and existing documents before creating indexes.

## License
This project has no license specified.
# SOCIAL-MEDIA-