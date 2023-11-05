const MongoClient = require('mongodb').MongoClient;
const axios = require('axios');

// MongoDB connection settings
const mongodbUri = 'URL';
const collectionName = 'Managers';

// Webhook.site endpoint
const webhookUrl = 'https://webhook.site/cd53e4da-a045-4fa2-9b17-a050dd0bcefc'
// Connect to MongoDB and fetch data
async function fetchDataAndSendToWebhook() {
  try {
    const client = await MongoClient.connect(mongodbUri, { useUnifiedTopology: true });
    const db = client.db();
    const collection = db.collection(collectionName);

    const data = await collection.findOne(); // You can customize the query

    if (data) {
      const response = await axios.post(webhookUrl, data);
      console.log('Data sent to Webhook.site with status code:', response.status);
    } else {
      console.log('No data found in MongoDB.');
    }

    client.close();
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchDataAndSendToWebhook();
