const { Client } = require('@opensearch-project/opensearch');

//database params
const client = new Client({
  node: 'your-url',
  auth: {
    username: 'admin',
    password: 'admin'
  },
  ssl: {
    rejectUnauthorized: false      // Set to true if using a trusted certificate
  }
});

// JSON array to be inserted
const data = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 }
];

async function insertData() {
  for (const item of data) {
    try {
      const response = await client.index({
        index: 'test-table',  // Replace with your index-table name
        id: item.id.toString(),
        body: item
      });
      console.log(`Inserted document ID: ${item.id}`, response);
    } catch (error) {
      console.error(`Error inserting document ID: ${item.id}`, error);
    }
  }
}

insertData();
