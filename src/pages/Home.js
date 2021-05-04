import React from "react";
import CardPropiedad from "../components/CardPropiedad";

const Home = () => {
  const ArrayPropiedades = [
    {
      precio: "$7M",
      imagen: "https://i.blogs.es/c68014/casa-3d/450_1000.jpeg",
    },
    ,
    {
      precio: "$10M",
      imagen:
        "https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560",
    },
    {
      precio: "$12M",
      imagen:
        "https://www.casasplanet.com/blog/wp-content/uploads/2018/07/2-1.png",
    },
    {
      precio: "$12M",
      imagen:
        "https://www.casasplanet.com/blog/wp-content/uploads/2018/07/2-1.png",
    },
    {
      precio: "$12M",
      imagen:
        "https://www.casasplanet.com/blog/wp-content/uploads/2018/07/2-1.png",
    },
  ];

  return (
    <div style={{ backgroundColor: "#E2F0FF", overflowX: "scroll" }}>
      <div className="d-sm-flex ">
        {ArrayPropiedades.map((casa, index) => (
          <CardPropiedad
            imagen={casa.imagen}
            precio={casa.precio}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
