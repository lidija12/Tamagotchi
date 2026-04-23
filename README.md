# Tamagotchi (React + REST API + MongoDB)

This version removes the Base44 dependency and runs locally with your own stack:
- Frontend: React + Vite
- Backend: Express REST API
- Database: MongoDB
- Containers: Docker Compose

## Quick start with Docker

```bash
docker compose up --build
```

Then open:
- Frontend: http://localhost:5173
- Backend health: http://localhost:3001/api/health

## Local start without Docker

### 1) Start MongoDB
Use Docker only for MongoDB if you want:

```bash
docker run -d --name tamagotchi-mongo -p 27017:27017 mongo:7
```

### 2) Start backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### 3) Start frontend

```bash
cp .env.example .env
npm install
npm run dev
```

## Important changes compared with the Base44 export

- Removed Base44 auth and SDK usage.
- Added your own REST API under `/api`.
- Added MongoDB models for `Pet` and `PetAction`.
- Fixed `postcss.confiq.js` typo to `postcss.config.js`.
- Replaced Base44 Vite plugin with normal Vite React config.
- Added Docker support for frontend, backend, and database.
