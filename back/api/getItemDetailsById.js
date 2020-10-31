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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ foo: 'BAAAAAAAAAR AFTER 5 SECS' });
    }, 5000);
  });
}

async function getItemDetailsById(id) {
  const info = await getItemInfo(id);
  const description = {};

  if(info.descriptions.length > 0) {
    const itemDescription = await getItemDescription(id);

    Object.assign(description, itemDescription);
  } 
  
  return itemDetailsFormatter(info, description);
}

module.exports = getItemDetailsById;