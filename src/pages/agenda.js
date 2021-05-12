import React from "react";
// import Parte1 from "../components/parte1";
// import Parte2 from "../components/parte2";
// import Parte3 from "../components/parte3";

const agenda = () => {
  // const [parte, setParte] = useState(1);
  // const Parteanterior = () => {
  //   if (parte > 1) {
  //     setParte(parte - 1);
  //   }
  // };
  return (
    <>
      {/* <form className="">
        {parte == 1 && <Parte1 />}
        {parte == 2 && <Parte2 />}
        {parte == 3 && <Parte3 />}
      </form> */}
      <div class="container">
        <div class="row">
          <div class="col-auto">
            <input type="date" className="form-control input" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="row">
              {/* <button
                type="button"
                class="btn btn-secondary btn-sm"
                onClick={() => Parteanterior()}
              >
                Filtrar por Propiedades
              </button> */}
            </div>
            <br />
            <div class="row">
              <button type="button" class="btn btn-secondary btn-sm">
                Filtrar por Agentes
              </button>
            </div>
            <br />
            <div class="row">
              <button type="button" class="btn btn-secondary btn-sm">
                Agendar Cita
              </button>
            </div>
          </div>
          <div class="col">
            <table class="table table-bordered table-striped   ">
              <thead>
                <th scope="col"></th>
                <th scope="col">Dom</th>
                <th scope="col">Lun</th>
                <th scope="col">Mar</th>
                <th scope="col">Mie</th>
                <th scope="col">Jue</th>
                <th scope="col">Vie</th>
                <th scope="col">Sab</th>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">7:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">8:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">9:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">10:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">11:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">12:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">13:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">14:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">15:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">16:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">17:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">18:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">19:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">20:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">21:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {" "}
                  <th scope="row">22:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default agenda;
