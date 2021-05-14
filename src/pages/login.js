import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../auth/userContext";

import users from "../configs/users";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [usuario, setUsuario] = useState({});
  const history = useHistory();

  const [userData, setUserData] = useContext(UserContext);

  const onSubmit = (data) => {
    validar(data);
  };

  // useEffect(() => {
  //   if (usuario != {}) {
  //     console.log("guardado: ", usuario);
  //   }
  // }, [usuario]);

  const validar = (data) => {
    // console.log("asdasd", data.contraseña, data.email, data);
    if (data.contraseña === "") {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
      logear(data);
    }
    if (data.email === "") {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
      logear(data);
    }
  };

  const correcto = (user) => {
    setUsuario(user);
    setUserData(user);
    if (user.empleado) {
      history.push("/menu-empleado");
    } else {
      history.push("/");
    }
  };

  const logear = (data) => {
    // console.log("entrada", data);
    users.map((user) => {
      // console.log(user.pass, parseInt(data.contraseña));
      if (data.email === user.email) {
        if (parseInt(data.contraseña) === user.pass) {
          correcto(user);
        }
      }
    });
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
          <h2 className="mb-4 text-center">Iniciar sesion</h2>
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
            <button type="submit" className="btn btn-primary w-100">
              Iniciar sesion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
