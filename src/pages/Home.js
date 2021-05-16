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
                                            backgroundColor:"teal",
                                           }}>
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

<div className="container-fluid" style={{backgroundColor:"white", flexFlow:"column",
                                        maxWidth:"1120px", margin:"0 auto"}}>
<p className="fs-2" style={{marginTop:"50px", marginBottom:"50px", 
                             textAlign:"center",
                             fontWeight:"bold"}}>
                            Aca elegis que tipo de casita te gusta
                            </p>
<div className="row g-0" >
        
        <div className="col" > 
         <div className="card mx-auto" style={{width:"22rem",                               
                                             display:"flex", 
                                             flex:"1",
                                             alignItems:"center",
                                            marginBottom:"80px" ,                                            
                                            boxShadow:" 0 2px 10px gray",
                                            overflow:"hidden"
                                            }}>
            <Link to="/" style={{color:"black", textDecoration:"none"}}> 
            <img src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390" class="imgcard-top" alt="..."/> 
            <div className="card-body">
                <h5 className="card-title" style={{}}>Frente al mar</h5>
                <p className="card-text" style={{}} >
                aca les va un poco de informacion confidencial,todas
                las cartas tienen que tener 3 lineas
                </p>
            </div> 
            </Link>
            </div>                  
         </div> 

         <div className="col" > 
         <div className="card mx-auto" style={{width:"22rem",                               
                                             display:"flex", 
                                             flex:"1",                                          
                                             alignItems:"center",
                                            marginBottom:"80px" ,                                            
                                            boxShadow:" 0 2px 10px gray",
                                            overflow:"hidden"
                                            }}>
            <Link to="/" style={{color:"black", textDecoration:"none"}}> 
            <img src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390" class="imgcard-top" alt="..."/> 
            <div className="card-body" style={{height:"100%"}}>
                <h5 className="card-title" style={{}}>Hi this is title</h5>
                <p className="card-text" style={{}} >
                Porque o sino pasa esto, y se ve todo deforme xd
                </p>
            </div> 
            </Link>
            </div>                  
         </div> 
      
         <div className="col" > 
         <div className="card mx-auto" style={{width:"22rem",                               
                                             display:"flex", 
                                             flex:"1",
                                             alignItems:"center",
                                            marginBottom:"80px" ,                                            
                                            boxShadow:" 0 2px 10px gray",
                                            overflow:"hidden"
                                            }}>
            <Link to="/" style={{color:"black", textDecoration:"none"}}> 
            <img src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390" class="imgcard-top" alt="..."/> 
            <div className="card-body">
                <h5 className="card-title" style={{}}>Hi this is title</h5>
                <p className="card-text" style={{}} >
                Pero los profesores no tienen por qué saberlo y no 
                se como se arregla asi que así queda
                </p>
            </div> 
            </Link>
            </div>                  
         </div> 

         <div className="col" > 
         <div className="card mx-auto" style={{width:"22rem",                               
                                             display:"flex", 
                                             flex:"1",
                                             alignItems:"center",
                                            marginBottom:"80px" ,                                            
                                            boxShadow:" 0 2px 10px gray",
                                            overflow:"hidden"
                                            }}>
            <Link to="/" style={{color:"black", textDecoration:"none"}}> 
            <img src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390" class="imgcard-top" alt="..."/> 
            <div className="card-body">
                <h5 className="card-title" style={{}}>Hi this is title</h5>
                <p className="card-text" style={{}} >
                Some quick example text to build on the card title and 
                make up the bulk of the card's content.
                </p>
            </div> 
            </Link>
            </div>                  
         </div> 

         <div className="col" > 
         <div className="card mx-auto" style={{width:"22rem",                               
                                             display:"flex", 
                                             flex:"1",
                                             alignItems:"center",
                                            marginBottom:"80px" ,                                            
                                            boxShadow:" 0 2px 10px gray",
                                            overflow:"hidden"
                                            }}>
            <Link to="/" style={{color:"black", textDecoration:"none"}}> 
            <img src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390" class="imgcard-top" alt="..."/> 
            <div className="card-body">
                <h5 className="card-title" style={{}}>Hi this is title</h5>
                <p className="card-text" style={{}} >
                Some quick example text to build on the card title and 
                make up the bulk of the card's content.
                </p>
            </div> 
            </Link>
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
 
