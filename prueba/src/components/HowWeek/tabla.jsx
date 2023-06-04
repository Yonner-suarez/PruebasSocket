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
  maintainAspectRatio: true,
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
      weight: "bold",
      color: "#00325c",
      font: {
        size: 13,
      },
      align: "start",
    },
    datalabels: {
      anchor: "end",
      align: "end",
      color: "rgba(181, 84, 204)",
      formatter: (value) => `S/${value.toFixed(2)}`,
      font: {
        weight: "bold",
      },
    },
  },

  scales: {
    y: {
      display: false,
      ticks: {
        font: {
          size: 14,
          color: "red",
        },
      },
      grid: {
        display: false,
      },
    },
    x: {
      ticks: {
        font: {
          size: 10,
        },
      },
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["Servicios", "Paqutes", "Productos", "GiftCards"];
const satisfaccion = [900, 500, 400, 300];

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
      tension: 0.1,
    },
  ],
};

export function Tabla() {
  return <Bar options={options} data={data} plugins={[ChartDataLabels]} />;
}
