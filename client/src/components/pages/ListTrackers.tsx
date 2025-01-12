// src/pages/ListTrackers.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import InputForm from '../context/inputForm';
import ChartComponent from './ChartComponent';
import { useChartData } from '../context/ChartDataContext';

const ListTrackers: React.FC = () => {
  const { charts, addDataPoint } = useChartData();

  const handleAddDataPoint = (chartId: number, x: string, y: number, title: string) => {
    addDataPoint(chartId, x, y, title);
  };

  return (
    <div>
      <h1>All Trackers</h1>
      <Link to="/create-tracker">Create New Tracker</Link>
      {charts.map((chart) => (
        <div key={chart.id}>
          <h2>{chart.title}</h2>
          <InputForm onSubmit={(title, x, y) => handleAddDataPoint(chart.id, x, y, title)} />
          <ChartComponent
            title={chart.title}
            type={chart.type}
            series={chart.series}
            categories={chart.categories}
          />
        </div>
      ))}
    </div>
  );
};

export default ListTrackers;
