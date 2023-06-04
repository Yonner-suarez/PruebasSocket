import HowWeek from "../HowWeek/HowWeek";
import AddMeta from "../AddMeta/AddMeta";
import "./viutify.css";
import ClientesAtendidos from "../ClienteAtendidos/ClientesAtendidos";

const Viutify = () => {
  return (
    <div className="allContenedor">
      <div className="componentComoVa">
        <h2 className="CómoVaTuSemana">Cómo va tu semana</h2>
      </div>
      <div className="contendorMetaSemanal">
        <p className="Ventas">Ventas</p>
        <p className="MetaSemanal">Meta semanal</p>
      </div>
      <div className="container">
        <div className="component">
          <HowWeek />
        </div>
        <div className="component">
          <AddMeta />
        </div>
        <div className="contendorClientesAtendidos">
          <p className="Clientes">Clientes atendidos</p>
        </div>
        <div className="componentClientes">
          <ClientesAtendidos />
        </div>
      </div>
    </div>
  );
};

export default Viutify;
