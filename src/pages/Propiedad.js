import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArrayPropiedades from "../constant/propiedades";

const Propiedad = () => {
  const [params, setParam] = useState(useParams());
  const [casa, setCasa] = useState();
  const [logeado, setLogeado] = useState(true);

  const encontrarCasa = () => {
    setCasa(ArrayPropiedades.filter((x) => x.id == params.id)[0]);
  };

  useEffect(() => {
    // console.log(window.matchMedia("(min-width: 1100px)").matches);
    encontrarCasa();
    // console.log(casa);
  }, [casa]);

  return (
    <>
      <div
        className="d-md-flex md-justify-content-center py-5 px-3 px-md-5"
        style={{ backgroundColor: "#E2F0FF" }}
      >
        <div className="w-100" style={{ maxWidth: "50rem" }}>
          {casa && <img className="rounded-3 w-100 " src={casa.imagen} />}
        </div>
        <div className="mt-3 mt-md-0 ms-1 ms-md-4" style={{ width: "18rem" }}>
          {logeado ? (
            <>
              <div
                className="py-3 px-2"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: 10,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <div>
                  <p className="fs-5 fw-bold">Fecha propuesta: </p>
                  <input type="date" className="form-control" />
                  <p className="fs-5 fw-bold mt-4">Mensaje: </p>
                  <textarea class="form-control"></textarea>
                  <button type="button" class="btn btn-primary w-100 mt-3">
                    Solicitar cita
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h3
                style={{
                  color: "white",
                  backgroundColor: "#2D4F81",
                  borderRadius: 15,
                  fontSize: "1rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                }}
              >
                Inicia sesion para pedir un turno
              </h3>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Propiedad;
