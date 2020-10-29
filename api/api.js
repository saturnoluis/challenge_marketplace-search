const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

function startAPI() {
  const app = express();
  const port = 4000;
  
  app.use(cors());
  
  app.get('/api', (req, res) => {
    res.send('Hello World!');
  });
  
  app.get('/api/items', (req, res) => {
    const apiURL = `https://api.mercadolibre.com/sites/MLA/search?`;
    const searchQuery = req.query["q"];
    const fetchURL = apiURL + new URLSearchParams({ q: searchQuery });
    
    fetch(fetchURL).then(res => res.json()).then(data => console.log(JSON.stringify(data)));
  
    setTimeout(() => {
      res.send([]);
    }, 2000);
  });
  
  app.listen(port, () => {
    console.log(`Search API running on http://localhost:${port}`)
  });
}

startAPI();