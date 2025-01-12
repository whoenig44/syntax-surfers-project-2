// src/pages/CreateTracker.tsx
import React, { useState } from 'react';
import { useChartData } from '../context/ChartDataContext';

const CreateTracker: React.FC = () => {
  const { addNewChart } = useChartData();
  const [newChartTitle, setNewChartTitle] = useState('');
  const [newChartType, setNewChartType] = useState<'line' | 'bar' | 'pie'>('line');

  const handleAddNewChart = () => {
    addNewChart(newChartTitle || `New Chart`, newChartType);
    setNewChartTitle('');
  };

  return (
    <div>
      <h1>Create New Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Enter new chart title"
          value={newChartTitle}
          onChange={(e) => setNewChartTitle(e.target.value)}
        />
        <select value={newChartType} onChange={(e) => setNewChartType(e.target.value as 'bar' | 'line' | 'pie')}>
          <option value="line">Line</option>
          <option value="bar">Bar</option>
          <option value="pie">Pie</option>
        </select>
        <button onClick={handleAddNewChart}>Create Tracker</button>
      </div>
    </div>
  );
};

export default CreateTracker;
