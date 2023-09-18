const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [
    {
      username: 'aaranabdul',
      email: 'aaranabdul@gmail.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'ZennonZein',
      email: 'ZennonZein@gmail.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'shannonj',
      email: 'shannonj@gmail.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'brittanysmith',
      email: 'brittanysmith@gmail.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'ChrisJohnson',
      email: 'ChrisJohnson@gmail.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'Malloryg',
      email: 'Malloryg@gmail.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'Feliciahunt',
      email: 'Feliciahunt@gmail.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'natewest',
      email: 'natewest@gmail.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'westonpr',
      email: 'westonpr@gmail.com',
      thoughts: [],
      friends: [],
    },
    
  ];
  const thoughts = [
    {
      thoughtText: "video essay on the history of video games",
      username: 'westonpr',
      reactions: []
    },
    {
      thoughtText: "Hello worlds",
      username: 'Feliciahunt',
      reactions: []
    },
    {
      thoughtText: "iPhone review",
      username: 'ChrisJohnson',
      reactions: []
    },
    {
      thoughtText: "how-to video",
      username: 'natewest',
      reactions: []
    },
    {
      thoughtText: "Submission for startup pitch",
      username: 'natewest',
      reactions: []
    },
  ];

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
