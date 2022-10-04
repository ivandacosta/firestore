import React, { useState, useContext } from "react";

import ItemCart from "../components/ItemCart/ItemCart";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, SetCart] = useState([]);

  const clearCart = () => {
    SetCart([]);
  };

  const addProduct = (item, newQuantity) => {
    const newCart = cart.filter((prod) => prod.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity });
    SetCart(newCart);
  };

  console.log(cart);

  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  };

  const removeProduct = (id) => {
    SetCart(cart.filter((product) => product.id !== id));
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  const productosCarrito = () =>
    cart.map((product) => <ItemCart key={product.id} product={product} />);

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        productosCarrito,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
