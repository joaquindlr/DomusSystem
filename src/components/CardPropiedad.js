import React from "react";
import { useHistory } from "react-router-dom";

const CardPropiedad = ({titulo,descripcion, imagen, precio, id, condicion }) => {
  const history = useHistory();

  const irPropiedad = () => {
    history.push(`/propiedad/${id}`);
  };

  return (
    <div className="pt-5 px-5 pb-5">
      <div
        className="card overflow-hidden"
        style={{ width: "15rem", cursor: "pointer" }}
        onClick={() => irPropiedad()}
      >
        <img
          src={imagen}
          alt="casa"
          style={{ height: "13rem", objectFit: "cover" }}
        />
        <div className="card-img-overlay">
          <div
            style={{
              backgroundColor: "#2D4F81",
              justifyContent: "center",
              display: "flex",
              width: "6rem",
              borderRadius: 20,
              marginLeft: "12rem",
              marginTop: "10.5rem",
            }}
          >
            <p
              className="fs-5 text-light fw-bold"
              style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
            >
              {precio}
            </p>
          </div>
        </div>
        <div className="card-img-overlay">
          <div
            // className="bg-success"
            style={{
              justifyContent: "center",
              display: "flex",
              width: "6rem",
              borderRadius: 20,
              marginLeft: "5.5rem",
              marginTop: "10.75rem",
              backgroundColor:"teal"
            }}
          >
            <p
              className="text-light fw-bold"
              style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
            >
              {condicion}
            </p>
          </div>
        </div>
        <div className="card-body" style={{ height: "16rem" }}>
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">
           {descripcion}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPropiedad;
