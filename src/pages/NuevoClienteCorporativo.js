import React from "react";

const NuevoClienteCorporativo = () => {
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
                placeholder="RazonSocial"
              />
              <br />
              <label for="floatingInput">Razon social</label>
            </div>
            <div class="form-floating">
              <input
                type="Number"
                className="form-control imput"
                id="floatingPassword"
                placeholder="CUIL/CUIT"
              />
              <br />
              <label for="floatingPassword">Telefono de contacto</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                className="form-control imput"
                id="floatingPassword"
                placeholder="dirOfi"
              />
              <br />
              <label for="floatingPassword">
                Direccion de Oficina de Administracion
              </label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                className="form-control imput"
                id="floatingPassword"
                placeholder="Nprop"
              />
              <br />
              <label for="floatingPassword">Nombre Porpietario/s</label>
            </div>
            <div class="form-floating">
              <input
                type="Number"
                className="form-control imput"
                id="floatingPassword"
                placeholder="cuit"
              />
              <br />
              <label for="floatingPassword">CUIT Empresa</label>
            </div>

            <div class="form-floating">
              <input
                type="email"
                className="form-control imput"
                id="floatingPassword"
                placeholder="email"
              />
              <br />
              <label for="floatingPassword">Correo electronico</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                className="form-control imput"
                id="floatingPassword"
                placeholder="Agente"
              />
              <br />
              <label for="floatingPassword">Agente inmobiliario a cargo</label>
            </div>
          </div>
          <br />
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
              <label for="formFileMultiple" className="form-label imput ">
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

export default NuevoClienteCorporativo;
