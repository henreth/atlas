import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Graph.css';

ChartJS.register(
    CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function Graph({options, data}) {
    return (
        <div className="graph">
            <Bar options={options} data={data} />
        </div>
    )
}
