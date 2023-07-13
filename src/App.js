import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import Productos from "./Components/pages/Productos";
import Contacto from "./Components/pages/Contacto";
import Carrito from "./Components/pages/Carrito";
import Detalles from "./Components/pages/Detalles";
import { CartContextProvider } from './Context/CartContext';
import Login from "./Components/Login";
import appFirebase from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Proximamente from "./Components/pages/Proximamente";
import Footer from "./Components/Footer";

const auth = getAuth(appFirebase)

const App = () => {

  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })

  return (
    <div className="app">
      {usuario ? (
        <>
          <CartContextProvider>
            <Router>
              <Header correoUsuario={usuario.email} />
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/productos" exact element={<Productos />} />
                <Route
                  path="/productos/:categoria"
                  exact
                  element={<Productos />}
                />
                <Route path="/detalles/:id" exact element={<Detalles />} />
                <Route path="/contacto" exact element={<Contacto />} />
                <Route
                  path="/proximamente"
                  exact
                  element={<Proximamente />}
                />
                <Route path="/carrito" exact element={<Carrito correoUsuario={usuario.email} />} />
              </Routes>
            </Router>
          </CartContextProvider>
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;