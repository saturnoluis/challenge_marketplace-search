const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const { searchResponseFormatter } = require('./formatters');

const ITEMS_API_URL = 'https://api.mercadolibre.com/items';
const SEARCH_API_URL = 'https://api.mercadolibre.com/sites/MLA/search';

function main() {
  const app = express();
  const port = 4000;
  
  app.use(cors());
  
  app.get('/api', (req, res) => {
    res.send('Hello! This is the API');
  });

  app.get('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const urlParams = new URLSearchParams({ ids: id });

    const fetchURL = `${ITEMS_API_URL}?${urlParams}`;
    fetch(fetchURL)
      .then(fetchResponse => fetchResponse.json())
      .then(data => {
        res.send(data);
      });

  });
  
  app.get('/api/items', (req, res) => {
    const searchQuery = req.query["q"];
    const urlParams = new URLSearchParams({ q: searchQuery });
    
    const fetchURL = `${SEARCH_API_URL}?${urlParams}`;
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