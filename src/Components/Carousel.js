import React from "react";
import "./css/Carousel.css";

function slide() {
  return (
      <div id="slideImagenesPrincipal">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("./images/notebooks_carousel.jpg")}
                className="d-block w-100 imagenSlide carousel__imagenSlide"
                alt="slide 1"
              />
              <div className="carousel-caption carousel__slideTexto d-md-block">
                <h5>Productos originales</h5>
                <p>
                  Trabajamos con las marcas: Motorola, Samsung, Sony, HP, Apple,
                  Lenovo y varias más
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("./images/smartphones_carousel.jpg")}
                className="d-block w-100 imagenSlide carousel__imagenSlide"
                alt="slide 2"
              />
              <div className="carousel-caption carousel__slideTexto d-md-block">
                <h5>Nuestros Productos</h5>
                <p>
                  Contactanos por el stock de: Computadoras, SmartPhones y
                  accesorios
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("./images/auriculares_carousel.jpg")}
                className="d-block w-100 imagenSlide carousel__imagenSlide"
                alt="slide 3"
              />
              <div className="carousel-caption carousel__slideTexto d-md-block">
                <h5>Comprá de forma segura</h5>
                <p>Procese sus pagos con tarjeta de crédito o MercadoPago</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
  );
}

export default slide;
