import React from "react";
import CardPropiedad from "../components/CardPropiedad";
import ArrayPropiedades from "../constant/propiedades";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#E2F0FF", overflowX: "scroll" }}>
      <div className="d-sm-flex ">
        {ArrayPropiedades.map((casa, index) => (
          <CardPropiedad
            imagen={casa.imagen}
            precio={casa.precio}
            id={casa.id}
            condicion={casa.condicion}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
