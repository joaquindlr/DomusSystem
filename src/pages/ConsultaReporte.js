import React from "react";
const ConsultaReporte = () => {
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
                <div className="row mx-auto ps-4">
                  <div className="col-3 ms-4 p-0">
                    <div class="input-group">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Tipo
                      </label>
                      <select class="form-select" id="inputGroupSelect01">
                        <option selected>...</option>
                        <option value="1">Venta</option>
                        <option value="2">Alquiler</option>
                        <option value="3">Cliente</option>
                        <option value="4">Propiedad</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="input-group mb-3">
                      <span class="input-group-text">Desde</span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="fecha"
                        aria-label="fecha"
                      />
                      <span class="input-group-text">Hasta</span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="fecha"
                        aria-label="fecha"
                      />
                    </div>
                  </div>
                  <div className="col-2 p-0 m-0">
                    <button className="btn btn-primary" type="button" >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="row">
                    <div className="col p-3">
                      reporte ventas
                      <table class="table p-2 me-4">
                        <thead>
                          <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">vendedor</th>
                            <th scope="col">comprador</th>
                            <th scope="col">monto</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>direccion1</td>
                            <td>vendedor1</td>
                            <td>comprador1</td>
                            <td>$monto1</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>direccion2</td>
                            <td>vendedor2</td>
                            <td>comprador2</td>
                            <td>$monto2</td>
                          </tr>
                          <tr>
                            <th scope="row" colspan="4">Total</th>
                            <td>$total</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultaReporte;
