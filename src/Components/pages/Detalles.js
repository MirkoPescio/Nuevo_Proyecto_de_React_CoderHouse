import React from "react";
import "../../App.css";
import ItemDetailContainer from "../ItemDetailContainer";
import data from '../json/Productos_Todos';

function Detalles() {
    return (
      <ItemDetailContainer productList={data}/>
    );
  }
  
  export default Detalles;