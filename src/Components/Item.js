import Contador from "./Contador";
import { Link } from "react-router-dom";

const ProductCards = (props) => {

  return (
      <div
        className="productos__contenido"
        key={props.id}
        categoria={`${props.categoria}`}
      >
        <img
          className="productos__imagen"
          src={require(`${props.imagen}`)}
          alt="Iphone"
        />
        <h3 className="productos__titulo">{`${props.nombre}`}</h3>
        <h6 className="productos__precio">
          <span>$</span>
          {props.precio}
          <p>Stock: {props.stock}</p>
        </h6>
        <Link to={`/detalles/${props.id}`}>
          <button className="boton__detalles">Ver detalle</button>
        </Link>
        <Contador stock={props.stock} nombre={props.nombre} id={props.id}
          categoria={props.categoria} imagen={props.imagen} precio={props.precio} buttonAddCart={props.nombre} />
      </div>
  );
};

export default ProductCards;
