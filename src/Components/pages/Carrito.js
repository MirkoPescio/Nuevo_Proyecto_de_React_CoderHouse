import React from 'react';
import CartProducts from '../CartProducts';
import Footer from '../Footer';
import '../../App.css';

const Carrito = ({correoUsuario}) => {

  const correoSesion = correoUsuario
  console.log(correoSesion)

  return (
    <>
      <CartProducts correo={correoSesion} />
      <Footer />
    </>
  )
}

export default Carrito