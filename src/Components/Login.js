import React, { useState } from "react";
import appFirebase from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "./css/Login.css";

const auth = getAuth(appFirebase)

const Login = () => {

    const [registro, setRegistro] = useState(false)

    const formik = useFormik({
        initialValues: { email: '', contraseña: '' },
        validationSchema: Yup.object({
            email: Yup.string()
              .required("El campo email es obligatorio")
              .email("formato inválido de e-mail"),
            contraseña: Yup.string()
              .required("El campo contraseña es obligatorio")
        })
    })

    const handlerSubmit = async(e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const contraseña = e.target.contraseña.value;

        if(registro) {
            await createUserWithEmailAndPassword(auth, email, contraseña)
        } else {
            await signInWithEmailAndPassword(auth, email, contraseña)
        }
    }

    return(
        <section className="sectionLogin">
           <div className="containerLogin">
               <div className="loginFormulario">
                   <h1>{registro ? "Registrarse" : "Iniciar Sesión"}</h1>
                   <form onSubmit={handlerSubmit}>
                       <div className="mb-3">
                           <label className="form-label">Dirección de email: </label>
                           <input type="email" className="form-control inputLogin" placeholder="Ingrese su e-mail" id="email" 
                           onChange={formik.handleChange} value={formik.values.email} />
                           {formik.errors.email && <i className="formError">{formik.errors.email}</i>}
                       </div>
                       <div className="mb-3">
                           <label className="form-label">Contraseña: </label>
                           <input type="password" className="form-control inputLogin" placeholder="Ingrese su contraseña" id="contraseña" 
                           onChange={formik.handleChange} value={formik.values.contraseña} />
                           {formik.errors.contraseña && <i className="formError">{formik.errors.contraseña}</i>}
                       </div>
                       <button className="btn btn-primary" type="submit">
                           {registro ? "Registrarse" : "Ingresar"}
                        </button>
                   </form>
                   <div className="form-group">
                       <button className="btn btn-secondary mt-4" onClick={() => setRegistro(!registro)}>
                           {registro ? "Ya tiene una cuenta? Inicie Sesión" : "No tiene una cuenta? Regístrese"}
                       </button>
                   </div>
               </div>
           </div>
        </section>
    )
}

export default Login