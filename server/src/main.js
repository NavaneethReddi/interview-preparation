
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri ="mongodb+srv://Vercel-Admin-atlas-gray-lamp:HvD60lJYiSdovo47@atlas-gray-lamp.7givkwr.mongodb.net/?retryWrites=true&w=majority"
 // const uri = "mongodb+srv://reddynavaneeth6_db_user:DfCWqBNnxkQL8r7M@questionandanswers.kyneui4.mongodb.net/?appName=QuestionandAnswers";
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const database = client.db('InterviewQuestions');
            const users = database.collection('ListOfInterviewQuestions');
            const allUsers = await users.find({}).toArray();
    console.log("All Users:", allUsers);
 

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

app.get('/api/users', async (req, res) => {
    try {
    await client.connect();

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
run().catch(console.dir);
