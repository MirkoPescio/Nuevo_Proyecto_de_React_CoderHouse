import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, count) => {
    let cartProduct = {product, count}
    let cartAux = [];
    if (isInCart(product)) {
      cartProduct = cart.find(item => item.product.id === product.id);
      cartProduct.count = cartProduct.count + count;
      cartAux = [...cart];
    } else {
      cartAux = [cartProduct, ...cart];
    }
    return setCart(cartAux);
  };

  const removeItem = (product) => {
    if (isInCart(product)) {
      const cartAux = cart.filter(item => item.product !== product);
      setCart(cartAux);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (product) => {
    return cart && cart.some(item => item.product.id === product.id);
  }

  useEffect(() => {
    if (cart.length === 0) {
      document.getElementById("cart-widget").style.visibility = "hidden";
    }
    if (cart.length >= 1) {
      document.getElementById("cart-widget").style.visibility = "visible";
    }
  })

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};