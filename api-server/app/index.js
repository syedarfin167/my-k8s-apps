const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from api-server v2!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api-server' });
});

app.listen(port, () => {
  console.log(`api-server listening on port ${port}`);
});
