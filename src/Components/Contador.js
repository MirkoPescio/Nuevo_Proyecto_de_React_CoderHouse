import { useState, useContext } from "react";
import { CartContext } from '../Context/CartContext';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const Contador = (props) => {

  let navigate = useNavigate();

  const { addItem, cart } = useContext(CartContext);

  const productCart = cart.find(p => p.product.id === props.id);
  const stockAvailable = props.stock - (productCart?.count || 0);

  let [counter, setCounter] = useState(props.stock > 0 && stockAvailable > 0 ? 1 : 0);
  const [background, setBackground] = useState(counter > 0 ? "green" : "crimson");

  const getCount = count => {
    if (props.stock > 0) {
      setCounter(0);
      setBackground("crimson")
      return addItem(props, count);
    }
  }

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const increment = () => {
    if (counter < stockAvailable) {
      setBackground("green");
      setCounter(counter + 1);
    }
    if (counter === stockAvailable) {
      swal({
        title: "Info",
        text: `El límite de stock disponible del producto ${props.nombre}, es de ${counter} unidad/unidades`,
        icon: "info"
      });
    }
  }

  let onAdd = () => {
    if (props.stock > 0 && counter > 0) {
      let itemDetalles = document.getElementById("item-details");
      new Promise((result, reject) => {
        if (itemDetalles) {
          result(
            itemDetalles.innerHTML += `<h6 id="item-result">Se añadió/añadieron al carrito ${counter} unidad/unidades del producto ${props.nombre}</h6>`
          );
        }
      }).then(() => {
        document.getElementById("box-details").innerHTML += `<button id="to-cart">Terminar mi compra</button>`;
        document.getElementById("box-details").innerHTML += `<button id="to-mainPage">Volver al catálogo</button>`;
        document.getElementById("item-counter").style.display = "none";
      })
      .finally(() => {
        document.getElementById("to-cart").addEventListener("click", () => {navigate("/carrito")});
        document.getElementById("to-mainPage").addEventListener("click", () => {navigate("/")});
      });
      swal({
        title: "Buena elección",
        text: `Se añadió/añadieron al carrito ${counter} unidad/unidades del producto ${props.nombre}`,
        icon: "success",
        button: "Ok",
      });
    } else {
      swal({
        title: "Error",
        text: `El producto ${props.nombre} está fuera de stock`,
        icon: "error"
      });
    }
  };

  return (
      <div className="input-group" id="item-counter">
        <button
          type="button"
          className="input-group-text restar-stock"
          onClick={decrement}
        >
          -
        </button>
        <h4 className="form-control valor-contador text-center" id="contador">{counter}</h4>
        <button
          type="button"
          className="input-group-text sumar-stock"
          onClick={increment}
        >
          +
        </button>

        <button className="añadir-al-carrito button-card" style={{background: background}} onClick={() => {getCount(counter); onAdd();}}>
          Añadir al carrito
        </button>
      </div>
  );
}

export default Contador;