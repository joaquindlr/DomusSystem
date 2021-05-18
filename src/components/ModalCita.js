import React from "react";

const Modal = ({ visible2, handleVisible2 }) => {
  return (
    <>
      {visible2 && (
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
              <div class="d-grid gap-2 d-md-flex justify-content-md-end m-3">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  onClick={() => handleVisible2(false)}
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
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "white",
                  paddingTop: 0,
                }}
              >
                <div
                  className="rounded-3 "
                  style={{
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "white",
                  }}
                >
                  <div>
                    <div className="">
                      <h3
                        for="Agregarcita"
                        className="form-label text-center"
                        style={{ marginBottom: "-5rem" }}
                      >
                        Agendar Cita
                      </h3>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <label for="CodCli" className="form-label">
                      Ingresar codigo de cliente
                    </label>
                    <div className="d-flex ">
                      <input
                        type="number"
                        className="form-control imput"
                        id="CodCli"
                        placeholder="Codigo cliente..."
                        style={{ height: "2.5rem" }}
                      />
                      <button
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
                    <br />
                    <label for="CodCli" className="form-label">
                      Ingresar codigo de propiedad
                    </label>
                    <div className="d-flex ">
                      <input
                        type="number"
                        className="form-control imput"
                        id="CodCli"
                        placeholder="Codigo de cliente..."
                        style={{ height: "2.5rem" }}
                      />
                      <button
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

                    <br />
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <label for="HoraIn" class="form-label">
                            Desde
                          </label>
                          <input
                            type="time"
                            className="form-control"
                            id="HoraIn"
                          />
                        </div>
                        <div className="col">
                          <label for="HoraFin" className="form-label">
                            Hasta
                          </label>
                          <input
                            type="time"
                            className="form-control"
                            id="HoraFin"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <label for="Fecha" className="form-label">
                      Fecha
                    </label>
                    <input
                      type="date"
                      className="form-control imput"
                      id="Fecha"
                    />
                    <br />
                    <br />
                    <br />
                    <div class="d-grid gap-2 col-6 mx-auto">
                      <button type="button" class="btn btn-primary btn-sm ">
                        Agregar turno
                      </button>
                    </div>

                    <br />
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
