const get = require('lodash/get');
const { itemDetailsFormatter } = require('../formatters');

function getItemInfo(id) {
  return new Promise((resolve, reject) => {
    const urlParams = new URLSearchParams({ ids: id });
    const fetchURL = `${global.config.api.itemsUrl}?${urlParams}`;
    
    global.fetch(fetchURL)
      .then(fetchResponse => fetchResponse.json())
      .then(data => {
        resolve(get(data, '[0].body', {}));
      })
      .catch(error => reject(error));
  });
}

function getItemDescription(id) {
  return new Promise((resolve) => {
    const fetchURL = `${global.config.api.itemsUrl}/${id}/description`;
    
    global.fetch(fetchURL)
      .then(fetchResponse => fetchResponse.json())
      .then(data => {
        resolve(get(data, 'plain_text', ''));
      })
      .catch(e => resolve(''));
  });
}

async function getItemDetailsById(id) {
  const info = await getItemInfo(id);
  let description = '';

  if(info.descriptions.length > 0) {
    description = await getItemDescription(id);
  } 
  
  return itemDetailsFormatter(info, description);
}

module.exports = getItemDetailsById;