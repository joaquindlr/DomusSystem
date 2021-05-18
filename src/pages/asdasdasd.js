import React, { useState } from "react";
import CardPropiedad from "../components/CardPropiedad";
import ArrayPropiedades from "../constant/propiedades";
import { useForm } from "react-hook-form";

const Home = () => {
  const [mostrar, setMostrar] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log("hola:", data.eleccion);

  return (
    <div style={{ backgroundColor: "#E2F0FF", overflowX: "scroll" }}>
      <div className="d-sm-flex ">
        {ArrayPropiedades.map((casa, index) => (
          <CardPropiedad
            imagen={casa.imagen}
            precio={casa.precio}
            id={casa.id}
            condicion={casa.condicion}
            key={index}
          />
        ))}
      </div>
      <div>
        <select className="form-control w-25" {...register("eleccion")}>
          <option value={1}>female</option>
          <option value={2}>male</option>
          <option value={3}>other</option>
        </select>
        <button onClick={handleSubmit(onSubmit)}>Enviar</button>
      </div>
      {mostrar && <CardPropiedad className="ms-4">holas</CardPropiedad>}
    </div>
  );
};

export default Home;
