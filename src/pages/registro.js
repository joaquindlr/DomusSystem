import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";

const Registro = () => {
  const { register, handleSubmit } = useForm();

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorRePassword, setErrorRePassword] = useState(false);

  const history = useHistory();

  const onSubmit = (data) => {
    validar(data);
    console.log(data);
  };

  const validar = (data) => {
    // console.log("asdasd", data.contraseña, data.email, data);
    if (data.contraseña === "") {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
    if (data.email === "") {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
    if (data.recontraseña === "") {
      setErrorRePassword(true);
    } else {
      setErrorRePassword(false);
    }
  };

  return (
    <div
      className="rounded-3 py-5"
      style={{
        height: "40rem",
        display: "grid",
        placeItems: "center",
        backgroundColor: "white",
      }}
    >
      <div>
        <h2 className="mb-4 text-center">Registrarse</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              defaultValue=""
              name="email"
              {...register("email")}
            />
            {errorEmail && (
              <p className="text-danger fw-bold">El email esta vacio</p>
            )}
          </div>
          <div class="mb-3">
            <label for="contraseña" class="form-label">
              Contraseña
            </label>
            <input
              type="password"
              class="form-control"
              name="contraseña"
              id="contraseña"
              {...register("contraseña")}
            />
            {errorPassword && (
              <p className="text-danger fw-bold">La contraseña esta vacia</p>
            )}
          </div>
          <div class="mb-3">
            <label for="contraseña" class="form-label">
              Repita contraseña
            </label>
            <input
              type="password"
              class="form-control"
              name="recontraseña"
              id="recontraseña"
              {...register("recontraseña")}
            />
            {errorRePassword && (
              <p className="text-danger fw-bold">
                Repetir contraseña esta vacio
              </p>
            )}
          </div>
          <button type="submit" className="btn mb-2 btn-primary w-100">
            Registrarse
          </button>
          <Link
            className=""
            to="/login"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Iniciar sesion
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Registro;
