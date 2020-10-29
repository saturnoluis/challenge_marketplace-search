const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const { searchResponseFormatter } = require('./formatters');

function main() {
  const app = express();
  const port = 4000;
  
  app.use(cors());
  
  app.get('/api', (req, res) => {
    res.send('Hello! This is the API');
  });
  
  app.get('/api/items', (req, res) => {
    const apiURL = `https://api.mercadolibre.com/sites/MLA/search?`;
    const searchQuery = req.query["q"];
    const fetchURL = apiURL + new URLSearchParams({ q: searchQuery });
    
    fetch(fetchURL)
      .then(fetchResponse => fetchResponse.json())
      .then(data => {
        const formattedData = searchResponseFormatter(data);
        res.send(formattedData);
      });
  });
  
  app.listen(port, () => {
    console.log(`Search API running on http://localhost:${port}`)
  });
}

main();