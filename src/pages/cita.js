import React from "react";

const agenda = () => {
    return (
      <>
      <div class="container">
          <div class="row">
              <div class="col-auto">
                    <legend for="Agregarcita" class="form-label">Agendar Cita</legend>
                    <label for="CodCli" class="form-label">Ingresar Codigo de Cliente</label>
                    <th><input type="text" class="form-control" id="CodCli" placeholder="Codigo de Cliente" ></input>
                    </th>
                    <th><button type="button" class="btn btn-secondary btn-sm">Buscar</button></th>
<br></br>
     <label for="CodProp" class="form-label">Ingresar Codigo de Propiedad</label>
      <th><input type="text" class="form-control" id="CodProp" placeholder="Codigo de Propiedad" ></input>
     </th>
     <th><button type="button" class="btn btn-secondary btn-sm">Buscar</button></th>
<br></br>
      <div class="col ">
          <th>
              <label for="HoraIn" class="form-label">Desde</label>
          <input type="time" class="form-control" id="HoraIn" ></input></th>
         
          <th><label for="HoraFin" class="form-label">Hasta</label>
          <input type="time" class="form-control" id="HoraFin"  ></input></th>
      </div>
<br></br>
<div class="col ">
          <label for="Fecha" class="form-label">Fecha</label>
          <th><input type="Date" class="form-control" id="Fecha"  ></input></th>
          <th><button type="button" class="btn btn-secondary btn-sm">Modificar</button></th>
          
      </div>
      <br></br>
      <button type="button" class="btn btn-secondary btn-sm">Agregar turno</button>

      </div>
      
      </div>
      </div>
      
      </>
      );
    };
export default agenda;