import React, { useState, useContext } from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import Flecha from "./svg/arrow.svg";
import Menu from "./svg/menu.svg";
import Carrito from "./svg/cart-shopping-solid.svg";
import { CartContext } from "../Context/CartContext";
import appFirebase from "../firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(appFirebase)

function NavBar({correoUsuario}) {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };

  (function () {
    const listElements = document.querySelectorAll(".menu__item--show");

    const addClick = () => {
      listElements.forEach((element) => {
        element.addEventListener("click", () => {
          let subMenu = element.children[1];
          let height = 0;
          element.classList.toggle("menu__item--active");

          if (subMenu.clientHeight === 0) {
            height = subMenu.scrollHeight;
          }

          subMenu.style.height = `${height}px`;
        });
      });
    };

    const deleteStyleHeight = () => {
      listElements.forEach((element) => {
        if (element.children[1].getAttribute("style")) {
          element.children[1].removeAttribute("style");
          element.classList.remove("menu__item--active");
        }
      });
    };

    addClick();

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1000) {
        deleteStyleHeight();
      } else {
        addClick();
      }
    });

    if (window.innerWidth <= 1000) {
      addClick();
    }
  })();

  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="usuarioLogueado">
        <p className="mailUsuario">Bienvenido, <strong>{correoUsuario}</strong></p>
      </div>
      <nav className="menu">
        <section className="menu__container">
          <h1 className="menu__item">
            <Link to="/" className="menu__link">
              Digital Buy
            </Link>
          </h1>

          <ul
            className={"menu__links" + (isActive ? " menu__links__show" : "")}
          >
            <li className="menu__item menu__item--show">
              <Link to="#" className="menu__link">
                Productos{" "}
                <img src={Flecha} alt="arrow" className="menu__arrow" />
              </Link>

              <ul className="menu__nesting">
                <li className="menu__inside">
                  <Link
                    to="/productos"
                    className="menu__link menu__link--inside"
                    onClick={ToggleClass}
                  >
                    Todos los productos
                  </Link>
                </li>
                <hr className="dropdown-divider" />

                <li className="menu__inside">
                  <Link
                    to="/productos/notebooks"
                    className="menu__link menu__link--inside"
                    onClick={ToggleClass}
                  >
                    Notebooks
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/productos/smartphones"
                    className="menu__link menu__link--inside"
                    onClick={ToggleClass}
                  >
                    Smartphones
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/productos/accesorios"
                    className="menu__link menu__link--inside"
                    onClick={ToggleClass}
                  >
                    Accesorios
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu__item">
              <Link to="/contacto" className="menu__link" onClick={ToggleClass}>
                Contacto
              </Link>
            </li>

            <li className="menu__item">
              <Link to="proximamente" className="menu__link" onClick={ToggleClass}>
                Proximamente
              </Link>
            </li>

            <li className="menu__item">
              <button className="menu__link link__button" onClick={() => {signOut(auth); ToggleClass();}}>
                Cerrar Sesión
              </button>
            </li>

          </ul>

          <li className="carrito" id="cart-widget">
            <Link to="/carrito">
              <span>{cart.length}</span>
              <img src={Carrito} alt="carrito" width="20" />
            </Link>
          </li>

          <div className="menuButton" onClick={ToggleClass}>
            <img className="menuButton__icon" src={Menu} alt="menu" />
          </div>
        </section>
      </nav>
    </>
  );
}

export default NavBar;
