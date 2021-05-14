import React, { useEffect, useState } from "react";

import Parte1 from "../components/parte1";
import Parte2 from "../components/parte2";
import Parte3 from "../components/parte3";

const NuevaPropiedad = () => {
  const [parte, setParte] = useState(1);

  const siguienteParte = () => {
    setParte(parte + 1);
  };
  const Parteanterior = () => {
    setParte(parte - 1);
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
            <div className="container">
              <div className="row">
                <div className="col">
                  {parte == 2 && (
                    <>
                      <button
                        className="btn btn-primary w-100 imput"
                        onClick={() => Parteanterior()}
                      >
                        Anterior
                      </button>
                    </>
                  )}
                  {parte == 3 && (
                    <>
                      <button
                        className="btn btn-primary w-100 imput"
                        onClick={() => Parteanterior()}
                      >
                        Anterior
                      </button>
                    </>
                  )}
                </div>
                <div className="col">
                  <br />
                  {parte == 1 && (
                    <>
                      <button
                        className="btn btn-primary w-100 imput"
                        onClick={() => siguienteParte()}
                      >
                        Siguiente
                      </button>
                    </>
                  )}
                </div>
                <div className="col">
                  {parte == 2 && (
                    <>
                      <button
                        className="btn btn-primary w-100 imput"
                        onClick={() => siguienteParte()}
                      >
                        Siguiente
                      </button>
                    </>
                  )}
                  {parte == 3 && (
                    <>
                      <button
                        className="btn btn-primary w-100 imput"
                        onClick={() =>
                          alert("Registro compleatado exitosamente")
                        }
                      >
                        Confirmar
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevaPropiedad;
