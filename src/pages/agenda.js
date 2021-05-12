import React, { useState } from "react";
import ModalPropiedades from "../components/ModalPropiedades";
import ModalAgente from "../components/ModalAgente";
import ModalCita from "../components/ModalCita";

const Agenda = () => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(false);
  };
  const [visible1, setVisible1] = useState(false);
  const handleVisible1 = () => {
    setVisible1(false);
  };
  const [visible2, setVisible2] = useState(false);
  const handleVisible2 = () => {
    setVisible2(false);
  };

  return (
    <>
      <div classNameName="container">
        <ModalPropiedades visible={visible} handleVisible={handleVisible} />
        <ModalAgente visible1={visible1} handleVisible1={handleVisible1} />
        <ModalCita visible2={visible2} handleVisible2={handleVisible2} />
        <div className="row">
          <div className="col-auto">
            <input type="date" classNameName="form-control input" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row">
              <button
                onClick={() => setVisible(true)}
                type="button"
                className="btn btn-secondary btn-sm"
              >
                Filtrar por Propiedades
              </button>
            </div>
            <br />
            <div className="row">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setVisible1(true)}
              >
                Filtrar por Agentes
              </button>
            </div>
            <br />
            <div className="row">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setVisible2(true)}
              >
                Agendar Cita
              </button>
            </div>
          </div>
          <div className="col">
            <table className="table table-bordered table-striped   ">
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
export default Agenda;
