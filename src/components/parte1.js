const parte1 = () => {
  return (
    <>
      <label for="tipo" className="form-label">
        Tipo
      </label>
      <input type="text" className="form-control imput" id="tipo" />
      <br />
      <label for="ubi" className="form-label">
        Ubicacion
      </label>
      <input type="textor" className="form-control imput" id="ubi" />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <label for="ubi" className="form-label">
              Baños
            </label>
            <input
              type="number"
              className="form-control"
              style={{ width: "4rem" }}
              id="ubi"
            />
          </div>
          <div className="col">
            <label for="ubi" className="form-label">
              Dormitorios
            </label>
            <input
              type="number"
              className="form-control"
              style={{ width: "4rem" }}
              id="ubi"
            />
          </div>
          <div className="col">
            <label for="ubi" className="form-label">
              Suites
            </label>
            <input
              type="number"
              className="form-control"
              style={{ width: "4rem" }}
              id="ubi"
            />
          </div>
        </div>
      </div>
      <br />
      <label for="Telef" className="form-label">
        Artefactos con los que cuenta
      </label>
      <input type="texto" className="form-control imput" id="Telef" />
      <br />
      <label for="Fnacim" className="form-label">
        Espacios con los que cuenta
      </label>
      <input type="texto" className="form-control imput" id="Fnacim" />
      <br />
      <label for="PyC" className="form-label">
        Servicios adheridos
      </label>
      <input type="text" className="form-control imput" id="PyC" />
    </>
  );
};

export default parte1;
