import Item from "./Item";

const ItemList = (props) => {
  return (
    <>
      <section>
        <div className="productos">
          {props.products.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                categoria={item.categoria}
                imagen={item.imagen}
                nombre={item.nombre}
                precio={item.precio}
                stock={item.stock}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ItemList;
