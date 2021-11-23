import * as React from "react";

import users from "../configs/users";

import { registrarPropiedad } from "../services/propiedades.service";

const NuevaPropiedad = () => {
  const [step, setStep] = React.useState(1);
  const [userId, setUserId] = React.useState("");
  const [error, setError] = React.useState(null);
  const [userEncontrado, setUserEncontrado] = React.useState(null);
  const [nuevaPropiedad, setNuevaPropiedad] = React.useState({
    tipo: "",
    ubicacion: "",
    artefactos: "",
    espacios: "",
    servicios: "",
    tipoContrato: "",
    antiguedad: "",
    amueblado: false,
    disponibilidad: false,
    precio: "",
    imagen: "",
    descripcion: "",
  });

  function onChangeTipo(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      tipo: e.target.value,
    });
  }

  function onChangeUbicacion(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      ubicacion: e.target.value,
    });
  }

  function onChangeArtefactos(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      artefactos: e.target.value,
    });
  }

  function onChangeEspacios(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      espacios: e.target.value,
    });
  }

  function onChangeServicios(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      servicios: e.target.value,
    });
  }

  function onChangeTipoContrato(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      tipoContrato: e.target.value,
    });
  }

  function onChangeAntiguedad(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      antiguedad: e.target.value,
    });
  }

  function onChangeAmueblado(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      amueblado: e.target.checked,
    });
  }

  function onChangeDisponibilidad(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      disponibilidad: e.target.checked,
    });
  }

  function onChangePrecio(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      precio: e.target.value,
    });
  }

  function onChangeImagen(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      precio: e.target.value,
    });
  }

  function onChangeDescripcion(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      descripcion: e.target.value,
    });
  }

  React.useEffect(() => {
    console.log(nuevaPropiedad);
  }, [nuevaPropiedad]);

  function onChangeUserId(event) {
    setUserId(event.target.value);
  }

  function onPressBuscar() {
    if (userId !== "") {
      const userFind = users.find((user) => user.id === parseInt(userId));
      if (userFind) {
        setUserEncontrado(userFind);
        setStep(2);
      } else {
        setError(`Usuario no encontrado`);
      }
    }
  }

  function onPressSiguiente() {
    setStep(3);
  }

  async function onPressRegistrar(e) {
    e.preventDefault();
    try {
      const result = await registrarPropiedad(nuevaPropiedad);
      console.log(result);
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f2f2f2",
          paddingTop: "2rem",
          paddingBottom: "4rem",
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
            {step === 1 ? (
              <div>
                <h2 className="mb-4">Nueva propiedad</h2>
                <label htmlFor="tipo" className="form-label">
                  Ingresa el codigo del cliente:
                </label>
                <input
                  type="text"
                  className="form-control imput"
                  placeholder="Codigo cliente..."
                  id="tipo"
                  onChange={onChangeUserId}
                />
                {error && <p className="text-danger mb-0">{error}</p>}
                <br />
                <button
                  className="btn btn-primary w-100 imput"
                  onClick={onPressBuscar}
                >
                  Buscar
                </button>
              </div>
            ) : null}
            {step === 2 ? (
              <div>
                <h2 className="mb-4">Datos del cliente:</h2>
                <p>Codigo cliente: {userEncontrado.id}</p>
                <p>Tipo de cliente: {userEncontrado.tipo}</p>
                <p>Nombre: {userEncontrado.nombre}</p>
                <p>Dni: {userEncontrado.dni}</p>
                <p>Telefono: {userEncontrado.telefono}</p>
                <p>Direccion: {userEncontrado.direccion}</p>
                <p>Email: {userEncontrado.email}</p>
                <button
                  className="btn btn-primary w-100 imput"
                  onClick={onPressSiguiente}
                >
                  Siguiente
                </button>
              </div>
            ) : null}
            {step === 3 ? (
              <form>
                <h2 className="mb-4">Cargar datos de la propiedad</h2>
                <label htmlFor="tipo" className="form-label">
                  Tipo:
                </label>
                <input
                  type="text"
                  className="form-control imput"
                  placeholder="Departamento..."
                  id="tipo"
                  onChange={onChangeTipo}
                />
                <br />
                <label htmlFor="tipo" className="form-label">
                  Ubicacion:
                </label>
                <input
                  type="text"
                  className="form-control imput"
                  placeholder=""
                  id="tipo"
                  onChange={onChangeUbicacion}
                />
                <br />
                <label htmlFor="tipo" className="form-label">
                  Artefactos:
                </label>
                <input
                  type="text"
                  className="form-control imput"
                  placeholder=""
                  id="tipo"
                  onChange={onChangeArtefactos}
                />
                <br />
                <label htmlFor="tipo" className="form-label">
                  Espacios:
                </label>
                <input
                  type="text"
                  className="form-control imput"
                  placeholder=""
                  id="tipo"
                  onChange={onChangeEspacios}
                />
                <br />
                <label htmlFor="tipo" className="form-label">
                  Servicios:
                </label>
                <input
                  type="text"
                  className="form-control imput"
                  placeholder=""
                  id="tipo"
                  onChange={onChangeServicios}
                />
                <br />
                <label htmlFor="tipo" className="form-label">
                  Tipo contrato:
                </label>
                <input
                  type="text"
                  className="form-control imput"
                  placeholder=""
                  id="tipo"
                  onChange={onChangeTipoContrato}
                />
                <br />
                <label htmlFor="tipo" className="form-label">
                  Antiguedad:
                </label>
                <input
                  type="text"
                  className="form-control imput"
                  placeholder=""
                  id="tipo"
                  onChange={onChangeAntiguedad}
                />
                <br />
                <label htmlFor="tipo" className="form-label">
                  Amueblado:
                </label>
                <input
                  type="text"
                  className="form-control imput"
                  placeholder=""
                  id="tipo"
                  onChange={onChangeAmueblado}
                />
                <br />
                <label htmlFor="tipo" className="form-label">
                  Disponibilidad:
                </label>
                <input
                  type="text"
                  className="form-control imput"
                  placeholder=""
                  id="tipo"
                  onChange={onChangeDisponibilidad}
                />
                <br />
                <label htmlFor="tipo" className="form-label">
                  Precio:
                </label>
                <input
                  type="text"
                  className="form-control imput"
                  placeholder=""
                  id="tipo"
                  onChange={onChangePrecio}
                />
                <br />
                <label htmlFor="tipo" className="form-label">
                  Imagen:
                </label>
                <input
                  type="text"
                  className="form-control imput"
                  placeholder=""
                  id="tipo"
                  onChange={onChangeImagen}
                />
                <br />
                <label htmlFor="tipo" className="form-label">
                  Descripcion:
                </label>
                <textarea
                  type="text"
                  className="form-control imput"
                  placeholder=""
                  id="tipo"
                  onChange={onChangeDescripcion}
                />
                <button
                  className="btn btn-primary w-100 imput"
                  onClick={onPressRegistrar}
                >
                  Confirmar
                </button>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevaPropiedad;
