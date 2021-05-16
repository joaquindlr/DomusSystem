import React from "react";
import { Link } from "react-router-dom";
const ConsultaEmpleado = () => {
  return (
    <>
      <div className="">
        <div
          style={{
            display: "grid",
            placeItems: "center",
            backgroundColor: "#E2F0FF",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <Link
            to="/consultas"
            style={{
              placeSelf: "flex-start",
              marginLeft: "1rem",
              textDecoration: "none",
              color: "black",
              fontSize: "1.5rem",
            }}
          >
            ← Volver a consultas
          </Link>
          <div className="row">
            <div className="col m-3">
              <div
                className="rounded-3 py-5 shadow "
                style={{
                  width: "65rem",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "white",
                }}
              >
                <div className="row m-3">
                  <h3>Empleados</h3>
                  <div className="row">
                    <div className="col mt-2 mb-2">
                      <Link
                        to="/registro-empleado"
                        className="btn btn-primary "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-person-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                          <path
                            fill-rule="evenodd"
                            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>{" "}
                        Agregar empleado
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <table class="table p-2 ms-2">
                      <thead>
                        <tr>
                          <th scope="col">Cod. Cliente</th>
                          <th scope="col">Tipo</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Estado</th>
                          <th scope="col" colSpan="3">
                            Acciones
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row">Cliente1</td>
                          <td>Prticular</td>
                          <td>Juan Dominguez</td>
                          <td>Activo</td>
                          <td>
                            <button className="btn btn-primary" type="button">
                              Editar
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-success" type="button">
                              Ver
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-danger" type="button">
                              Eliminar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">Cliente2</td>
                          <td>Corporativo</td>
                          <td>Martina Perez</td>
                          <td>Activo</td>
                          <td>
                            <button className="btn btn-primary" type="button">
                              Editar
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-success" type="button">
                              Ver
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-danger" type="button">
                              Eliminar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">Cliente3</td>
                          <td>Corporativo</td>
                          <td>Natalia Rivero</td>
                          <td>Inactivo</td>
                          <td>
                            <button className="btn btn-primary" type="button">
                              Editar
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-success" type="button">
                              Ver
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-danger" type="button">
                              Eliminar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">Cliente4</td>
                          <td>Particular</td>
                          <td>Carolina Ruiz</td>
                          <td>Activo</td>
                          <td>
                            <button className="btn btn-primary" type="button">
                              Editar
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-success" type="button">
                              Ver
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-danger" type="button">
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConsultaEmpleado;
