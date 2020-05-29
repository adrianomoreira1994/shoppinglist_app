import { useState, useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import api from '~/services/api';

export default function useShopping() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function removeProduct(productId) {
    await api.delete(`/products/${productId}`);

    const productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex >= 0) {
      const newArr = [...products];
      newArr.splice(productIndex, 1);

      setProducts(newArr);
    }
  }

  async function registerProduct(product) {
    if (product.title === '') {
      return ToastAndroid.show(
        'Preencha todos os campos para adicionar o produto',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }

    product.price = product.price.replace('R$', '');
    product.price = Number(product.price.replace(',', '.'));

    const response = await api.post('/products', product);

    const createdProduct = {
      id: response.data.id,
      title: response.data.title,
      price: response.data.price,
      quantity: response.data.quantity,
      subTotal: response.data.price * response.data.quantity,
    };

    setProducts([...products, createdProduct]);
  }

  async function updateProduct(product) {
    if (product.title === '') {
      return ToastAndroid.show(
        'Preencha todos os campos para adicionar o produto',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }

    product.price = product.price.replace('R$', '');
    product.price = Number(product.price.replace(',', '.'));

    await api.put('/products/' + product.id, product);

    const updatedProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
      subTotal: product.price * product.quantity,
    };

    loadProducts();
  }

  async function updateQuantity(product, quantity) {
    if (quantity <= 0) {
      return ToastAndroid.show(
        'Não é possível diminuir mais :(',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }

    const productIndex = products.findIndex((p) => p.id === product.id);

    if (productIndex >= 0) {
      const updatedProduct = {
        id: products[productIndex].id,
        title: products[productIndex].title,
        price: products[productIndex].price,
        quantity,
      };

      await api.put(`/products/${product.id}`, updatedProduct);

      setProducts((state) => {
        state[productIndex].quantity = updatedProduct.quantity;

        return state;
      });

      loadProducts();
    }
  }

  async function loadProducts() {
    const response = await api.get('/products');

    const productsData = response.data.map((product) => ({
      ...product,
      price: product.price,
      subTotal: Number(product.quantity * product.price),
    }));

    setProducts(productsData);
  }

  useEffect(() => {
    loadProducts();
    setLoading(false);
  }, []);

  return {
    loading,
    products,
    removeProduct,
    registerProduct,
    updateQuantity,
    updateProduct,
  };
}
