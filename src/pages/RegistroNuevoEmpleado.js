import React from "react";

const RegistroNuevoEmpleado = () => {
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
            <form className="">
              <label for="AyN" className="form-label">
                Apellido y Nombre
              </label>
              <input type="email" className="form-control imput" id="AyN" />
              <br />
              <label for="DNI" className="form-label">
                DNI
              </label>
              <input type="Number" className="form-control imput" id="DNI" />
              <br />
              <label for="Telef" className="form-label">
                Telefono
              </label>
              <input
                type="Number"
                className="form-control imput"
                id="Telef"
                placeholder="+54 "
              />
              <br />
              <label for="Fnacim" className="form-label">
                Fecha de nacimiento
              </label>
              <input type="date" className="form-control imput" id="Fnacim" />
              <br />
              <label for="PyC" className="form-label">
                Provincia y Ciudad
              </label>
              <input type="text" className="form-control imput" id="PyC" />
              <br />
              <label for="correo" className="form-label">
                Direccion de correo electronico
              </label>
              <input
                type="text"
                className="form-control imput"
                id="correo"
                placeholder="Nombre@ejemplo"
              />
              <br />
              <label for="ConfCorreo" className="form-label">
                Confirmar correo electronico
              </label>
              <input
                type="text"
                className="form-control imput"
                id="ConfCorreo"
                placeholder="Nombre@ejemplo"
              />
              <br />
              <label for="inputState" className="form-label"></label>
              <label for="inputCity" className="form-label">
                Genero
              </label>
              <select id="inputState" className="form-select imput">
                <option>...</option>
                <option selected>Femenino</option>
                <option selected>Masculino</option>
                <option selected>Prefiero no decirlo</option>
              </select>
              <br />
              <label for="Usuario" className="form-label">
                Usuario
              </label>
              <input type="text" className="form-control imput" id="Usuario" />
              <br />
              <label for="Contraseña" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control imput"
                id="Contraseña"
              />
              <br />
              <label for="Confcontraseña" className="form-label">
                Confirme contraseña
              </label>
              <input
                type="password"
                className="form-control imput"
                id="Confcontraseña"
              />
              <br />
              <br />
              <button type="submit" className="btn btn-primary imput">
                Registrar Empleado
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistroNuevoEmpleado;
