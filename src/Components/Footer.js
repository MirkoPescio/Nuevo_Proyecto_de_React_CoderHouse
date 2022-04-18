import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import appFirebase from "../firebaseConfig";
import './css/Footer.css';
import swal from 'sweetalert';

const store = getFirestore(appFirebase);

function Footer() {

  let messageFooter = document.getElementById("mensajeFooter");

  const formik = useFormik({

    initialValues: {emailFooter: "", mensajeFooter: ""},
    validationSchema: Yup.object({
      emailFooter: Yup.string()
        .required("El campo email es obligatorio")
        .email("formato inválido de e-mail"),
      mensajeFooter: Yup.string()
        .required("Ingrese su mensaje")
        .min(10, "El mensaje rápido ingresado debe tener un mínimo de 10 caractéres")
        .max(30, "El mensaje rápido ingresado puede tener un máximo de 30 caractéres"),
    }),
  })

  const sendShortMessage = () => {
    if (formik.errors.emailFooter || formik.errors.mensajeFooter || messageFooter == null) {
      swal({
        title: "¡Error!",
        text: `Revise que los campos del formulario estén completados correctamente`,
        icon: "error"
      })
    } else {
      const mensajeRapido = {
        message: {
          email: document.getElementById("emailFooter").value,
          mensaje: document.getElementById("mensajeFooter").value
        },
        date: serverTimestamp()
      }
      const shortMessagesCollection = collection(store, "Mensaje_Rapido")
      const send = addDoc(shortMessagesCollection, mensajeRapido)
      console.log("Mensaje rápido a Firebase: " + send)
      swal({
        title: "¡Enviado!",
        text: `El mensaje se envió correctamente`,
        icon: "success"
      })
    }
  }

  return (
    <div>
      <footer>
      <div className="contenido-principal">
        <div className="izquierda contenedor">
          <h2>Nosotros</h2>
          <div className="contenido">
            <p>Somos una micro-empresa enfocada en la venta de productos de electrónica y posteriormente en videojuegos. Nuestros objetivos son los de ofrecer ventas seguras y expandir nuestras sucursales. Sigannos en nuestras redes:</p>
            <div className="social">
              <a href="https://www.facebook.com"><span className="fab fa-facebook-f"></span></a>
              <a href="https://www.twitter.com"><span className="fab fa-twitter"></span></a>
              <a href="https://www.instagram.com"><span className="fab fa-instagram"></span></a>
              <a href="https://www.youtube.com"><span className="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>

        <div className="centro contenedor">
          <h2>Ubicación</h2>
          <div className="contenido">
            <div className="lugar">
              <span className="fas fa-map-marker-alt"></span>
              <span className="texto">Buenos Aires, Argentina</span>
            </div>
            <div className="telefono">
              <span className="fas fa-phone-alt"></span>
              <span className="texto">+11 5806-9635</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope"></span>
              <span className="texto">mirkopes.4050@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="derecha contenedor">
          <h2>Mensaje Rápido</h2>
          <div className="contenido">
            <form name="formularioFooter" onSubmit={formik.handleSubmit}>
              <div className="email">
                <div className="texto">Email</div>
                <input type="email" name="emailFooter" id="emailFooter" placeholder="Ingrese su e-mail" 
                onChange={formik.handleChange} value={formik.values.emailFooter} />
                {formik.errors.emailFooter && <i className="formError">{formik.errors.emailFooter}</i>}
              </div>
              <div className="mensaje">
                <div className="texto">Mensaje</div>
                <textarea rows="2" cols="25" name="mensajeFooter" id="mensajeFooter"
                onChange={formik.handleChange} value={formik.values.mensajeFooter}></textarea>
                {formik.errors.mensajeFooter && <i className="formError">{formik.errors.mensajeFooter}</i>}
              </div>
              <div className="boton">
                <button type="submit" onClick={sendShortMessage}>Enviar Mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="fondo">
        <center>
          <span className="credito">Desarrollado por: <a href="https://github.com/MirkoPescio?tab=repositories">Mirko Pescio</a> | </span>
          <span className="far fa-copyright"></span><span> 2022</span>
        </center>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
