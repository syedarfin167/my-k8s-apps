const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from api-server!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(8080, '0.0.0.0', () => {
  console.log('api-server listening on port 8080')
});
