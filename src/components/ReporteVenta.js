import { Link } from "react-router-dom";
const ReporteVenta = () => {
  return (
    <div>
      <h4>Reporte de Ventas</h4>
      <table className="table p-2 me-4">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Direccion</th>
            <th scope="col">Agente</th>
            <th scope="col">Comprador</th>
            <th scope="col">Monto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Direccion1</td>
            <td>Agente1</td>
            <td>Comprador1</td>
            <td>$Monto1</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Direccion2</td>
            <td>Agente2</td>
            <td>Comprador2</td>
            <td>$Monto2</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Direccion3</td>
            <td>Agente3</td>
            <td>Comprador3</td>
            <td>$Monto3</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Direccion4</td>
            <td>Agente4</td>
            <td>Comprador4</td>
            <td>$Monto4</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colspan="4">
              Total
            </th>
            <td>$total</td>
          </tr>
        </tfoot>
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
export default ReporteVenta;
