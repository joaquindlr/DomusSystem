import * as React from "react";

import users from "../configs/users";
import { useHistory } from "react-router-dom";
import { registrarPropiedad } from "../services/propiedades.service";

const NuevaPropiedad = () => {
  const history = useHistory();
  const [step, setStep] = React.useState(1);
  const [userId, setUserId] = React.useState("");
  const [error, setError] = React.useState(null);
  const [userEncontrado, setUserEncontrado] = React.useState(null);
  const [nuevaPropiedad, setNuevaPropiedad] = React.useState({
    tipo: null,
    ubicacion: null,
    artefactos: false,
    espacios: null,
    servicios: null,
    tipoContrato: null,
    antiguedad: null,
    amueblado: false,
    disponibilidad: false,
    precio: null,
    imagen: null,
    descripcion: null,
    nroCliente: null,
  });
  const [propiedadError, setPropiedadError] = React.useState(null);

  function validarCampos() {
    for (const key in nuevaPropiedad) {
      if (nuevaPropiedad[key] === null) {
        return false;
      } else {
        return true;
      }
    }
  }

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

  function onChangePrecio(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      precio: e.target.value,
    });
  }

  function onChangeImagen(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      imagen: e.target.value,
    });
  }

  function onChangeDescripcion(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      descripcion: e.target.value,
    });
  }

  function onChangeAmueblado(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      amueblado: e.target.checked,
    });
  }

  function onChangeArtefactos(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      artefactos: e.target.checked,
    });
  }
  function onChangeDisponibilidad(e) {
    setNuevaPropiedad({
      ...nuevaPropiedad,
      disponibilidad: e.target.checked,
    });
  }

  React.useEffect(() => {}, [nuevaPropiedad]);

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
    setNuevaPropiedad({ ...nuevaPropiedad, nroCliente: userId });
    setStep(3);
  }

  async function onPressRegistrar(e) {
    e.preventDefault();
    if (!validarCampos()) {
      setPropiedadError("Revise los campos de la propiedad");
      return;
    }
    try {
      await registrarPropiedad(nuevaPropiedad);
      history.push("/gestion-propiedades");
    } catch (e) {
      console.warn(e);
      setPropiedadError("Revise los campos de la propiedad");
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
                <br />
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={nuevaPropiedad.artefactos}
                  id="defaultCheck1"
                  onChange={onChangeArtefactos}
                />
                <label
                  className="form-check-label ms-3 mb-3"
                  for="defaultCheck1"
                >
                  Artefactos
                </label>
                <br />
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={nuevaPropiedad.amueblado}
                  id="defaultCheck1"
                  onChange={onChangeAmueblado}
                />
                <label
                  className="form-check-label ms-3 mb-3"
                  for="defaultCheck1"
                >
                  Amueblado
                </label>
                <br />
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={nuevaPropiedad.disponibilidad}
                  id="defaultCheck1"
                  onChange={onChangeDisponibilidad}
                />
                <label
                  className="form-check-label ms-3 mb-3"
                  for="defaultCheck1"
                >
                  Disponibilidad
                </label>
                <br />
                <p className="text-danger">{propiedadError}</p>
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
