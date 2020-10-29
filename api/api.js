const express = require('express');
const cors = require('cors');

function startAPI() {
  const app = express();
  const port = 4000;
  
  app.use(cors());
  
  app.get('/api', (req, res) => {
    res.send('Hello World!');
  });
  
  app.get('/api/items', (req, res) => {
    console.log(req.originalUrl);
  
    setTimeout(() => {
      res.send({ data: 'foo bar' });
    }, 2000);
  });
  
  app.listen(port, () => {
    console.log(`Search API running on http://localhost:${port}`)
  });
}

startAPI();