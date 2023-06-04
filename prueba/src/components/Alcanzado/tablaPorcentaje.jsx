import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  cutout: "90%",
  elements: {
    arc: {
      borderWidth: 1,
    },
  },
  plugins: {
    doughnutlabel: {},
    legend: {
      display: false,
    },
  },
};

export function tablaPorcentaje(porcentaje) {
  const data = {
    labels: [],
    datasets: [
      {
        label: "70",
        data: [porcentaje, porcentaje - 100],
        backgroundColor: ["rgb(211, 43, 226, 1)", "rgba(147, 124, 244, 0.05)"],
        borderWidth: 12,
        borderColor: "rgba(147, 124, 244, 0.05)",
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
}
