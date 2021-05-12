import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const onSubmit = (data) => {
    validar(data);
  };

  const validar = (data) => {
    console.log("asdasd", data.contraseña, data.email, data);
    if (data.contraseña == "") {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
    if (data.email == "") {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  return (
    <div
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#f2f2f2",
        paddingTop: "2rem",
      }}
    >
      <div
        className="rounded-3 py-5 shadow "
        style={{
          width: "30rem",
          height: "30rem",
          display: "grid",
          placeItems: "center",
          backgroundColor: "white",
        }}
      >
        <div>
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
              {errorEmail && <p>El email esta vacio</p>}
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
              {errorPassword && <p>La contraseña esta vacia</p>}
            </div>
            <button type="submit" class="btn btn-primary">
              Iniciar sesion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
