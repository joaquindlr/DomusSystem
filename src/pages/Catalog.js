import React,{useState} from 'react'
import CardPropiedad from "../components/CardPropiedad";
import ArrayPropiedades from "../constant/propiedades";
import CardItem from '../components/CardItem';
import "../components/Cards.css"

function Catalog() {
    window.scrollTo(0, 0);
    const [opFiltro,setOpFiltro]= useState(false);
   
    return (
        <>
        
   <div style={{    
    display:"flex", flexDirection:"column", alignItems:"center"}}>

    <h1 className="font-bold text-2xl mt-4" > Encontrá tu lugar ideal</h1>  
   
    <div style={{width:"100%", display:"flex",flexDirection:"row",  justifyContent:"center", marginTop:"4rem" }}>
    <a className="btn btn-primary ms-5 me-1" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
      filtro</a>
        <input type="text" className="form-control" placeholder="Username" style={{width:"50% "}}></input>

        <button className="btn btn-primary" style={{margin:"0 0 0 2px"}} onclick={()=> setOpFiltro(true)}> search </button>   
    </div>
    {opFiltro ? (
    <div className="" id="multiCollapseExample1" style={{width:"70%"}}>
      <div className="card card-body" >
        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
      </div>)
    :(null )  
    
    }

    <div className="displayGrid">      
    {ArrayPropiedades.map((casa, index) => (
                
               <CardItem
                title={casa.titulo}
                description={casa.descripcion}
                src={casa.imagen}
                price={casa.precio}
                id={casa.id}
                condicion={casa.condicion}
                path={`/propiedad/${casa.id}`}
                key={index}
                /> 
                 
          ))}
   </div>  

   <nav aria-label="Page navigation example" >
  <ul className="pagination" >
    <li className="page-item" ><a className="page-link" style={{color:"#1c2237"}} href="#">Anterior</a></li>
    <li className="page-item"><a className="page-link" style={{color:"#1c2237"}} href="#">1</a></li>
    <li className="page-item"><a className="page-link" style={{color:"#1c2237"}} href="#">2</a></li>
    <li className="page-item"><a className="page-link" style={{color:"#1c2237"}} href="#">3</a></li>
    <li className="page-item"><a className="page-link" style={{color:"#1c2237"}} href="#">Siguiente</a></li>
  </ul>
</nav>
   </div>

        </>
    )
}

export default Catalog
