import React, { useState } from 'react';
import InputForm from '../context/inputForm';
import ChartComponent from './ChartComponent';
import { useChartData } from '../context/ChartDataContext';

const MultiChartComponent: React.FC = () => {
  const { charts, addNewChart, addDataPoint } = useChartData();
  const [newChartTitle, setNewChartTitle] = useState('');
  const [newChartType, setNewChartType] = useState<'bar' | 'line' | 'pie'>('line');

  const handleAddNewChart = () => {
    addNewChart(newChartTitle || `Chart ${charts.length + 1}`, newChartType);
    setNewChartTitle('');
  };

  const handleAddDataPoint = (chartId: number, title: string, x: string, y: number) => {
    const chart = charts.find(c => c.id === chartId);
    if (chart) {
      addDataPoint(chartId, x, y, title);
    } else {
      console.error('Chart with the given title not found');
    }
  };

  return (
    <div>
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
        <button onClick={handleAddNewChart}>Track New Item</button>          
      </div>
      {charts.map((chart) => (
        <div key={chart.id}>
          <h2>{chart.title}</h2>
          <InputForm 
            chartId ={chart.id}
            onSubmit={(chartId, title, x, y) => handleAddDataPoint(chartId, title, x, y)}
            defaultTitle={chart.title} 
          />
          {chart.series[0].data.length > 0 && (
            <ChartComponent
              title={chart.title}
              type={chart.type}
              series={chart.series}
              categories={chart.categories}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiChartComponent;


