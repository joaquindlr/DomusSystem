import React from "react";
import { useHistory } from "react-router-dom";

const CardPropiedad = ({ imagen, precio, id }) => {
  const history = useHistory();

  const irPropiedad = () => {
    history.push(`/propiedad/${id}`);
  };

  return (
    <div className="pt-5 px-5 pb-5">
      <div
        className="card"
        style={{ width: "20rem", cursor: "pointer" }}
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
        <div className="card-body" style={{ height: "16rem" }}>
          <h5 className="card-title">Lorem ipsum</h5>
          <p className="card-text">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPropiedad;
