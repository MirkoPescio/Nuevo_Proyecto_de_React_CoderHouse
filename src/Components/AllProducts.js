import React, { useState, useEffect } from "react";
import "./css/ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, query, collection, where } from 'firebase/firestore';
import appFirebase from '../firebaseConfig';

const store = getFirestore(appFirebase);

const AllItemsList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const {categoria} = useParams();

  useEffect(() => {
      setTimeout(() => {
        if (categoria !== undefined) {
          const filtrado = getDocs(query(collection(store, "productos_todos"), where("categoria","==", categoria)));
          filtrado
          .then((resp) => {
            setProducts(resp.docs.map(doc => ({...doc.data()})))
          })
          .catch((err) => {
            console.log(err)
            setError(true);
          })
          .finally(() => {
            setLoading(false);
          })
        }
        else {
          const documents = getDocs(collection(store, "productos_todos"));
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
        }
      }, 2000);
  }, [categoria]);

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

export default AllItemsList;