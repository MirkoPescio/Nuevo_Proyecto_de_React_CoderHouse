import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import appFirebase from "../firebaseConfig";
import "./css/Formulario.css";
import swal from "sweetalert";

const store = getFirestore(appFirebase);

function Formulario() {

  const nameRegExp = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const formik = useFormik({

    initialValues: { nombre: '', email: '', telefono: '', asunto: '', mensaje: '' },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El campo Nombre es obligatorio")
        .max(20, "El campo nombre admite un máximo de 20 caractéres")
        .min(6, "El campo nombre debe tener un mínimo de 6 caractéres")
        .matches(nameRegExp, 'Ingrese un nombre válido'),
      email: Yup.string()
        .required("El campo email es obligatorio")
        .email("formato inválido de e-mail"),
      telefono: Yup.string()
        .required('El campo teléfono es obligatorio')
        .matches(phoneRegExp, 'El dato ingresado no corresponde a un número de teléfono'),
      asunto: Yup.string()
        .required("El campo asunto es obligatorio")
        .min(4, "El campo asunto debe tener un mínimo de 4 caractéres")
        .max(15, "El campo asunto admite un máximo de 15 caractéres"),
      mensaje: Yup.string()
        .required("El campo mensaje es obligatorio")
        .min(10, "El mensaje ingresado debe tener un mínimo de 10 caractéres")
        .max(100, "El mensaje ingresado puede tener un máximo de 100 caractéres")
    })
  })

  const sendMessage = () => {
    if (formik.errors.nombre || formik.errors.email || formik.errors.asunto || formik.errors.telefono 
      || formik.errors.mensaje) {
        swal({
          title: "¡Error!",
          text: `Revise que los campos del formulario estén completados correctamente`,
          icon: "error"
        })
      } else {
        const mensajeCompleto = {
          message : {
            nombre: document.getElementById("fullname").value,
            email: document.getElementById("eMail").value,
            telefono: document.getElementById("telefono").value,
            asunto: document.getElementById("asunto").value,
            mensaje: document.getElementById("mensaje").value
          },
          date: serverTimestamp()
        }
        const messagesCollection = collection(store, "Mensaje_Detallado")
        const send = addDoc(messagesCollection, mensajeCompleto)
        console.log("Mensaje completo a Firebase: " + send)
        swal({
          title: "¡Enviado!",
          text: `El mensaje se envió correctamente`,
          icon: "success"
        })
      }
  }

  return (
    <div className="contenidoContacto">
      <div className="contenidoContacto__envoltura">
        <div className="contenidoContacto__envoltura__formulario">
          <form onSubmit={formik.handleSubmit}>
            <p>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" id="fullname" placeholder="Ingrese su nombre"
              onChange={formik.handleChange} value={formik.values.nombre} />
              {formik.errors.nombre && <i className="formError">{formik.errors.nombre}</i>}
            </p>
            <p>
              <label>E-Mail</label>
              <input type="email" name="email" id="eMail"  placeholder="Ingrese su E-Mail"
              onChange={formik.handleChange} value={formik.values.email} />
              {formik.errors.email && <i className="formError">{formik.errors.email}</i>}
            </p>
            <p>
              <label>Teléfono</label>
              <input type="tel" name="telefono" id="telefono" placeholder="Ingrese su teléfono"
              onChange={formik.handleChange} value={formik.values.telefono} />
              {formik.errors.telefono && <i className="formError">{formik.errors.telefono}</i>}
            </p>
            <p>
              <label>Asunto</label>
              <input type="text" name="asunto" id="asunto" placeholder="Ingrese el asunto del mensaje"
              onChange={formik.handleChange} value={formik.values.asunto} />
              {formik.errors.asunto && <i className="formError">{formik.errors.asunto}</i>}
            </p>
            <p className="bloque">
              <label>Mensaje</label>
              <textarea name="mensaje" rows="3" id="mensaje"
              onChange={formik.handleChange} value={formik.values.mensaje}></textarea>
              {formik.errors.mensaje && <i className="formError">{formik.errors.mensaje}</i>}
            </p>
            <p className="bloque">
              <button type="submit" onClick={sendMessage}>Enviar</button>
            </p>
          </form>
        </div>

        <div className="contenidoContacto__envoltura__info">
          <h4>Más Información</h4>
          <ul>
            <li>
              <img
                src="https://img.icons8.com/color/24/000000/marker--v1.png"
                alt="/"
              />
              <i>Buenos Aires, Argentina</i>
            </li>
            <li>
              <img
                src="https://img.icons8.com/color/24/000000/phone.png"
                alt="/"
              />
              <i>11-5806-9634</i>
            </li>
            <li>
              <img
                src="https://img.icons8.com/color/24/000000/new-post.png"
                alt="/"
              />
              <i>contact@mirko.com</i>
            </li>
          </ul>
          <p>
            Consultanos por stock, tipo de pago o de envío, algún inconveniente o lo que necesite. Nuestro rango promedio de respuesta es de aproximadamente 24 horas.
          </p>
          <img
            id="imagenHomero"
            src={require("./images/homero_simpson.jpg")}
            alt="Pensando con Homero Simpson"
          />
        </div>
      </div>
    </div>
  );
}

export default Formulario;
