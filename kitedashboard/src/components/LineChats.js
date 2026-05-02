import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChats({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start', 
        labels: {
          usePointStyle: true, 
          boxWidth: 8,
          font: { size: 12 }
        }
      },
    },
    scales: {
      x: {
        grid: { display: false }, 
        ticks: { color: '#9b9b9b' }
      },
      y: {
        grid: { color: '#f2f2f2' }, 
        ticks: { display: false } 
      }
    }
  };

  if (!data) return null;

  return (
    <div style={{ height: '250px', width: '100%' }}>
      
      <Line data={data} options={options} />
    </div>
  );
}