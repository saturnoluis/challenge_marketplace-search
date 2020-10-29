const { get } = require('lodash');

const AUTHOR_NAME = "Luis";
const AUTHOR_LASTNAME = "Saturno";
const ITEMS_RESULTS_LIMIT = 4;

function resultToItem(result) {
  return {
    id: result.id,
    title: result.title,
    price: {
      currency: result.currency_id,
      amount: result.price,
      decimals: 0
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
      name: AUTHOR_NAME,
      lastname: AUTHOR_LASTNAME
    },
    categories: getCategoriesFromFilters(data.filters),
    items: data.results.slice(0, ITEMS_RESULTS_LIMIT).map(resultToItem)
  };

  return formatted;
}

module.exports = { searchResponseFormatter };