import React from "react";
import { Link } from "react-router-dom";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

//style
import "./Header.css";
//Components
import Nav from "../Navigation/Nav";

//importcartcontext
import { useCartContext } from "../../context/CartContext";

function Header({ product, quantity }) {
  const { totalProducts } = useCartContext();
  return (
    <header>
      <div className="Logo">
        <Link className="Link" to="/">
          <h2>GOU</h2>
        </Link>
      </div>

      <Nav />

      <div className="Cart">
        <p>
          <FontAwesomeIcon icon={faCartShopping} /> {totalProducts()}
        </p>
      </div>
    </header>
  );
}

export default Header;
