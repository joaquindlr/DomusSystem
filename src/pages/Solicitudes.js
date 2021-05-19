import React from "react";

const Solicitudes = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f2f2f2",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <div
          className="rounded-3 py-5 shadow "
          style={{
            width: "50rem",
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
            <h2>Solicitudes de citas</h2>
            <br></br>
            <div className="container">
              <div className="row">
                <div className="col">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Vista Previa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline"
                            disabled
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-envelope"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                            </svg>
                          </button>
                        </td>
                        <td>19/05/2021</td>
                        <td>Usuario1</td>
                        <td>Hola quisiera solicitar una cita...</td>
                      </tr>
                      <tr>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline"
                            disabled
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-envelope"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                            </svg>
                          </button>
                        </td>
                        <td>15/04/2021</td>
                        <td>Usuario2</td>
                        <td>Hola quisiera solicitar una cita...</td>
                      </tr>
                      <tr class="table-secondary">
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline"
                            disabled
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-envelope-open"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
                            </svg>
                          </button>
                        </td>
                        <td>08/02/2021</td>
                        <td>Usuario3</td>
                        <td>Buenas tardes quisiera...</td>
                      </tr>
                      <tr>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline"
                            disabled
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-envelope-open"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
                            </svg>
                          </button>
                        </td>
                        <td>19/12/2020</td>
                        <td>Usuario4</td>
                        <td>Hola, quisiera solicitar una cita...</td>
                      </tr>
                      <tr>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline"
                            disabled
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-envelope-open"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
                            </svg>
                          </button>
                        </td>
                        <td>19/12/2020</td>
                        <td>Usuario4</td>
                        <td>Hola, quisiera solicitar una cita...</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col">
                  <table className="table table-bordered border-dark ">
                    <thead>
                      <tr>
                        <th scope="col" colSpan="2" class="table-dark">
                          Mensaje
                        </th>
                      </tr>
                      <tr>
                        <th scope="col">De:</th>
                        <td>Usuario3</td>
                      </tr>
                      <tr>
                        <th scope="col">Fecha:</th>
                        <td>08/02/2021</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="2">
                          Buenas tardes quisiera solicitar una cita...
                          <td>Saludos</td>
                        </td>
                      </tr>
                      <tr>
                        <th scope="col">Fecha Propuesta:</th>
                        <td>10/02/2021</td>
                      </tr>
                      <tr>
                        <th scope="col" colSpan="2">
                          Información de usuario
                        </th>
                      </tr>
                      <tr>
                        <th scope="col">Número de contacto:</th>
                        <td>123456</td>
                      </tr>
                      <tr>
                        <th scope="col">Correo:</th>
                        <td>correo@hotmail.com</td>
                      </tr>
                      <tr>
                        <th scope="col" colSpan="2">
                          Información de Propiedad seleccionada
                        </th>
                      </tr>
                      <tr>
                        <th scope="col">Codigo de Propiedad:</th>
                        <td>casa1</td>
                      </tr>
                      <tr>
                        <th scope="col">Codigo de Agente:</th>
                        <td>Agente1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Solicitudes;
