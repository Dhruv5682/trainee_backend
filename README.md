# Trainee Backend

Node.js + Express REST API for item management, connected to MySQL.

## Project Structure

```text
trainee_backend/
  src/
    config/
      db.js
    controllers/
      itemController.js
    models/
      itemModel.js
    routes/
      itemRoutes.js
    services/
      itemService.js
  package.json
  server.js
```

## Database Setup

Run this SQL in MySQL:

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

## Environment Variables

Create `trainee_backend/.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=trainee_db
PORT=5000
```

## Run Backend

```bash
cd trainee_backend
npm install
npm start
```

For development with auto-reload:

```bash
npm run dev
```

## API Endpoints

- `GET /api/items`
- `POST /api/items`
- `PUT /api/items/:id`

## Screenshots

Add backend screenshots here:

- API testing - Get Items
- API testing - Create Item
- API testing - Update Item

Example path format:

`screenshots/backend/get-items.png`
