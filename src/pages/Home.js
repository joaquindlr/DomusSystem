 import React from 'react'
 import { Link } from 'react-router-dom'
 import "./Home.css"
 import CardPropiedad from "../components/CardPropiedad";
 import ArrayPropiedades from "../constant/propiedades";
import {GiFamilyHouse,GiPadlock} from "react-icons/gi"
import {IconContext} from "react-icons/lib"
import {RiCoinsFill} from "react-icons/ri"

 function Home() {
     return (
         <>
         {/* HERO SECTION */}
         <div className="hero-container">
             <h1>COMPRATE UNA CASA</h1>
             <p>Una casa? En esta economía? mm bueno</p>
             <Link to="/propiedad/1" className="hero-link">
                 APRETA ACA PAPU
             </Link>
         </div>
           {/* BENEFITS SECTION */}
        <div className="container-fluid" style={{backgroundColor:"teal"}}>
        <div className="row ">
        <IconContext.Provider value={{ color: 'white', size:"75px"}}> 
        <div className="col">
         <div className="card mx-auto" style={{width:"15rem",
                                            border:"none",                                        
                                              display:"flex", 
                                             flex:"1",
                                             alignItems:"center",
                                            marginTop:"80px",
                                            backgroundColor:"teal"}}>
            {/* <img src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390" class="card-img-top" alt="..."/> */}
            <RiCoinsFill></RiCoinsFill>          
        
            <div className="card-body">
                <h5 className="card-title text-white" style={{textAlign:"center"}}>Hi this is title</h5>
                <p className="card-text text-white" style={{textAlign:"center"}} >
                Some quick example text to build on the card title and 
                make up the bulk of the card's content.
                </p>
            </div> 
         </div> 
        </div> 

        <div className="col">
         <div className="card mx-auto" style={{width:"15rem",
                                            border:"none",                                        
                                            display:"flex", 
                                            flex:"1",
                                            alignItems:"center",
                                            marginTop:"80px",
                                            backgroundColor:"teal"
                                            
                                            }}>
            {/* <img src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390" class="card-img-top" alt="..."/> */}
            <GiFamilyHouse></GiFamilyHouse>
            <div className="card-body">
                <p className="card-text text-white" style={{textAlign:"center"}} >
                Some quick example text to build on the card title and 
                make up the bulk of the card's content.
                </p>
            </div> 
         </div> 
        </div> 

        <div className="col">
         <div className="card mx-auto" style={{width:"15rem",
                                            border:"none",                                        
                                            display:"flex", 
                                            flex:"1",
                                            alignItems:"center",
                                            marginTop:"80px",
                                            backgroundColor:"teal",
                                            marginBottom:"80px",
                                            }}>
            {/* <img src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390" class="card-img-top" alt="..."/> */}
           
            <GiPadlock ></GiPadlock>
           
            <div className="card-body">
                <p className="card-text text-white" style={{textAlign:"center"}} >
                Some quick example text to build on the card title and 
                make up the bulk of the card's content.
                </p>
            </div> 
         </div> 

        </div>           
        </IconContext.Provider>
        </div>
        </div>

{/* CASITASSS */}

<div className="container-fluid" style={{backgroundColor:"white"}}>
<h5>Aca elegis que tipo de casita te gusta </h5>
<div className="row ">

        <div className="col">
         <div className="card mx-auto" style={{width:"15rem",                                     
                                             display:"flex", 
                                             flex:"1",
                                             alignItems:"center",
                                             marginTop:"80px"}}>
            <img src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390" class="card-img-top" alt="..."/> 
            <div className="card-body">
                <h5 className="card-title" style={{}}>Hi this is title</h5>
                <p className="card-text" style={{}} >
                Some quick example text to build on the card title and 
                make up the bulk of the card's content.
                </p>
            </div> 
         </div> 
        </div> 
        <div className="col">
         <div className="card mx-auto" style={{width:"15rem",                                     
                                             display:"flex", 
                                             flex:"1",
                                             alignItems:"center",
                                             marginTop:"80px"}}>
            <img src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390" class="card-img-top" alt="..."/> 
            <div className="card-body">
                <h5 className="card-title" style={{}}>Hi this is title</h5>
                <p className="card-text" style={{}} >
                Some quick example text to build on the card title and 
                make up the bulk of the card's content.
                </p>
            </div> 
         </div> 
        </div> 
</div>
</div>






















          {/* {ArrayPropiedades.map((casa, index) => (
            <CardPropiedad
              imagen={casa.imagen}
              precio={casa.precio}
              id={casa.id}
              condicion={casa.condicion}
              key={index}
            />
          ))} */}

         </>
     )
 }

 export default Home





// import CardPropiedad from "../components/CardPropiedad";
// import ArrayPropiedades from "../constant/propiedades";
    // <div style={{ backgroundColor: "#E2F0FF", overflowX: "scroll" }}>
    //    <div className="d-sm-flex ">
    //      {ArrayPropiedades.map((casa, index) => (
    //        <CardPropiedad
    //          imagen={casa.imagen}
    //          precio={casa.precio}
    //          id={casa.id}
    //          condicion={casa.condicion}
    //          key={index}
    //        />
    //      ))}
    //    </div>
    // </div>
 
