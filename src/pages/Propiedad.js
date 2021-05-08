import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArrayPropiedades from "../constant/propiedades";

const Propiedad = () => {
  const [params, setParam] = useState(useParams());
  const [casa, setCasa] = useState();

  const encontrarCasa = () => {
    setCasa(ArrayPropiedades.filter((x) => x.id == params.id)[0]);
  };

  useEffect(() => {
    encontrarCasa();
    console.log(casa);
  }, [casa]);

  return (
    <>
      <h1>Desde propiedades: {params.id}</h1>
      {casa && <img src={casa.imagen} />}
    </>
  );
};

export default Propiedad;
