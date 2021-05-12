import React from "react";

const Login = () => {
    return (
    <>
            <div className="box">
                <div className="container">
                    <div className="form">
                        <h2>Ingresar</h2>
                        <form>
                            <div className="inputBox">
                                <input type="text" placeholder="Usuario"/>
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="Contrasena"/>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Registrarse"/>
                            </div>
                            <p className="forget">Olvidaste tu Contrasena ? <a href="#">Haz click Aquí</a></p>
                            <p className="forget">No tenes una cuenta ? <a href="#">Registrate</a></p>
                        </form>
                    </div>
                </div>
            </div>

    </>
  );
};

export default Login;