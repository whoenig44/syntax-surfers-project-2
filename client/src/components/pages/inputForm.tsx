import React, { FC, useState, useEffect } from 'react';
import InputForm from './InputForm';
import ChartComponent from './MultChartComponent';
import { fetchChartData, ChartData } from './api';

const App: FC = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const loadChartData = async () => {
      try {
        const data = await fetchChartData();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };
    loadChartData();
  }, []);

  const handleFormSubmit = async (formData: any) => {
    try {
      const data = await fetchChartData(formData);
      setChartData(data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div className="app">
      <h1>Dynamic Chart Generator</h1>
      <InputForm onSubmit={handleFormSubmit} />
      {chartData && (
        <ChartComponent
          type={chartData.type}
          title={chartData.title}
          series={chartData.series}
          categories={chartData.categories}
        />
      )}
    </div>
  );
};

export default App;