import React, { createContext } from 'react';
import useShopping from './hooks/useShopping';

const Context = createContext();

function ShoppingProvider({ children }) {
  const {
    loading,
    products,
    removeProduct,
    registerProduct,
    updateQuantity,
    updateProduct,
  } = useShopping();

  return (
    <Context.Provider
      value={{
        products,
        loading,
        removeProduct,
        registerProduct,
        updateQuantity,
        updateProduct,
      }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ShoppingProvider };
