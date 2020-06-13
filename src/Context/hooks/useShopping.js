import { useState, useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import ProductRepository from '~/repositories/ProductRepository';

export default function useShopping() {
  const [products, setProducts] = useState([]);
  const [productsForRemoving, setProductsForRemoving] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
    setLoading(false);
  }, []);

  async function removeProductBulk(products = []) {
    try {
      if (products.length > 0) {
        setLoading(true);

        products.forEach(
          async (product) =>
            await ProductRepository.deleteById(product.id, 'Product'),
        );

        loadProducts();
        setLoading(false);
      }

      setProductsForRemoving([]);
    } catch (error) {
      console.tron.warn(error);
    }
  }

  async function removeProduct({ id }) {
    setLoading(true);

    await ProductRepository.deleteById(id, 'Product');

    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex >= 0) {
      const newArr = [...products];
      newArr.splice(productIndex, 1);

      setProducts(newArr);
    }

    setLoading(false);
  }

  async function registerProduct(product) {
    try {
      setLoading(true);
      if (product.title === '') {
        setLoading(false);
        return ToastAndroid.show(
          'Preencha todos os campos para adicionar o produto',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      }

      product.price = product.price.replace('R$', '');
      product.price = Number(product.price.replace(',', '.'));
      product.quantity = Number(product.quantity);
      product.id = await ProductRepository.generateId(product, 'Product');

      await ProductRepository.create(product, 'Product');

      const createdProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
        subTotal: product.price * product.quantity,
      };

      setProducts([...products, createdProduct]);

      setLoading(false);
      ToastAndroid.show(
        `[${product.title}] adicionado no carrinho :)`,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } catch (error) {
      setLoading(false);
      ToastAndroid.show(error.message, ToastAndroid.BOTTOM, ToastAndroid.LONG);
    }
  }

  async function updateProduct(product, navigation) {
    if (product.title === '') {
      return ToastAndroid.show(
        'Preencha todos os campos para adicionar o produto',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }

    product.price = product.price.replace('R$', '');
    product.price = Number(product.price.replace(',', '.'));
    product.quantity = Number(product.quantity);

    await ProductRepository.update(product, 'Product');

    loadProducts();
    navigation.goBack();
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

      await ProductRepository.update(updatedProduct, 'Product');

      setProducts((state) => {
        state[productIndex].quantity = updatedProduct.quantity;

        return state;
      });

      loadProducts();
    }
  }

  async function loadProducts() {
    setLoading(true);

    const data = await ProductRepository.fetch();

    const products = data.map((product) => ({
      id: product.id,
      title: product.title,
      quantity: product.quantity,
      price: product.price,
      subTotal: Number(product.quantity * product.price),
    }));

    setProducts(products);
    setLoading(false);
  }

  return {
    loading,
    products,
    productsForRemoving,
    setProductsForRemoving,
    removeProduct,
    removeProductBulk,
    registerProduct,
    updateQuantity,
    updateProduct,
  };
}
