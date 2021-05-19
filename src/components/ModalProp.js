import React, { useState } from "react";

const ModalProp = ({ visible, handleVisible }) => {
  const [Mensaje1, setMensaje1] = useState(false);

  const mensaje1 = () => {
    setMensaje1(true);
  };

  return (
    <>
      {visible && (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            height: "100%",
            width: "100%",
            position: "fixed",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "80%",
              width: "45rem",
              position: "fixed",
              top: "6rem",
              bottom: 0,
              right: "30%",
              borderRadius: 5,
              overflowY: "scroll",
            }}
          >
            <>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end  m-3">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  onClick={() => handleVisible(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                </button>
              </div>

              <h2 className="text-center mt-2 mb-4">
                Filtrar cita por Propiedad
              </h2>

              <div class="d-grid  col-10 mx-auto">
                <label for="CodCli" className="form-label">
                  Ingresar codigo de propiedad
                </label>
                <div className="d-flex ">
                  <input
                    type="number"
                    className="form-control imput"
                    id="CodCli"
                    placeholder="Codigo de propiedad..."
                    style={{ height: "2.5rem" }}
                  />
                  <button
                    onClick={() => mensaje1()}
                    className="btn btn-primary btn-sm"
                    style={{
                      height: "2.5rem",
                      marginTop: 0,
                      marginLeft: "0.5rem",
                    }}
                  >
                    Buscar
                  </button>
                </div>
                {Mensaje1 && (
                  <>
                    <p>
                      <br></br>

                      <table className="table  table-bordered  ">
                        <thead>
                          <tr>
                            <th scope="col" colSpan="7" class="table-dark">
                              Nombre Propiedad:
                              <th>Ubicación:</th>
                            </th>
                          </tr>
                          <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Tipo actividad</th>
                            <th scope="col">Cod. Cliente</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Cod. Agente</th>
                            <th scope="col">Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>__/__/____</td>
                            <td>----</td>
                            <td>----</td>
                            <td>----</td>
                            <td>----</td>
                            <td>----</td>
                            <td class="table-info">En Proceso</td>
                          </tr>

                          <tr>
                            <td>__/__/____</td>
                            <td>----</td>
                            <td>----</td>
                            <td>----</td>
                            <td>----</td>
                            <td>----</td>
                            <td class="table-info">En Proceso</td>
                          </tr>
                          <tr>
                            <td>__/__/____</td>
                            <td>----</td>
                            <td>----</td>
                            <td>----</td>
                            <td>----</td>
                            <td>----</td>
                            <td class="table-secondary">Finalizada</td>
                          </tr>
                          <tr>
                            <td>__/__/____</td>
                            <td>----</td>
                            <td>----</td>
                            <td>----</td>
                            <td>----</td>
                            <td>----</td>
                            <td class="table-danger">Cancelada</td>
                          </tr>
                        </tbody>
                      </table>
                    </p>
                  </>
                )}
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalProp;
