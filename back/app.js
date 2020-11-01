const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const yamlConfig = require('node-yaml-config');
const api = require('./api');
 
function appStart() {
  if(!global.config) { 
    global.config = yamlConfig.load('./config.yml');
  }
  if(!global.fetch) {
    global.fetch = fetch;
  }

  const app = express();
  const port = 4000;
  
  app.use(cors());

  app.get('/api/items/:id', async (req, res) => {
    const { id } = req.params;
    const itemDetails = await api.getItemDetailsById(id);

    res.send(itemDetails);
  });
  
  app.get('/api/items', async (req, res) => {
    const { q: searchQuery } = req.query;
    const searchResults = await api.getSearchResults(searchQuery);
    
    res.send(searchResults);
  });
  
  app.listen(port, () => {
    console.log(`Search API running on http://localhost:${port}`)
  });
}

appStart();