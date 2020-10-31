const { get } = require('lodash');

function resultToItem(result) {
  return {
    id: result.id,
    title: result.title,
    price: {
      currency: result.currency_id,
      amount: result.price,
      decimals: global.config.options.decimals
    },
    picture: result.thumbnail,
    condition: result.condition,
    free_shipping: result.shipping.free_shipping
  }
}

function getCategoriesFromFilters(filters) {
  const categoryFilter = filters.find(filter => filter.id === 'category');

  return get(categoryFilter, 'values[0].path_from_root', []);
}

function searchResponseFormatter(data) {
  const formatted = {
    author: {
      name: global.config.author.firstName,
      lastname: global.config.author.lastName
    },
    categories: getCategoriesFromFilters(data.filters),
    items: data.results.slice(0, global.config.options.searchResultsLimit).map(resultToItem)
  };

  return formatted;
}

module.exports = searchResponseFormatter;