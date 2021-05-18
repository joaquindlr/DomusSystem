import React from "react";
import { Link } from "react-router-dom";
const Consulta = () => {
  return (
    <>
      <div className="">
        <div
          style={{
            display: "grid",
            placeItems: "center",
            backgroundColor: "#E2F0FF",
            paddingTop: "8rem",
            paddingBottom: "8rem",
          }}
        >
          <div className="row px-5">
            <div className="col">
              <div
                className="rounded-3 py-5 px-5 shadow"
                style={{
                  width: "20rem",
                  height: "30rem",
                  backgroundColor: "white",
                }}
              >
                <h3 className="mb-4 text-center">Consultas</h3>
                <div className="row mb-2">
                  <Link to="/gestion-clientes" className="btn btn-primary">
                    Clientes
                  </Link>
                </div>
                <div className="row mb-2">
                  <Link to="/gestion-propiedades" className="btn btn-primary">
                    Propiedades
                  </Link>
                </div>
                {/* <div className="row mb-2">
                  <Link to="/gestion-reportes" className="btn btn-primary">
                    Reportes
                  </Link>
                </div> */}
                <div className="row mb-2">
                  <Link to="/gestion-empleados" className="btn btn-primary">
                    Empleados
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Consulta;
