import * as React from "react";
import "./VerPropiedad.css";
const VerPropiedad = ({ visible, handleVisible, propiedad }) => {
  return (
    <>
      {visible && (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            height: "100%",
            width: "100%",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-5rem",
          }}
        >
          <div className="propiedad-container">
            <p className="exit-button" onClick={handleVisible}>
              X
            </p>
            <div className="ps-4">
              <p>
                <span className="fw-bold">Tipo:</span> {propiedad.tipo}
              </p>
              <p>
                <span className="fw-bold">Direccion:</span>{" "}
                {propiedad.ubicacion}
              </p>
              <p>
                <span className="fw-bold">Codigo cliente:</span>{" "}
                {propiedad.nroCliente}
              </p>
              <p>
                <span className="fw-bold">Artefactos:</span>{" "}
                {propiedad.artefactos ? "Si" : "No"}
              </p>
              <p>
                <span className="fw-bold">Tipo de contrato:</span>{" "}
                {propiedad.tipoContrato}
              </p>
              <p>
                <span className="fw-bold">Antiguedad:</span>{" "}
                {propiedad.antiguedad}
              </p>
              <p>
                <span className="fw-bold">Amueblado:</span>{" "}
                {propiedad.amueblado ? "Si" : "No"}
              </p>
              <p>
                <span className="fw-bold">Disponibilidad:</span>{" "}
                {propiedad.disponibilidad ? "Si" : "No"}
              </p>
              <p>
                <span className="fw-bold">Precio:</span>{" "}
                {"$" + propiedad.precio}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerPropiedad;
