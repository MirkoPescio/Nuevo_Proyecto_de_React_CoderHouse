import React from 'react';
import CartProducts from '../CartProducts';
import '../../App.css';

const Carrito = ({correoUsuario}) => {

  const correoSesion = correoUsuario

  return (
    <CartProducts correo={correoSesion} />
  )
}

export default Carrito