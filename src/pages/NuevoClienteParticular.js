import React from "react";

const NuevoClienteParticular = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f2f2f2",
          paddingTop: "2rem",
        }}
      >
        <div
          className="rounded-3 py-5 shadow "
          style={{
            width: "37rem",
            display: "grid",
            placeItems: "center",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <div class="form-floating">
              <input
                type="text"
                className="form-control imput"
                id="floatingInput"
                placeholder="Apellido y Nombre"
              />
              <br />
              <label for="floatingInput">Apellido y Nombre</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                className="form-control imput"
                id="floatingPassword"
                placeholder="CUIL/CUIT"
              />
              <br />
              <label for="floatingPassword">CUIL / CUIT</label>
            </div>
            <div class="form-floating">
              <input
                type="Number"
                className="form-control imput"
                id="floatingPassword"
                placeholder="Ntelef"
              />
              <br />
              <label for="floatingPassword">Numero de telefono</label>
            </div>
            <div class="form-floating">
              <input
                type="Number"
                className="form-control imput"
                id="floatingPassword"
                placeholder="DNI"
              />
              <br />
              <label for="floatingPassword">DNI</label>
            </div>
            <div class="form-floating">
              <input
                type="date"
                className="form-control imput"
                id="floatingPassword"
                placeholder="Fnac"
              />
              <br />
              <label for="floatingPassword">Fecha de nacimiento</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                className="form-control imput"
                id="floatingPassword"
                placeholder="Email"
              />
              <br />
              <label for="floatingPassword">Correo electronico</label>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="fst-italic">Codigo Cliente: </p>
                <p className="fst-italic">Fecha de creacion: </p>
                <p className="fst-italic">hora de creacion: </p>
              </div>
              <div className="col"></div>
              <div className="col">
                <div className="">
                  <br />
                  <br />
                  <button className="btn btn-primary me-md-2" type="button">
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f2f2f2",
          paddingTop: "2rem",
        }}
      >
        <div
          className="rounded-3 py-5 shadow "
          style={{
            width: "37rem",
            display: "grid",
            placeItems: "center",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <div>
              <label for="formFileMultiple" className="form-label imput">
                <h2>Subir documentos</h2>
              </label>
              <input
                className="form-control "
                type="file"
                id="formFileMultiple"
                multiple
              />
              <img
                src="https://driveuploader.com/static/img/api-uploader.gif"
                class="img-fluid"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevoClienteParticular;
