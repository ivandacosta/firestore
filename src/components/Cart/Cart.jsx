import React from "react";
import { useCartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";

function Cart() {
  const { productosCarrito, cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return <div className="Cart">{productosCarrito()}</div>;
}

export default Cart;
