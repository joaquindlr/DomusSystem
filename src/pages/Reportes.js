import React from "react";
const Reportes = () => {
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
          <div className="row">
            <div className="col m-3">
              <div
                className="rounded-3 py-5 shadow "
                style={{
                  width: "30rem",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "white",
                }}
              >
                <div className="d-grid gap-2 col-5">
                  <button className="btn btn-primary" type="button">
                    Generar Reportes
                  </button>
                  <button className="btn btn-primary" type="button">
                    Visualizar Reporte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reportes;