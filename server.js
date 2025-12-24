/* eslint-disable no-console */
// Simple Express server + Elasticsearch proxy to avoid CORS in the browser
const path = require('path');
const express = require('express');

// Native fetch is available in Node 18+
const fetch = global.fetch || require('node-fetch');

const app = express();
const PORT = process.env.PORT || 8080;

// Elasticsearch credentials - MUST be set via environment variables
const ES_BASE_URL = process.env.ES_URL || process.env.ELASTIC_BASE || '';
const ES_INDEX = process.env.ELASTIC_INDEX || 'products-v2';
const ES_API_KEY = process.env.ES_API_KEY || process.env.ELASTIC_API_KEY || '';

// Validate required environment variables
if (!ES_BASE_URL || !ES_API_KEY) {
  console.error('❌ Error: Missing required environment variables!');
  console.error('Please set ES_URL (or ELASTIC_BASE) and ES_API_KEY (or ELASTIC_API_KEY)');
  console.error('Example: ES_URL=https://your-cluster.es.amazonaws.com ES_API_KEY=your-key npm run dev');
  process.exit(1);
}

// Basic CORS allowance for dev; not necessary when same-origin, but kept safe
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  return next();
});

app.use(express.json({ limit: '1mb' }));

// Proxy endpoint to Elasticsearch
app.post('/api/search', async (req, res) => {
  try {
    const response = await fetch(`${ES_BASE_URL}/${ES_INDEX}/_search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `ApiKey ${ES_API_KEY}`
      },
      body: JSON.stringify(req.body || {})
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    console.error('Elasticsearch proxy error:', err);
    return res.status(500).json({ error: 'Proxy error', detail: err.message });
  }
});

// Serve static files for the app
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Flean dev server running at http://localhost:${PORT}`);
  console.log('Proxy endpoint: POST /api/search');
});

