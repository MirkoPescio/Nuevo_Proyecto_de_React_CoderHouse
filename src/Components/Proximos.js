import React, { useEffect, useState } from 'react';
import { getFirestore, getDocs, query, collection } from 'firebase/firestore';
import appFirebase from '../firebaseConfig';
import "./css/Proximos.css";

const store = getFirestore(appFirebase);

const Proximos = () => {

  const [nuevos, setNuevos] = useState([])

  useEffect(() => {
    const proximosProductos = getDocs(query(collection(store, "Proximos_Productos")))
    proximosProductos
    .then((resp) => {
      setNuevos(resp.docs.map(doc => ({...doc.data()})))
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
  
  return (
      <div className="contenedorGaleria">
        <div className="proximosTituloContenedor">
          <h3 className="proximosTitulo">Próximos productos</h3>
        </div>
        <div className="contenedorImagenesGaleria">
          {nuevos.map((p) => (
            <div className="contenedorImagenesGaleria__imagen" key={p.id}>
              <img src={require(`${p.imagen}`)} alt={p.nombre} />
              <div className="contenedorImagenesGaleria__imagen__overlay">
                <h2>{p.nombre}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Proximos;