import Contador from "./Contador";

const ItemDetail = ({ item }) => {
  const { nombre, precio, imagen, categoria, stock, detalles, id } = item;

  return (
    <>
      <div className="details-container">
        <div className="details" id="item-details" key={item.id}>
          <div className="big-img">
            <img className="details-image" src={require(`${imagen}`)} alt="#" />
          </div>

          <div className="box" id="box-details">
            <div className="row">
              <h2 className="details-name">{nombre}</h2>
              <span className="details-price">Precio por unidad $ {precio}</span>
              <p className="details-stock">Stock: {stock} unidad/es</p>
            </div>

            <h4 className="details-category">Categoría: {categoria}</h4>
            <hr />

            <div>
              <h5 className="details-h5">Especificaciones</h5>
              <p className="details-info">{detalles.pantalla}</p>
              <p className="details-info">{detalles.procesador}</p>
              <p className="details-info">{detalles.ram}</p>
              <p className="details-info">{detalles.almacenamiento}</p>
              <p className="details-info">{detalles.sistema}</p>
              <p className="details-info">{detalles.dimensiones}</p>
              <p className="details-info">{detalles.resumen}</p>
            </div>

            <Contador nombre={nombre} id={id} stock={stock}
          categoria={categoria} imagen={imagen} precio={precio}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
