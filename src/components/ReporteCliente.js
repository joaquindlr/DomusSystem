const ReporteCliente = () => {
    return (
      <div>
        <h4>Reporte de Clientes</h4>
        <table class="table p-2 me-4">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Direccion</th>
              <th scope="col">vendedor</th>
              <th scope="col">comprador</th>
              <th scope="col">monto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>direccion1</td>
              <td>vendedor1</td>
              <td>comprador1</td>
              <td>$monto1</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>direccion2</td>
              <td>vendedor2</td>
              <td>comprador2</td>
              <td>$monto2</td>
            </tr>
            <tr>
              <th scope="row" colspan="4">
                Total
              </th>
              <td>$total</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  export default ReporteCliente;
  