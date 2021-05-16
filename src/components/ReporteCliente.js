import { Link } from "react-router-dom";
const ReporteCliente = () => {
  return (
    <div>
      <h4>Reporte de Clientes</h4>
      <table className="table p-2 me-4">
        <thead>
          <tr>
            <th scope="col">Cod. Cliente</th>
            <th scope="col">Tipo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td>Prticular</td>
            <td>Juan Dominguez</td>
            <td>Activo</td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td>Corporativo</td>
            <td>Martina Perez</td>
            <td>Activo</td>
          </tr>
          <tr>
            <td scope="row">3</td>
            <td>Corporativo</td>
            <td>Natalia Rivero</td>
            <td>Inactivo</td>
          </tr>
          <tr>
            <td scope="row">4</td>
            <td>Particular</td>
            <td>Carolina Ruiz</td>
            <td>Activo</td>
          </tr>
        </tbody>
      </table>
      <Link to="#" className="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-printer-fill"
          viewBox="0 0 16 16"
        >
          <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
          <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
        </svg>{" "}
        Imprimir
      </Link>
      <Link to="#" className="btn btn-primary m-3">
        {" "}
        Guardar
      </Link>
    </div>
  );
};
export default ReporteCliente;
