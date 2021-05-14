import React, {useState} from "react";
import { Link } from "react-router-dom";
import VerPropiedad from "../components/VerPropiedad";


const GestionPropiedades = () => {
    
    const [visible, setVisible] = useState(false);
    const handleVisible = () => {
      setVisible(false);
    };

    const [visiblepropiedad, setVisiblepropiedad] = useState(false);
    const handleVisiblepropiedad = () => {
      setVisiblepropiedad(false);
    };
  
    return (
    <>
      <div className="container">
         <VerPropiedad visible={visiblepropiedad} handleVisible={handleVisiblepropiedad} />
         
        <div
          style={{
            display: "grid",
            placeItems: "center",
            backgroundColor: "#E2F0FF",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
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
                       <Link to="/nueva-propiedad" className="btn btn-primary mb-3">
                          {" "}
                          Nuevo
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
                            <th scope="col" colSpan="3">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">Propiedad1</td>
                            <td>Casa</td>
                            <td>Alquiler</td>
                            <td>Cliente1</td>
                            <td>$monto1</td>
                            <td>Disponible</td>
                            <td>
                            <button class="btn btn-primary" type="button">Editar</button>
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
                            <button class="btn btn-danger" type="button">Eliminar</button>
                            </td>
                          </tr>
                          <tr>
                          <td scope="row">Propiedad2</td>
                            <td>Departamento</td>
                            <td>Venta</td>
                            <td>Cliente2</td>
                            <td>$monto2</td>
                            <td>Disponible</td>
                            <td>
                            <button class="btn btn-primary" type="button">Editar</button>
                            </td>
                            <td>
                            <button class="btn btn-success" type="button">Ver</button>
                            </td>
                            <td>
                            <button class="btn btn-danger" type="button">Eliminar</button>
                            </td>
                          </tr>
                          <tr>
                          <td scope="row">Propiedad3</td>
                            <td>Tipo</td>
                            <td>Alquiler</td>
                            <td>Cliente3</td>
                            <td>$monto3</td>
                            <td>No Disponible</td>
                            <td>
                            <button class="btn btn-primary" type="button">Editar</button>
                            </td>
                            <td>
                            <button class="btn btn-success" type="button">Ver</button>
                            </td>
                            <td>
                            <button class="btn btn-danger" type="button">Eliminar</button>
                            </td>
                          </tr>
                          <tr>
                          <td scope="row">Propiedad4</td>
                            <td>Tipo</td>
                            <td>Venta</td>
                            <td>Cliente4</td>
                            <td>$monto4</td>
                            <td>No Disponible</td>
                            <td>
                            <button class="btn btn-primary" type="button">Editar</button>
                            </td>
                            <td>
                            <button class="btn btn-success" type="button">Ver</button>
                            </td>
                            <td>
                            <button class="btn btn-danger" type="button">Eliminar</button>
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
      </div>
    </>
  );
};

export default GestionPropiedades;
