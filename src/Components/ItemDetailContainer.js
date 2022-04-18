import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import "./css/ItemDetailContainer.css";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import appFirebase from '../firebaseConfig';

const details = getFirestore(appFirebase)

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
      setTimeout(() => {
        const docRef = doc(details, "productos_todos", id)
        getDoc(docRef)
        .then((res) => {
          setProduct(res.data())
        })
        .catch((rej) => {
          console.log(rej)
        })
        .finally(() => {
          setLoading(false)
        })
      }, 2000)
  }, [id]);

  return (
    <div className="content-wrapper">
      {loading ? (
        <div className="loading-div">
          <img src={require("./images/loading.gif")} alt="cargando-gif" />
        </div>
      ) : (
        <ItemDetail item={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer