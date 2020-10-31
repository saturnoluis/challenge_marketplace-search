function itemDetailsFormatter(info, description) {
  const formatted = {
    author: globalThis.config.author,
    item: {
      id: info.id,
      title: info.title,
      price: {
        currency: info.currency_id,
        amount: info.price,
        decimals: global.config.options.decimals
      },
      picture: info.pictures[0],
      condition: info.condition,
      free_shipping: info.shipping.free_shipping,
      sold_quantity: info.sold_quantity,
      description
    }
  }

  return formatted;
}

module.exports = itemDetailsFormatter;