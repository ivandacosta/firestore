import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

import {getFirestore, collection, getDocs} from "firebase/firestore"

//style
import "./ItemDetailContainer.css";

//components
import products from "../products/ItemProducts";
import ItemDetail from "../ItemList/ItemList";

function ItemDetailContainer() {
  const [Products, SetProducts] = useState([]);
  const [Loading, SetLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      const querydb = getFirestore()
      SetLoading(false);
      const queryCollection = collection(querydb, "products")
      getDocs(queryCollection)
      .then(res => SetProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
      
    }, 3000);

  }, []);

  

  if (Loading) {
    return (
      <div className="CircularProgress">
        <CircularProgress />;
      </div>
    );
  } else {
  }

  return (
    <div className="ItemDetailContainer">
      {Products.map((product) => {
        return (
          <div className="ItemDetailContainer" key={product.id}>
            {/* <Link className="Link" to={`/detail/${product.id}`}> */}
            <ItemDetail product={product} />
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default ItemDetailContainer;
