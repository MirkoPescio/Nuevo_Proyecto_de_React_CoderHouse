import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import swal from "sweetalert";
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import appFirebase from "../firebaseConfig";
import "./css/CartProducts.css";

const store = getFirestore(appFirebase);

const Cart = ({correo}) => {

  const { clear, cart, removeItem } = useContext(CartContext);

  const nameClient = document.getElementById("cliente");

  const nameRegExp = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const formik = useFormik({
    initialValues: { cliente: '', telefono: ''},
    validationSchema: Yup.object({
      cliente: Yup.string()
        .required("El campo Cliente es obligatorio")
        .max(20, "El campo Cliente admite un máximo de 20 caractéres")
        .min(6, "El campo Cliente debe tener un mínimo de 6 caractéres")
        .matches(nameRegExp, 'Ingrese un nombre válido'),
      telefono: Yup.string()
        .required('El campo Teléfono es obligatorio')
        .matches(phoneRegExp, 'El dato ingresado no corresponde a un número de teléfono'),
    }),
  })

  let total = () => {
    let totalAcumulado = 0;
    for (let i = 0; i < cart.length; i++) {
      let n = Number(cart[i].product.precio * cart[i].count);
      totalAcumulado += n;
    }
    return totalAcumulado;
  };

  async function buy() {
    const productos = cart.map((element) => {
      let nuevoElemento = {
        title: element.product.nombre,
        picture_url: element.product.imagen,
        category_id: element.product.id,
        quantity: Number(element.count),
        currency_id: "ARS",
        unit_price: Number(element.product.precio),
      };
      return nuevoElemento;
    });
    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer TEST-2004336226964797-011621-8af45d2f304340f63094770a87458a35-178503961",
        },
        body: JSON.stringify({
          items: productos,
        }),
      }
    );
    const data = await response.json();
    window.open(data.init_point, "_blank");
}

  const checkBuy = () => {
    if (cart.length === 0 || formik.errors.cliente || formik.errors.telefono || nameClient.value === "") {
      swal({
        title: "¡Error!",
        text: `Agregue algún producto y/o revise su formulario`,
        icon: "error",
      });
    }
    else {
      const orden = {
        buyer : {
          nombre: document.getElementById("cliente").value,
          telefono: document.getElementById("telefono").value,
          email: document.getElementById("correo").innerHTML
        },
        items: cart,
        date: serverTimestamp(),
        total: total()
      }
      const ordenesCollection = collection(store, "ordenes")
      addDoc(ordenesCollection, orden)
      buy()
      clear()
    }
  }

  return (
      <div className="container container-cart">
        <div className="row mt-3">
          <div className="col compraFormulario">
            <h2 className="d-flex justify-content-center mb-3">
              Realizar Compra
            </h2>
            <form id="procesar-pago" onSubmit={formik.handleSubmit}>
              <div className="form-group row">
                <label
                  htmlFor="cliente"
                  className="col-12 col-md-2 col-form-label h2"
                >
                  Cliente :
                </label>
                <div className="col-12 col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="cliente"
                    name="cliente"
                    placeholder="Ingrese su nombre"
                    required
                    onChange={formik.handleChange} value={formik.values.cliente}
                  />
                  {formik.errors.cliente && <i className="formError">{formik.errors.cliente}</i>}
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="cliente"
                  className="col-12 col-md-2 col-form-label h2"
                >
                  Teléfono :
                </label>
                <div className="col-12 col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    placeholder="Ingresa su número de teléfono"
                    required
                    onChange={formik.handleChange} value={formik.values.telefono}
                  />
                  {formik.errors.telefono && <i className="formError">{formik.errors.telefono}</i>}
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="col-12 col-md-2 col-form-label h2"
                >
                  Correo :
                </label>
                <div className="col-12 col-md-10 correoActual">
                  <span>
                      <strong name="correo" id="correo">{correo}</strong>
                  </span>
                </div>
              </div>

              <div id="carrito" className="table-responsive">
                <table className="table compraInfoProductos" id="lista-compra">
                  <thead>
                    <tr>
                      <th scope="col">Imagen</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Sub Total</th>
                      <th scope="col">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.product.id} className="carrito-productos">
                        <td className="imagen-carrito">
                          <img
                            src={require(`${item.product.imagen}`)}
                            alt="#"
                          />
                        </td>
                        <td className="nombre-carrito">{item.product.nombre}</td>
                        <td className="precio-carrito"><span>$</span>{item.product.precio}</td>
                        <td className="cantidad-carrito">{item.count}</td>
                        <td id="subtotales">
                          <span>$</span> {item.product.precio * item.count}
                        </td>
                        <td>
                          <button
                            type="button"
                            className="fas fa-times-circle borrar-producto"
                            data-id={item.product.dataID}
                            onClick={() => removeItem(item.product)}
                          ></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan="4" scope="col" className="text-right">
                        TOTAL :
                      </th>
                      <th scope="col">
                        <p id="total">
                          <span>$</span>
                          {total()}
                        </p>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="row justify-content-between botonesCompra">
                <div>
                  <Link
                    to="/"
                    className="btn btn-secondary btn-in-cart"
                    id="seguir-comprando"
                  >
                    Página principal
                  </Link>
                </div>
                <div>
                  <button
                    className="btn btn-vaciar-carrito btn-in-cart"
                    type="button"
                    onClick={clear}
                  >
                    Vaciar Carrito
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-error btn-success btn-in-cart"
                    id="procesar-compra"
                    onClick={checkBuy}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Cart;
