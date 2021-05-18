import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { GiFamilyHouse } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { RiCoinsFill, RiFilePaper2Line } from "react-icons/ri";
import CardItem from "../components/CardItem";
import "../components/Cards.css";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero-container">
        <h1
          className="text-center"
          style={{
            color: "white",
            borderColor: "black",
            fontSize: "4rem",
          }}
        >
          ENCONTRA UN HOGAR PARA VOS
        </h1>
        <p> El lugar ideal para vivir está a un click de distancia </p>
        <Link to="/catalogo" className="hero-link">
          IR AL CATALOGO
        </Link>
      </div>
      {/* BENEFITS SECTION */}
      <div className="container-fluid" style={{ backgroundColor: "teal" }}>
        <div className="row ">
          <IconContext.Provider value={{ color: "white", size: "75px" }}>
            <div className="col">
              <div
                className="card mx-auto"
                style={{
                  width: "15rem",
                  border: "none",
                  display: "flex",
                  flex: "1",
                  alignItems: "center",
                  marginTop: "80px",
                  backgroundColor: "teal",
                }}
              >
                <RiCoinsFill></RiCoinsFill>

                <div className="card-body">
                  <h5
                    className="card-title text-white"
                    style={{ textAlign: "center" }}
                  >
                    La mejor financiacion
                  </h5>
                  <p
                    className="card-text text-white"
                    style={{ textAlign: "center" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum, vitae?
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card mx-auto"
                style={{
                  width: "15rem",
                  border: "none",
                  display: "flex",
                  flex: "1",
                  alignItems: "center",
                  marginTop: "80px",
                  backgroundColor: "teal",
                }}
              >
                <GiFamilyHouse></GiFamilyHouse>
                <div className="card-body">
                  <h5
                    className="card-title text-white"
                    style={{ textAlign: "center" }}
                  >
                    Casas para todos los gustos y precios
                  </h5>
                  <p
                    className="card-text text-white"
                    style={{ textAlign: "center" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum, vitae?
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card mx-auto"
                style={{
                  width: "15rem",
                  border: "none",
                  display: "flex",
                  flex: "1",
                  alignItems: "center",
                  marginTop: "80px",
                  backgroundColor: "teal",
                  marginBottom: "80px",
                }}
              >
                <RiFilePaper2Line />

                <div className="card-body">
                  <h5
                    className="card-title text-white"
                    style={{ textAlign: "center" }}
                  >
                    Contrato rapido y sin tercerizaciones
                  </h5>
                  <p
                    className="card-text text-white"
                    style={{ textAlign: "center" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, tenetur.
                  </p>
                </div>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>

      {/* Casas cartas */}

      <div
        className="container-fluid"
        style={{ backgroundColor: "white", padding: "2rem" }}
      >
        <p
          className="fs-2"
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          ¿Qué tipo de casa estas buscando para tu nuevo hogar?
        </p>

        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390"
                title="Casas en venta"
                condicion="Venta"
                path="/catalogo"
              />
              <CardItem
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                title="Casas en alquiler"
                condicion="Alquiler"
                path="/catalogo"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="https://cdn.archilovers.com/projects/c_383_f31f5407-90dc-4f95-b7f2-f478f3884aec.jpg"
                title="Casas con vista al mar"
                condicion="Frente al mar"
                path="/catalogo"
              />
              <CardItem
                src="https://www.homedizz.com/wp-content/uploads/2016/09/interior-design-for-contemporary-small-house.jpg"
                title="Casas con interiores pequeños"
                condicion="Interiores pequeños"
                path="/catalogo"
              />
              <CardItem
                src="https://ohmyapt.apartmentratings.com/wp-content/uploads/2017/10/balcony-main.jpeg"
                title="Departamentos"
                condicion="Departamentos"
                path="/catalogo"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
