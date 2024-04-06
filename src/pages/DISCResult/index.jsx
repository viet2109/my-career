import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['D', 'I', 'S', 'C'],
  datasets: [
    {
      label: 'Tính cách của tôi',
      data: [4, 5, 8, 5],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export function DISCResult() {
  return <div style={{'width' : '80%', height : '100vh', margin: "0 auto"}}>
    <Radar data={data} />
  </div>;
}
 