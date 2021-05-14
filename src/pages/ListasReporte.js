import React, { useState } from "react";
import ReporteVenta from "../components/ReporteVenta";
import ReporteAlquiler from "../components/ReporteAlquiler";
import ReporteCliente from "../components/ReporteCliente";
import ReportePropiedad from "../components/ReportePropiedad";
import { useForm } from "react-hook-form";

const ListasReporte = () => {

  const { register, handleSubmit } = useForm();

  const [valor, setValor] = useState();

  const onSubmit = (data) => {
    console.log("hola:", data.eleccion);
    setValor(data.eleccion);
  };

  return (
    <>
      <div className="container">
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
                <div className="row mx-auto">
                  <div className="col-4 mx-0">
                    <div className="input-group mb-3">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Tipo
                      </label>
                      <select
                        class="form-select"
                        id="inputGroupSelect01"
                        {...register("eleccion")}
                      >
                        <option selected>opciones...</option>
                        <option value={1}>Ventas</option>
                        <option value={2}>Alquiler</option>
                        <option value={3}>Clientes</option>
                        <option value={4}>Propiedades</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6 mx-0">
                    <div class="input-group mb-3">
                    <span class="input-group-text">Desde</span>
                      <input
                        type="date"
                        class="form-control"
                      />
                      <span class="input-group-text">Hasta</span>
                      <input
                        type="date"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-2 mx-0">
                    <button
                      className="btn btn-primary"
                      onClick={handleSubmit(onSubmit)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="row mx-auto p-0 m-0">
                  {valor == 1 && <ReporteVenta/>}
                  {valor == 2 && <ReporteAlquiler/>}
                  {valor == 3 && <ReporteCliente/>}
                  {valor == 4 && <ReportePropiedad/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListasReporte;
