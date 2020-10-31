const formatter = require('../formatters');

function getSearchResults(searchQuery) {
  return new Promise((resolve, reject) => {
    const urlParams = new URLSearchParams({ q: searchQuery });
    const fetchURL = `${global.config.api.searchUrl}?${urlParams}`;
    
    global.fetch(fetchURL)
      .then(fetchResponse => fetchResponse.json())
      .then(data => {
        const formattedData = formatter.searchResponse(data);
        resolve(formattedData);
      })
      .catch(error => reject(error));
  });
}

module.exports = getSearchResults;

