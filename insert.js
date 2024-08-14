// insert.js
const { Client } = require('@opensearch-project/opensearch');

// Initialize the OpenSearch client
const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: 'your-username',
    password: 'your-password'
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

// Function to insert data into OpenSearch
async function insertData() {
  for (const item of data) {
    try {
      const response = await client.index({
        index: 'your-index-name',  // Replace with your index name
        id: item.id.toString(),
        body: item
      });
      console.log(`Inserted document ID: ${item.id}`, response);
    } catch (error) {
      console.error(`Error inserting document ID: ${item.id}`, error);
    }
  }
}

// Execute the insert function
insertData();
