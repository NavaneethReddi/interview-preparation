
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Prefer MONGO_URI from env, fallback to previous hardcoded URI for convenience
const uri = 'mongodb+srv://reddynavaneeth6_db_user:DfCWqBNnxkQL8r7M@questionandanswers.kyneui4.mongodb.net/?appName=QuestionandAnswers';

// Create a MongoClient with Stable API options
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get('/', (req, res) => res.send('Hello World from Express!'));

// GET /api/users - return all users from the sample_mflix.users collection
app.get('/api/users', async (req, res) => {
  try {
    const database = client.db('InterviewQuestions');
            const users = database.collection('ListOfInterviewQuestions');
            const allUsers = await users.find({}).toArray();
                console.log("All Users:", allUsers);

    return res.json({ count: allUsers.length, users: allUsers });
  } catch (err) {
    console.error('Error fetching users:', err);
    return res.status(500).json({ error: 'Failed to fetch users' });
  }
});

async function startServer() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('MongoDB connected successfully');

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message || error);
    process.exit(1);
  }
}

process.on('SIGINT', async () => {
  try {
    await client.close();
    console.log('MongoDB connection closed');
  } finally {
    process.exit(0);
  }
});

startServer();
