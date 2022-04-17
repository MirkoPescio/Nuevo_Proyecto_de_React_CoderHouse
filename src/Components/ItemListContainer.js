import React, { useState, useEffect } from "react";
import "./css/ItemListContainer.css";
import ItemList from "./ItemList";
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import appFirebase from '../firebaseConfig';

const storeIndex = getFirestore(appFirebase);

const ItemsList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
      setTimeout(() => {
        const documents = getDocs(collection(storeIndex, "productos_index"));
          documents
          .then((resp) => {
            setProducts(resp.docs.map(doc => ({...doc.data()})))
          })
          .catch((err) => {
            setError(true)
          })
          .finally(() => {
            setLoading(false)
          });
      }, 2000);
    });

  return (
    <>
      {loading ? (
        <div className="loading-div">
          <img src={require("./images/loading.gif")} alt="cargando-gif" />
        </div>
      ) : null}
      {error ? <h2>Error al cargar la página, intente recargar...</h2> : null}
      {ItemList ? <ItemList products={products} /> : null}
    </>
  );
};

export default ItemsList;
