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
              <div className="d-grid gap-2 d-md-flex justify-content-md-end p-2">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => handleVisible(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                </button>
              </div>
              <div style={{ paddingLeft: "3rem" }}>
                <h2 className="text-center mb-3">Cita nº 123456</h2>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{ width: "10rem" }}
                  >
                    Fecha
                  </span>
                  <input
                    type="text"
                    placeholder="14/05/2021"
                    disabled
                    style={{ width: "28rem" }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{ width: "10rem" }}
                  >
                    Hora
                  </span>
                  <input
                    type="text"
                    placeholder="14:00"
                    disabled
                    style={{ width: "28rem" }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{ width: "10rem" }}
                  >
                    Codigo Cliente
                  </span>
                  <input
                    type="text"
                    placeholder="Cliente123"
                    disabled
                    style={{ width: "28rem" }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{ width: "10rem" }}
                  >
                    Nombre cliente
                  </span>
                  <input
                    type="text"
                    placeholder="Juan Dominguez"
                    disabled
                    style={{ width: "28rem" }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{ width: "10rem" }}
                  >
                    Telefono cliente
                  </span>
                  <input
                    type="text"
                    placeholder="45454545"
                    disabled
                    style={{ width: "28rem" }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{ width: "10rem" }}
                  >
                    Propiedad
                  </span>
                  <input
                    type="text"
                    placeholder="Propiedad 1"
                    disabled
                    style={{ width: "28rem" }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{ width: "10rem" }}
                  >
                    Ubicacion
                  </span>
                  <input
                    type="text"
                    placeholder="Calle 123"
                    disabled
                    style={{ width: "28rem" }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{ width: "10rem" }}
                  >
                    Agente
                  </span>
                  <input
                    type="text"
                    placeholder="Agente 1"
                    disabled
                    style={{ width: "28rem" }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{ width: "10rem" }}
                  >
                    Tipo de actividad
                  </span>
                  <input
                    type="text"
                    placeholder="Cita"
                    disabled
                    style={{ width: "28rem" }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{ width: "10rem" }}
                  >
                    Estado
                  </span>
                  <input
                    type="text"
                    placeholder="En proceso"
                    disabled
                    style={{ width: "28rem" }}
                  ></input>
                </div>
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default CitaAgendada;
