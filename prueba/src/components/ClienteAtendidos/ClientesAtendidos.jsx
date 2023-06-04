import "./ClientesAtendidos.css";

const ClientesAtendidos = () => {
  const NoClientes = 86;
  const Clientes = 60;

  const nuevosClientes = NoClientes - Clientes;

  return (
    <div className="contenedorTotalClientes">
      <div className="contenedorArriba">
        <h2 className="numeroClientes">{NoClientes}</h2>
        <p className="parrafoNoClientes">Clientes atendidos esta semana</p>
      </div>
      <hr className="hrClientes" />
      <div className="contenedorAbajo">
        <div className="contenedorTicket">
          <p className="parrafoTicket">Ticket promedio</p>
          <h5 className="promedio">S/ 80.15</h5>
        </div>
        <h6 className="porcentajePromedio">
          + {nuevosClientes} clientes que la semana pasada
        </h6>
      </div>
    </div>
  );
};

export default ClientesAtendidos;
