import api from '~/services/api';

export default class ProductRepository {
  static async fetch() {
    try {
      const response = await api.get('/products');
      console.tron.log(response);
      return response.data;
    } catch (error) {}
  }
}
