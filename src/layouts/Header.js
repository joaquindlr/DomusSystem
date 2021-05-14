import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../auth/userContext";

import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const [empleado, setEmpleado] = useState(false);
  const [logeado, setLogeado] = useState(false);
  const [userData, setUserData] = useContext(UserContext);
  useEffect(() => {
    console.log("Context: ", userData);
    if (userData.email != "") {
      console.log("esta logeado");
      setLogeado(true);
      if (userData.empleado) {
        setEmpleado(true);
      }
    } else {
      console.log("no esta logeado");
    }
  }, [userData]);

  const cerrarSesion = () => {
    setUserData({
      email: "",
      pass: "",
      empleado: false,
    });
    setEmpleado(false);
    setLogeado(false);
    history.push("/");
  };

  return (
    <div
      style={{ backgroundColor: "#2D4F81" }}
      className=" d-flex justify-content-between"
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h3 className="text-light py-3 ms-4">Inmobiliaria Domus</h3>
      </Link>
      <div className="mt-3">
        <Link className="text-decoration-none text-light me-4 fs-4" to="#">
          Quienes somos
        </Link>
        <Link className="text-decoration-none text-light me-4 fs-4" to="#">
          Contactenos
        </Link>
        {!logeado ? (
          <>
            <Link
              to="/login"
              style={{ color: "#2D4F81", fontWeight: "bold" }}
              className="btn btn-light fs-5 me-4 ms-4 btn-sm"
            >
              Ingresar
            </Link>
            <Link
              to="/registro"
              style={{ color: "#2D4F81", fontWeight: "bold" }}
              className="btn btn-light fs-5 me-4 btn-sm"
            >
              Registrarse
            </Link>
          </>
        ) : (
          <>
            {empleado && (
              <Link
                to="/menu-empleado"
                style={{
                  color: "#2D4F81",
                  fontWeight: "bold",
                  marginTop: "-0.5rem",
                }}
                className="btn btn-light fs-5 me-4 btn-sm"
              >
                Menu
              </Link>
            )}
            <button
              onClick={() => cerrarSesion()}
              style={{
                color: "#2D4F81",
                fontWeight: "bold",
                marginTop: "-0.5rem",
              }}
              className="btn btn-light fs-5 me-4 btn-sm"
            >
              Cerrar sesion
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
