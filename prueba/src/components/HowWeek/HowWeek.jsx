import { useState } from "react";
import "./HowWeek.css";
import { Tabla } from "./tabla";
import { Tabla2 } from "./tabla2";

const HowWeek = () => {
  const [cambio, setCambio] = useState(false);

  const semanaPasada = 800;
  const ventasActuales = 700;
  const diferenciaDeGanancias = semanaPasada - ventasActuales;

  const onClickDinero = () => {
    setCambio(false);
  };
  const onClickCantidad = () => {
    setCambio(true);
  };

  return (
    <div className="contenedor">
      <div className="total">
        <h2 className="totalSemana">S/{ventasActuales}.00</h2>
        <p className="parrafoTotal">ventas hasta el momento</p>
        <hr className="hr" />

        {diferenciaDeGanancias < 0 ? (
          <div className="contenedorGanancias">
            <svg
              width="14"
              className="svg"
              height="15"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.292893 6.65685L6.65685 0.292893C7.04738 -0.0976314 7.68054 -0.0976314 8.07107 0.292893L14.435 6.65685C14.8256 7.04738 14.8256 7.68054 14.435 8.07107C14.0445 8.46159 13.4113 8.46159 13.0208 8.07107L8.36396 3.41421L8.36396 16L6.36396 16L6.36396 3.41421L1.70711 8.07107C1.31658 8.46159 0.683418 8.46159 0.292893 8.07107C-0.097631 7.68054 -0.097631 7.04738 0.292893 6.65685Z"
                fill="#1D9B75"
              />
            </svg>
            <h5 className="indices">S/{diferenciaDeGanancias}.00 + que ayer</h5>
          </div>
        ) : (
          <div className="contenedorGanancias">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down"
              style={{ color: "red" }}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
            <h5 className="indicesNegativo">
              S/{diferenciaDeGanancias}.00 - que ayer
            </h5>
          </div>
        )}
      </div>
      <div className="contenedorGraficas">
        <div className="contenedorBotones">
          <option
            className={!cambio ? "cambio" : "cantidad"}
            onClick={onClickCantidad}
          >
            Cantidad
          </option>
          <option
            className={cambio ? "cambio" : "cantidad"}
            onClick={onClickDinero}
          >
            Dinero
          </option>
        </div>
        <hr />
        <div className="contenedorTablas">{!cambio ? Tabla() : Tabla2()}</div>
      </div>
    </div>
  );
};

export default HowWeek;
