import "./Alcanzado.css";
import { useState } from "react";
import { tablaPorcentaje } from "./tablaPorcentaje";
import WriteMeta from "../WriteMeta/WriteMeta";
import Metas from "../metas/Metas";

const ventasHastaAhora = 99000;

const Alcanzado = ({ meta }) => {
  const [cambiarMeta, seCambiarMeta] = useState(false);
  const onClick = () => {
    seCambiarMeta(true);
  };

  const porcentaje = Math.floor((meta * 100) / ventasHastaAhora);

  return (
    <div className="contenedorAll">
      {porcentaje === 100 ? (
        <Metas />
      ) : !cambiarMeta ? (
        <div className="contenedorPorcentajeInfo">
          <div className="contenedorPorcentaje">
            {tablaPorcentaje(porcentaje)}
            <span className="span">{porcentaje}%</span>
          </div>
          <div className="contenedorInfoProgreso">
            <h2 className="confirmarMeta">
              Meta de la semana: S/ {ventasHastaAhora}
            </h2>
            <h2 className="confirmarMeta">Anvance: S/{meta}</h2>

            <div className="contenedorBoton">
              <button className="botonEditar" onClick={onClick}>
                <p className="parrafoBoton">Editar meta</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <WriteMeta />
      )}
    </div>
  );
};

export default Alcanzado;
