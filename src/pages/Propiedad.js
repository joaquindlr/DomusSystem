import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArrayPropiedades from "../constant/propiedades";

const Propiedad = () => {
  const [params, setParam] = useState(useParams());
  const [casa, setCasa] = useState();
  const [logeado, setLogeado] = useState(true);

  const encontrarCasa = () => {
    setCasa(ArrayPropiedades.filter((x) => x.id == params.id)[0]);
  };

  useEffect(() => {
    // console.log(window.matchMedia("(min-width: 1100px)").matches);
    encontrarCasa();
    // console.log(casa);
  }, [casa]);

  return (
    <div
      style={{
        backgroundColor: "#E2F0FF",
        paddingBottom: "2rem",
        paddingTop: "1rem",
      }}
    >
      <div className="ms-5 d-flex">
        <p className="me-1 bg-success text-light fs-5 px-2 py-1 rounded-3">
          {casa && casa.condicion}
        </p>
        <p
          style={{ backgroundColor: "#2D4F81" }}
          className="me-5 text-light fs-5 px-2 py-1 rounded-3"
        >
          {casa && casa.precio}
        </p>
      </div>
      <div
        className="d-md-flex justify-content-center pb-5 px-3 px-md-5"
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <div className="w-100" style={{ maxWidth: "50rem" }}>
          {casa && <img className="rounded-3 w-100 " src={casa.imagen} />}
        </div>
        <div className="mt-3 mt-md-0 ms-1 ms-md-4" style={{ width: "18rem" }}>
          {logeado ? (
            <>
              <div
                className="py-3 px-2"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: 10,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <div className="">
                  <p className="fs-5 fw-bold">Fecha propuesta: </p>
                  <input type="date" className="form-control" />
                  <p className="fs-5 fw-bold mt-4">Mensaje: </p>
                  <textarea class="form-control"></textarea>
                  <button type="button" class="btn btn-primary w-100 mt-3">
                    Solicitar cita
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h3
                style={{
                  color: "white",
                  backgroundColor: "#2D4F81",
                  borderRadius: 15,
                  fontSize: "1rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                }}
              >
                Inicia sesion para pedir un turno
              </h3>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <div style={{ width: "80%" }} className="card p-3">
          <h3>Descripcion</h3>
          <p>
            Descripcion is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h5 className="mt-4">Detalles</h5>
          <div className="d-md-flex">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Cod propiedad:</th>
                  <th scope="row">123456</th>
                </tr>
                <tr>
                  <th scope="row">Condicion:</th>
                  <th scope="row">Alquiler</th>
                </tr>
                <tr>
                  <th scope="row">Tipo:</th>
                  <th scope="row">Casa</th>
                </tr>
                <tr>
                  <th scope="row">Dormitorios:</th>
                  <th scope="row">4</th>
                </tr>
                <tr>
                  <th scope="row">Baños:</th>
                  <th scope="row">2</th>
                </tr>
                <tr>
                  <th scope="row">Lavadero:</th>
                  <th scope="row">Si</th>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Muebles:</th>
                  <th scope="row">Amoblado</th>
                </tr>
                <tr>
                  <th scope="row">Terraza:</th>
                  <th scope="row">No</th>
                </tr>
                <tr>
                  <th scope="row">Cocina:</th>
                  <th scope="row">Si</th>
                </tr>
                <tr>
                  <th scope="row">Capacidad:</th>
                  <th scope="row">6 personas</th>
                </tr>
                <tr>
                  <th scope="row">Patio:</th>
                  <th scope="row">Si</th>
                </tr>
                <tr>
                  <th scope="row">Garage:</th>
                  <th scope="row">Si</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propiedad;
