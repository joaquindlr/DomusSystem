import React, { useState } from "react";
import ArrayPropiedades from "../constant/propiedades";
import CardItem from "../components/CardItem";
import "../components/Cards.css";
import { getAllPropiedades } from "../services/propiedades.service";

function Catalog() {
  window.scrollTo(0, 0);
  const [opFiltro, setOpFiltro] = useState(false);
  const [propiedades, setPropiedades] = useState([]);

  React.useEffect(function () {
    getAllPropiedades()
      .then((res) => setPropiedades(res))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl mt-4 text-center">
        Encontrá tu lugar ideal
      </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Que estas buscando? "
          style={{ width: "50% " }}
        ></input>

        <button className="btn btn-primary ms-2">Buscar</button>
      </div>
      <div className="d-md-flex justify-content-center ">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="" style={{ width: "15rem", paddingTop: "2rem" }}>
            <div style={{}} className="card m-2 p-2">
              <h5>Ordenar por:</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Mayor precio
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Menor precio
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Orden alfabetico
                </label>
              </div>
              <h5 className="mt-3">Filtros:</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Mas populares
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  En venta
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckChecked">
                  En alquiler
                </label>
              </div>
              <div className="d-flex">
                <label className="me-2" htmlFor="flexCheckChecked">
                  Habitaciones:
                </label>
                <input
                  className="iputs-filtros"
                  type="number"
                  id="flexCheckChecked"
                />
              </div>
              <div className="d-flex">
                <label className="me-2" htmlFor="flexCheckChecked">
                  Zona:
                </label>
                <input
                  className="iputs-filtros-zona"
                  type="text"
                  id="flexCheckChecked"
                />
              </div>
              <p className="mt-2 mb-0">Tipo de inmueble</p>
              <select class="form-select" aria-label="Default select example">
                <option selected>-</option>
                <option value="1">Casa</option>
                <option value="2">Departamento</option>
                <option value="3">Oficina</option>
                <option value="4">Cochera</option>
                <option value="4">Salon comercial</option>
              </select>
              <button className="btn btn-primary mt-2">Aplicar filtros</button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="displayGrid">
            {propiedades.map((casa, index) => (
              <CardItem
                title={casa.ubicacion}
                description={casa.descripcion}
                src={casa.imagen}
                price={casa.precio}
                id={casa.id}
                condicion={casa.tipoContrato}
                path={`/propiedad/${casa.id}`}
                key={index}
              />
            ))}
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" style={{ color: "#1c2237" }} href="#">
                  Anterior
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" style={{ color: "#1c2237" }} href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" style={{ color: "#1c2237" }} href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" style={{ color: "#1c2237" }} href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" style={{ color: "#1c2237" }} href="#">
                  Siguiente
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Catalog;
