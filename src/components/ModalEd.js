import React, { useState } from "react";
import CitaEliminada from "../components/CitaEliminada";

const ModalEd = ({ visible, handleVisible }) => {
  const [Mensaje1, setMensaje1] = useState(false);

  const mensaje1 = () => {
    setMensaje1(true);
  };

  const [visiblec, setVisiblec] = useState(false);
  const handleVisiblec = () => {
    setVisiblec(false);
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
              <CitaEliminada
                visible={visiblec}
                handleVisible={handleVisiblec}
              />
              <div class="d-grid gap-2 d-md-flex justify-content-md-end m-3">
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
              <h2 className="text-center mt-2 mb-4">Editar cita</h2>

              <div class="d-grid  col-10 mx-auto">
                <label for="CodProp" className="form-label">
                  Seleccionar fecha
                </label>
                <div className="d-flex">
                  <input
                    type="date"
                    className="form-control imput"
                    id="CodProp"
                  />
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    style={{
                      height: "2.5rem",
                      marginTop: 0,
                      marginLeft: "0.5rem",
                    }}
                    onClick={() => mensaje1()}
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
                            <th scope="col" colSpan="8" class="table-dark"></th>
                          </tr>
                          <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Tipo actividad</th>
                            <th scope="col">Cod. Cliente</th>
                            <th scope="col">Cod. Agente</th>
                            <th scope="col">Cod. Propiedad</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Eliminar</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <select id="inputDate" class="form-select">
                                <option selected>20/05/21</option>
                                <option>22/05/21</option>
                              </select>
                            </td>

                            <td>
                              <select id="inputTime" class="form-select">
                                <option selected>07:00</option>
                                <option>10:00</option>
                              </select>
                            </td>

                            <td>----</td>
                            <td>----</td>
                            <td>
                              <select id="input" class="form-select">
                                <option selected>Agente1</option>
                                <option>Agente3</option>
                              </select>
                            </td>
                            <td>
                              <select id="input" class="form-select">
                                <option selected>Casa1</option>
                                <option>Casa3</option>
                              </select>
                            </td>
                            <td class="table-info">En Proceso</td>
                            <td>
                              <button
                                class="btn btn-outline-danger"
                                type="button"
                                onClick={() => setVisiblec(true)}
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
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select id="inputDate" class="form-select">
                                <option selected>20/05/21</option>
                                <option>22/05/21</option>
                              </select>
                            </td>
                            <td>
                              <select id="inputTime" class="form-select">
                                <option selected>08:00</option>
                                <option>09:00</option>
                                <option>11:00</option>
                              </select>
                            </td>
                            <td>----</td>
                            <td>----</td>
                            <td>
                              <select id="input" class="form-select">
                                <option selected>Agente3</option>
                                <option>Agente1</option>
                              </select>
                            </td>
                            <td>
                              <select id="input" class="form-select">
                                <option selected>Casa5</option>
                                <option>Casa4</option>
                              </select>
                            </td>
                            <td class="table-info">En Proceso</td>
                            <td>
                              <button
                                class="btn btn-outline-danger"
                                type="button"
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
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select id="inputDate" class="form-select">
                                <option selected>20/05/21</option>
                                <option>25/05/21</option>
                              </select>
                            </td>
                            <td>
                              <select id="inputTime" class="form-select">
                                <option selected>12:00</option>
                                <option>13:00</option>
                              </select>
                            </td>
                            <td>----</td>
                            <td>----</td>
                            <td>
                              <select id="input" class="form-select">
                                <option selected>Agente3</option>
                                <option>Agente2</option>
                              </select>
                            </td>
                            <td>
                              <select id="input" class="form-select">
                                <option selected>Casa1</option>
                                <option>Casa3</option>
                              </select>
                            </td>
                            <td class="table-info">En Proceso</td>
                            <td>
                              <button
                                class="btn btn-outline-danger"
                                type="button"
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
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select id="inputDate" class="form-select">
                                <option selected>20/05/21</option>
                                <option>30/05/21</option>
                              </select>
                            </td>
                            <td>
                              <select id="inputTime" class="form-select">
                                <option selected>15:00</option>
                                <option>16:00</option>
                                <option>20:00</option>
                              </select>
                            </td>
                            <td>----</td>
                            <td>----</td>
                            <td>
                              <select id="input" class="form-select">
                                <option selected>Agente1</option>
                                <option>Agente5</option>
                              </select>
                            </td>
                            <td>
                              <select id="input" class="form-select">
                                <option selected>Casa2</option>
                                <option>Casa3</option>
                              </select>
                            </td>
                            <td class="table-info">En Proceso</td>
                            <td>
                              <button
                                class="btn btn-outline-danger"
                                type="button"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          class="btn btn-outline-success"
                          type="button"
                          onClick={() => handleVisible(false)}
                        >
                          Confirmar
                        </button>
                      </div>
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

export default ModalEd;
