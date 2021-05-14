import React,{useState} from "react";


const CitaEliminada = ({ visible, handleVisible }) => {
    
      return (
      <>
      
      {visible && (
         <div
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            height: "100%",
            width: "100%",
            position: "fixed",
          }}
        >
       

        <div
            style={{
              backgroundColor: "white",
              height: "40rem",
              width: "70rem",
              position: "fixed",
              top: "6rem",
              bottom: 0,
              right: "15%",
              borderRadius: 5,
            }}
        >
            <>
            
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                 <button class="btn btn-outline-secondary" type="button" onClick={() => handleVisible(false)}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                         <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                 </button>
                 
            </div>
            
            
    
            <div class="d-grid  col-10 mx-auto">
               
                                    <table className="table  table-bordered  ">
                                        <thead>
                                           <tr>
                                           <th scope="col" colSpan="8" class="table-primary"
                                              >
                                                Cita Eliminada
                                            </th>
                                            </tr>
                                            
                                             <tr>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Hora</th>
                                                <th scope="col">Tipo actividad</th>
                                                <th scope="col">Cod. Cliente</th>
                                                <th scope="col">Cod. Agente</th>
                                                <th scope="col">Cod. Propiedad</th>
                                                <th scope="col">Estado</th>
                                                
                                                
                                             </tr>
                                             
                                        </thead>
                                        <tbody> 
                                             
                                            
                                            <tr>
                                                <td>20/05/21</td>
                                                <td>08:00</td>
                                                 <td>----</td>
                                                 <td>----</td>
                                                 <td>Agente3</td>
                                                 <td>Casa5</td>
                                                 <td  class="table-info">En Proceso</td>
                                            </tr> 
                                            <tr>
                                                <td>20/05/21</td>
                                                <td>12:00</td>
                                                 <td>----</td>
                                                 <td>----</td>
                                                 <td>Agente3</td>
                                                 <td>Casa1</td>
                                                 <td  class="table-info">En Proceso</td>
                                            </tr> 
                                            <tr>
                                                <td>20/05/21</td>
                                                <td>15:00</td>
                                                 <td>----</td>
                                                 <td>----</td>
                                                 <td>agente1</td>
                                                 <td>casa2</td>
                                                 <td  class="table-info">En Proceso</td>
                                            </tr> 
                                         </tbody>
                
                                    </table>
                                
                                
                               
                        
                    
             
             </div>
            </>
            
          
        
      
      </div>
      </div>
      )}
    </>
  );
};

export default CitaEliminada;