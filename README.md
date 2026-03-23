# Trainee Full-Stack Project

This workspace contains:
- `trainee_backend`: Node.js + Express + MySQL REST API

## Folder Structure

```text
trainee_backend/
  src/
    controllers/
    routes/
    models/
    config/
    services/
  .env
  .env.example
  .gitignore
  package.json
  server.js


## MySQL Table SQL

```sql
CREATE DATABASE IF NOT EXISTS trainee_db;
USE trainee_db;

CREATE TABLE IF NOT EXISTS items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Backend Environment Variables

Create `trainee_backend/.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=trainee_db
PORT=5000
```

## Frontend Environment Variables

Optional `trainee_frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## Run On Ubuntu

### Backend

```bash
cd trainee_backend
npm install
npm start
```

API endpoints:
- `GET /api/items`
- `POST /api/items`
- `PUT /api/items/:id`

### Frontend

```bash
cd trainee_frontend
npm install
npm run dev
```

The Vite dev server runs at `http://localhost:5173` by default.

## Notes For Later Docker/K8s

- Config is externalized through environment variables.
- Backend and frontend are separate services with independent dependencies.
- Source is organized in modular layers (route -> controller -> service -> model).
- `.env` and build artifacts are ignored via `.gitignore`.
