function getItemDetailsById(id) {
  return new Promise((resolve, reject) => {
    const urlParams = new URLSearchParams({ ids: id });
    const fetchURL = `${global.config.api.itemsUrl}?${urlParams}`;
    
    global.fetch(fetchURL)
      .then(fetchResponse => fetchResponse.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => reject(error));
  });
}

module.exports = getItemDetailsById;