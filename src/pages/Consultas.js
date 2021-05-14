import React from "react";
import { Link } from "react-router-dom";
const Consulta = () => {
  return (
    <>
      <div className="container">
        <div
          style={{
            display: "grid",
            placeItems: "center",
            backgroundColor: "#E2F0FF",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <div className="row px-5">
            <div className="col">
              <div
                className="rounded-3 py-5 px-5 shadow "
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "white",
                }}
              >
                <div className="d-grid gap-2 col-5">
                  <Link to="/consultas-cliente" className="btn btn-primary">
                    Clientes
                  </Link>
                  <Link to="/consultas-propiedad" className="btn btn-primary">
                    Propiedades
                  </Link>
                  <Link to="/consultas-reporte" className="btn btn-primary">
                    Reportes
                  </Link>
                  <Link to="/consultas-empleado" className="btn btn-primary">
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
