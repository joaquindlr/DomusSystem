import React, { useState } from "react";

const Documentacion = () => {
  const [guardado, setGuardado] = useState(false);

  const guardarArchivo = () => {
    setGuardado(true);
    setTimeout(() => {
      setGuardado(false);
    }, [5000]);
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#E2F0FF",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <div
          className="rounded-3 py-5 shadow "
          style={{
            width: "70%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            backgroundColor: "white",
          }}
        >
          <div className="container">
            <div className="row border m-3">
              <div className="col my-1">
                <div className="row mx-auto ">
                  <div className="col-9 pt-3 pe-2 m-0  ">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Documento"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                  </div>
                  <div className="col-3 p-0 pb-1 ">
                    <div className=" p-0 ">
                      <button className="btn btn-secondary" type="button">
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
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <div class="mb-3">
                    <input
                      className="form-control mt-3 ms-2"
                      type="file"
                      id="formFile"
                    />
                    <button
                      className="btn btn-primary ms-2"
                      type="button"
                      onClick={() => guardarArchivo()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-file-earmark-diff-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8 6a.5.5 0 0 1 .5.5V8H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 0 1 0-1h1.5V6.5A.5.5 0 0 1 8 6zm-2.5 6.5A.5.5 0 0 1 6 12h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                      </svg>
                      Agregar
                    </button>
                    {guardado && (
                      <>
                        <p>El archivo se guardo correctamente</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col mt-3">
                <table className="table table-bordered border-primary">
                  <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Descripcion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Documento 1</td>
                      <td>__/__/____</td>
                      <td>etc</td>
                    </tr>
                    <tr>
                      <td>Documento 2</td>
                      <td>__/__/____</td>
                      <td>etc</td>
                    </tr>
                    <tr>
                      <td>Documento 3</td>
                      <td>__/__/____</td>
                      <td>etc</td>
                    </tr>
                    <tr>
                      <td>Documento 4</td>
                      <td>__/__/____</td>
                      <td>etc</td>
                    </tr>
                    <tr>
                      <td>Documento 5</td>
                      <td>__/__/____</td>
                      <td>etc</td>
                    </tr>
                    <tr>
                      <td>Documento 6</td>
                      <td>__/__/____</td>
                      <td>etc</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentacion;
