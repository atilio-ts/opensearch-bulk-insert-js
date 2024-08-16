const { Client } = require('@opensearch-project/opensearch');

// TODO: Add your db parameters
const client = new Client({
  node: 'your-url',
  auth: {
    username: 'username',
    password: 'password'
  },
  ssl: {
    rejectUnauthorized: false
  },
  requestTimeout: 3000
});

// TODO: Add your data
const data = [
    {},{},{}
]

async function insertData() {
  for (const item of data) {
    try {
      const response = await client.index({
        index: 'index-name',  // TODO: Replace with your index name
        body: item
      });
      console.log(`Inserted document.`, response);
    } catch (error) {
      console.error(`Error inserting document.`, error);
    }
  }
}

insertData();
