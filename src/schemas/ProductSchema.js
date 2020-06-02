export default class ProductSchema {
  static schema = {
    name: 'Product',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      title: 'string',
      quantity: 'int',
      price: 'double',
    },
  };
}
