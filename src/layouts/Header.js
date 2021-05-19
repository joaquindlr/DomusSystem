import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiBuildingHouse } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useHistory } from "react-router-dom";
import { UserContext } from "../auth/userContext";

function Header() {
  //Manejo de navbar para login
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

  //manejo de navbar para responsiveness
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="">
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container ">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <BiBuildingHouse className="navbar-icon" />
              DOMUS
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}{" "}
              {/* Cambia el icono a desplegar/cerrar menú */}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/nosotros-info"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Nosotros
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contacto' className='nav-links'
                 onClick={closeMobileMenu}>
                  Contacto
                </Link>
              </li>
              {!logeado ? (
                <>
                  <li>
                    <Link
                      to="/Login"
                      className="nav-links-hlight"
                      onClick={closeMobileMenu}
                    >
                      Iniciar sesion
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Registro"
                      className="nav-links-hlight-secondary"
                      onClick={closeMobileMenu}
                    >
                      Registrarse
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {empleado && (
                    <li>
                      <Link
                        to="/Menu-empleado"
                        className="nav-links-hlight"
                        onClick={closeMobileMenu}
                      >
                        Menú
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link
                      to="/"
                      className="nav-links-hlight-secondary"
                      onClick={
                        (closeMobileMenu, cerrarSesion)
                      } /*El menu en móbil no se cierra cuando cerrás sesión no se por qué xd */
                    >
                      Cerrar sesión
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Header;
