import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArrayPropiedades from "../constant/propiedades";

const Propiedad = () => {
  const [params, setParam] = useState(useParams());
  const [casa, setCasa] = useState();

  const encontrarCasa = () => {
    setCasa(ArrayPropiedades.filter((x) => x.id == params.id)[0]);
  };

  useEffect(() => {
    encontrarCasa();
    console.log(casa);
  }, [casa]);

  return (
    <>
      <div className="d-flex mt-5">
        <div className="ms-5">
          {casa && (
            <img
              className="rounded-3"
              style={{ width: "40rem" }}
              src={casa.imagen}
            />
          )}
        </div>
        <div className="ms-5">
          <h3
            style={{
              color: "white",
              backgroundColor: "#2D4F81",
              padding: "1rem",
              borderRadius: 15,
              marginLeft: "2rem",
            }}
          >
            Inicia sesion para pedir un turno
          </h3>
        </div>
      </div>
    </>
  );
};

export default Propiedad;
