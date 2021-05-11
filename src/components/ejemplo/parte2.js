const Parte2 = () => {
  return (
    <div>
      <label for="correo" className="form-label">
        Contrato
      </label>
      <input type="text" className="form-control imput" id="correo" />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <label for="ubi" className="form-label">
              Numero Cliente
            </label>
            <input
              type="number"
              className="form-control"
              style={{ width: "6rem" }}
              id="ubi"
            />
          </div>
          <div className="col">
            <label for="ubi" className="form-label">
              Tipo Cliente
            </label>
            <input
              type="text"
              className="form-control"
              style={{ width: "6rem" }}
              id="ubi"
            />
          </div>
        </div>
      </div>

      <br />
      <label for="ConfCorreo" className="form-label">
        Nombre Cliente
      </label>
      <input type="text" className="form-control imput" id="ConfCorreo" />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <label for="ubi" className="form-label">
              DNI
            </label>
            <input
              type="number"
              className="form-control"
              style={{ width: "6rem" }}
              id="ubi"
            />
          </div>
          <div className="col">
            <label for="ubi" className="form-label">
              Telefono
            </label>
            <input
              type="number"
              className="form-control"
              style={{ width: "6rem" }}
              id="ubi"
            />
          </div>
        </div>
      </div>
      <br />
      <label for="Usuario" className="form-label">
        Correo eletronico
      </label>
      <input
        type="email"
        className="form-control imput"
        id="Usuario"
        placeholder="Nombre@ejemplo"
      />
      <br />
      <label for="Usuario" className="form-label">
        Direccion
      </label>
      <input type="text" className="form-control imput" id="Usuario" />
      <br />
    </div>
  );
};
export default Parte2;
