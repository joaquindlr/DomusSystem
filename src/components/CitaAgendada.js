import React, { useState } from "react";

const CitaAgendada = ({ visible, handleVisible }) => {
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
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
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

              <div class="d-grid  col-10 mx-auto">
                <table className="table  table-borderless table-light ">
                  <thead>
                    <tr>
                      <th scope="col" class="table-primary">
                        Cita Nº1
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          Fecha
                        </span>
                        <input
                          type="text"
                          placeholder="17/05/2021"
                          disabled
                        ></input>

                        <span class="input-group-text" id="basic-addon1">
                          Hora
                        </span>
                        <input type="text" placeholder="14:00" disabled></input>
                      </div>
                    </tr>

                    <tr>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          Codigo Cliente
                        </span>
                        <input
                          type="text"
                          placeholder="Cliente123"
                          disabled
                        ></input>
                      </div>
                    </tr>
                    <tr>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          Nombre Cliente
                        </span>
                        <input
                          type="text"
                          placeholder="Lupita Lopez"
                          disabled
                        ></input>
                      </div>
                    </tr>
                    <tr>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          Teléfono Cliente
                        </span>
                        <input
                          type="text"
                          placeholder="123456"
                          disabled
                        ></input>
                      </div>
                    </tr>

                    <tr>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          Propiedad
                        </span>
                        <input
                          type="text"
                          placeholder="Propiedad 1"
                          disabled
                        ></input>

                        <span class="input-group-text" id="basic-addon1">
                          Ubicación
                        </span>
                        <input
                          type="text"
                          placeholder="Calle 123"
                          disabled
                        ></input>
                      </div>
                    </tr>
                    <tr>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          Agente
                        </span>
                        <input
                          type="text"
                          placeholder="Agente 1"
                          disabled
                        ></input>
                      </div>
                    </tr>
                    <tr>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          Tipo Actividad
                        </span>
                        <input
                          type="text"
                          placeholder="Actividad"
                          disabled
                        ></input>

                        <span class="input-group-text" id="basic-addon1">
                          Estado
                        </span>
                        <input
                          type="text"
                          placeholder="En Proceso"
                          disabled
                        ></input>
                      </div>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default CitaAgendada;
