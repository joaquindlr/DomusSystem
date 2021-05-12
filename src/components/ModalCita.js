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
              height: "30rem",
              width: "50rem",
              position: "fixed",
              top: "10rem",
              bottom: 0,
              right: "35%",
              borderRadius: 10,
            }}
          >
            <>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  onClick={() => handleVisible2(false)}
                  className="btn btn-light me-md-20"
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
              <br />
              <div className="container">
                <div className="row">
                  <div className="col ">
                    <h4>Agendar Cita</h4>
                  </div>
                  <div className="col "></div>
                  <div className="col ">
                    <h4>Agregar cliente</h4>
                  </div>
                  <div className="col ">
                    <div className="mt-n2 p-n2 justify-content-md-end">
                      <button className="btn btn-light me-md-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col ">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                  <div className="col "></div>
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
