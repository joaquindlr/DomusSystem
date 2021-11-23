import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VerPropiedad from "../components/VerPropiedad";
import { getAllPropiedades } from "../services/propiedades.service";

const GestionPropiedades = () => {
  const [visiblepropiedad, setVisiblepropiedad] = useState(false);
  const handleVisiblepropiedad = () => {
    setVisiblepropiedad(false);
  };
  const [propiedades, setPropiedades] = React.useState([]);
  const [propSeleccionada, setPropSeleccionada] = React.useState(null);

  function onPressVer(propiedad) {
    setPropSeleccionada(propiedad);
    setVisiblepropiedad(true);
  }

  useEffect(function () {
    getAllPropiedades()
      .then((res) => {
        setPropiedades(res);
      })
      .catch((e) => console.warn(e));
  }, []);

  return (
    <>
      <div className="">
        <VerPropiedad
          visible={visiblepropiedad}
          handleVisible={handleVisiblepropiedad}
          propiedad={propSeleccionada}
        />

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
              marginLeft: "3rem",
              textDecoration: "none",
              color: "black",
              fontSize: "1.5rem",
            }}
          >
            ← Volver a consultas
          </Link>
          <div className="row px-5">
            <div className="col">
              <div
                className="rounded-3 py-5 px-5 shadow "
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "white",
                }}
              >
                <div className="row">
                  <div className="row">
                    <div className="col p-3">
                      <h3>Propiedades</h3>
                      <Link
                        to="/nueva-propiedad"
                        className="btn btn-primary mb-3 mt-3"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-plus-square-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                        </svg>{" "}
                        Nueva Propiedad
                      </Link>
                      <table class="table p-2 me-4">
                        <thead>
                          <tr>
                            <th scope="col">Cod. Propiedad</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Contrato</th>
                            <th scope="col">Num. Cliente</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Disponibilidad</th>
                            <th scope="col" colSpan="3">
                              Acciones
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {propiedades.map((propiedad) => {
                            return (
                              <tr>
                                <td>{propiedad.id}</td>
                                <td>{propiedad.tipo}</td>
                                <td>{propiedad.tipoContrato}</td>
                                <td>{propiedad.nroCliente}</td>
                                <td>{propiedad.precio}</td>
                                <td>
                                  {propiedad.disponibilidad
                                    ? "Disponible"
                                    : "No disponible"}
                                </td>
                                <td>
                                  <button class="btn btn-primary" type="button">
                                    Editar
                                  </button>
                                </td>
                                <td>
                                  <button
                                    onClick={() => onPressVer(propiedad)}
                                    type="button"
                                    className="btn btn-success "
                                  >
                                    Ver
                                  </button>
                                </td>
                                <td>
                                  <button class="btn btn-danger" type="button">
                                    Eliminar
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                          {/* <tr>
                            <td>Propiedad1</td>
                            <td>Casa</td>
                            <td>Alquiler</td>
                            <td>Cliente1</td>
                            <td>$monto1</td>
                            <td>Disponible</td>
                            <td>
                              <button class="btn btn-primary" type="button">
                                Editar
                              </button>
                            </td>
                            <td>
                              <button
                                onClick={() => setVisiblepropiedad(true)}
                                type="button"
                                className="btn btn-success "
                              >
                                Ver
                              </button>
                            </td>
                            <td>
                              <button class="btn btn-danger" type="button">
                                Eliminar
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Propiedad2</td>
                            <td>Departamento</td>
                            <td>Venta</td>
                            <td>Cliente2</td>
                            <td>$monto2</td>
                            <td>Disponible</td>
                            <td>
                              <button class="btn btn-primary" type="button">
                                Editar
                              </button>
                            </td>
                            <td>
                              <button class="btn btn-success" type="button">
                                Ver
                              </button>
                            </td>
                            <td>
                              <button class="btn btn-danger" type="button">
                                Eliminar
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Propiedad3</td>
                            <td>Tipo</td>
                            <td>Alquiler</td>
                            <td>Cliente3</td>
                            <td>$monto3</td>
                            <td>No Disponible</td>
                            <td>
                              <button class="btn btn-primary" type="button">
                                Editar
                              </button>
                            </td>
                            <td>
                              <button class="btn btn-success" type="button">
                                Ver
                              </button>
                            </td>
                            <td>
                              <button class="btn btn-danger" type="button">
                                Eliminar
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Propiedad4</td>
                            <td>Tipo</td>
                            <td>Venta</td>
                            <td>Cliente4</td>
                            <td>$monto4</td>
                            <td>No Disponible</td>
                            <td>
                              <button class="btn btn-primary" type="button">
                                Editar
                              </button>
                            </td>
                            <td>
                              <button class="btn btn-success" type="button">
                                Ver
                              </button>
                            </td>
                            <td>
                              <button class="btn btn-danger" type="button">
                                Eliminar
                              </button>
                            </td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
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

export default GestionPropiedades;
