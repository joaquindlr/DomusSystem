import React, { useEffect, useState } from "react";

import Parte1 from "../components/ejemplo/parte1";
import Parte2 from "../components/ejemplo/parte2";
import Parte3 from "../components/ejemplo/parte3";

const NuevaPropiedad = () => {
  const [parte, setParte] = useState(1);

  const siguienteParte = () => {
    setParte(parte + 1);
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f2f2f2",
          paddingTop: "2rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          className="rounded-3 py-5 shadow "
          style={{
            width: "37rem",
            display: "grid",
            placeItems: "center",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <form className="">
              {parte == 1 && <Parte1 />}
              {parte == 2 && <Parte2 />}
              {parte == 3 && <Parte3 />}
            </form>
            <button
              className="btn btn-primary w-100"
              onClick={() => siguienteParte()}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevaPropiedad;
