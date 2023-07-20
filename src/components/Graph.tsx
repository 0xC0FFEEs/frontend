import { Component, onMount } from "solid-js";
import request from "sync-request";
import { Chart } from "chart.js";
import { Bar } from "solid-chartjs";

const Graph: Component = () => {
  onMount(() => {
    Chart.register();
  });
  const labels = [16, 17, 18, 19, 20, 21, 22];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [],
        backgroundColor: [
          "#0B666A",
          "#0B666A",
          "#0B666A",
          "#0B666A",
          "#0B666A",
          "#0B666A",
          "#0B666A",
        ],
        borderColor: [
          "#0B666A",
          "#0B666A",
          "#0B666A",
          "#0B666A",
          "#0B666A",
          "#0B666A",
          "#0B666A",
        ],
        borderWidth: 1,
      },
    ],
  };

  for (let i = 16; i <= 22; i++) {
    // @ts-ignore
    data.datasets[0].data.push(
      Number(request("GET", `http://localhost:50005/data/${i - 15}`).body)
    );
  }
  console.log(data.datasets[0].data);
  const config = {
    barThickness: 15,
    scales: {
      y: {
        max: 300,
        stepSize: 100,
        callback: function (value: any) {
          if (labels.includes(value.toString())) {
            return value;
          }
        },
      },
    },
  };
  return <Bar data={data} options={config} height={500}></Bar>;
};

export default Graph;
