import React, {useState} from "react";


const VerPropiedad = ({ visible, handleVisible }) => {
    
      return (
      <>
      
      {visible && (
         <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            height: "100%",
            width: "100%",
            position: "fixed",
          }}
        >
       

        <div
            style={{
              backgroundColor: "white",
              height: "40rem",
              width: "65rem",
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
                <table className="table  table-borderless table-light " >
                     <thead>
                        <tr>
                           <th scope="col" class="table-primary"
                             >
                              Codigo: Propiedad1
                            </th>
                        </tr>
                     </thead>
                     <tbody> 
                         
                        <tr>
                          
                                <div class="input-group input-group-sm mb-3">
                                    
                                    <span class="input-group-text" id="basic-addon1">Tipo</span>
                                    <input type="text" placeholder="Casa" disabled></input>
                                                                  
                                    <span class="input-group-text" id="basic-addon1">Ubicación</span>
                                    <input type="text" placeholder="Calle 123" disabled></input>

                                    <span class="input-group-text" id="basic-addon1">Contrato</span>
                                    <input type="text" placeholder="Alquiler" disabled></input>
                                </div>
                                
                         </tr>
                         
                         <tr>  
                         <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="basic-addon1">Baños</span>
                                    <input type="text" placeholder="2" disabled></input>
                                    <span class="input-group-text" id="basic-addon1">Dormitorios</span>
                                    <input type="text" placeholder="4" disabled></input>
                                    <span class="input-group-text" id="basic-addon1">Suites</span>
                                    <input type="text" placeholder="0" disabled></input>
                                
                                    
                                </div>
                        </tr> 
                        <tr>  
                         <div class="input-group input-group-sm  mb-3">
                                    <span class="input-group-text" id="basic-addon1">Artefacto con los que cuenta</span>
                                    <input type="text" placeholder="----" disabled></input>
                                    <span class="input-group-text" id="basic-addon1">Servicios</span>
                              <input type="text" placeholder="Servicio1,Servicio2,Servicio3" disabled></input>
                        </div>
                        </tr> 
                        <tr>  
                         <div class="input-group input-group-sm mb-3">
                              <span class="input-group-text" id="basic-addon1">Espacio con los que cuenta</span>
                                    <input type="text" placeholder="----" disabled></input>
                              <span class="input-group-text" id="basic-addon1">Precio $</span>
                              <input type="text" placeholder="Monto1" disabled></input>
                        </div>
                        </tr> 

                        <tr>  
                         <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="basic-addon1">Num. Cliente</span>
                                    <input type="text" placeholder="Cliente1" disabled></input>
                                
                                    <span class="input-group-text" id="basic-addon1">Nombre</span>
                                    <input type="text" placeholder="Lupita Lopez" disabled></input>
                                    
                                    <span class="input-group-text" id="basic-addon1">Tipo</span>
                                    <input type="text" placeholder="Corporativo" disabled></input>
                                    
                                </div>
                        </tr>
                        <tr>  
                         <div class="input-group input-group-sm mb-3">
                              <span class="input-group-text" id="basic-addon1">DNI</span>
                                    <input type="text" placeholder="14256378" disabled></input>
                              <span class="input-group-text" id="basic-addon1">Dirección</span>
                              <input type="text" placeholder="Av. Algo 12" disabled></input>
                        </div>
                        </tr>
                        <tr>  
                         <div class="input-group input-group-sm mb-3">
                              <span class="input-group-text" id="basic-addon1">Telefono +54</span>
                                    <input type="text" placeholder="123456" disabled></input>
                              <span class="input-group-text" id="basic-addon1">Correo</span>
                              <input type="text" placeholder="correo@hotmail.com" disabled></input>
                        </div>
                        </tr>
                        <tr>  
                         <div class="input-group input-group-sm mb-3">
                              <span class="input-group-text" id="basic-addon1">Descripción</span>
                              <input type="text" placeholder="-----------" disabled></input>
                              <span class="input-group-text" id="basic-addon1">Disponibilidad</span>
                              <input type="text" placeholder="Disponible" disabled></input>
                              
                        </div>
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

export default VerPropiedad;