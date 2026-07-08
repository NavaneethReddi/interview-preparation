# Node.js + MongoDB API

A production-ready Node.js server with Express and MongoDB integration.

## Setup

1. **Copy environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start MongoDB** (local or cloud):
   ```bash
   # Local MongoDB
   mongod
   
   # Or use MongoDB Atlas (update MONGODB_URI in .env)
   ```

4. **Run the server:**
   ```bash
   npm start       # Production
   npm run dev     # Development with auto-reload
   ```

Server runs on `http://localhost:5000` by default.

## Project Structure

```
server/
├── src/
│   ├── models/        # Mongoose schemas (User.js)
│   ├── routes/        # API endpoints (users.js)
│   ├── config.js      # Configuration (env vars)
│   ├── db.js          # MongoDB connection
│   └── index.js       # Express server entry point
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## API Endpoints

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/interview-prep |
| `NODE_ENV` | Environment (development/production) | development |

## Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **dotenv** - Environment variables
- **cors** - Cross-origin requests
- **nodemon** - Auto-reload (dev)

## Error Handling

All endpoints include:
- Input validation
- Error responses with status codes
- Consistent error format: `{ error: "message" }`

## License

MIT
