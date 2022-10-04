import React, { useEffect, useState } from "react";
import products from "../../components/products/ItemProducts";
import { useParams } from "react-router-dom";

import {getFirestore, doc , getDoc} from "firebase/firestore"

//components
// import ItemDetail from "../../components/ItemDetail/ItemDetail";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetails = () => {
  let { id } = useParams();

  const [Products, SetProducts] = useState([]);

  useEffect(() => {
    const querydb = getFirestore()
    const queryDoc = doc(querydb, "products", "vT8y8aNUX6Xx6GTAggj6")
    getDoc(queryDoc)
    .then(res => SetProducts({id: res.id, ...res.data()}))
  }, []);

  return (
    <div>
      <ItemDetail product={Products}/>
    </div>
  );
};

export default ItemDetails;
