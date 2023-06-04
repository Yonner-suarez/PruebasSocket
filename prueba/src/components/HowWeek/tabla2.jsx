import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    y: {
      display: false,
      grid: {
        display: false, // Oculta las guías de fondo en el eje Y
      },
    },
    x: {
      ticks: {
        font: {
          size: 10,
        },
      },
      grid: {
        display: false, // Oculta las guías de fondo en el eje X
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,

      padding: {
        bottom: 30,
      },
      weight: "normal",
      color: "#00325c",
      font: {
        size: 5,
      },
      align: "start",
    },
    datalabels: {
      anchor: "end",
      align: "end",
      color: "rgba(181, 84, 204)",
      formatter: (value) => ` ${value}\nuds`,
      font: {
        weight: "bold",
        size: 13,
      },
    },
  },
};

const labels = ["Servicios", "Paqutes", "Productos", "GiftCards"];
const satisfaccion = [15, 10, 5, 4];

export const data = {
  labels: labels,
  datasets: [
    {
      data: satisfaccion,
      backgroundColor: [
        "rgb(181, 84, 204, 1)", // Barra roja
        "rgb(181, 84, 204, 0.8)", // Barra roja con transparencia
        "rgba(181, 84, 204, 0.4)", // Barra roja con mayor transparencia
        "rgba(181, 84, 204, 0.2)", // Barra roja con aún más transparencia
        "rgba(181, 84, 204, 0.1)", // Barra roja con transparencia máxima
      ],
      borderColor: "rgb(138, 43, 226)",
      pointBackgroundColor: "rgb(138, 43, 226)",
      fill: true,
    },
  ],
};

export function Tabla2() {
  return <Bar data={data} options={options} />;
}
