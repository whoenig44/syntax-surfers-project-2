import React, { useState, use Effect } from 'react';
import ChartComponent from './components/ChartComponent';
import HealthIsWealth from './components/HealthIsWealth'; //Need to update this path 

interface SeriesData {
    name: string;
    data: number[];
  }
  
  interface ChartData {
    title: string;
    type: 'bar' | 'line' | 'pie'; //Add more as needed
    series: SeriesData[];
    categories: string[];
  }
  
  constfetchChartData = async (): Promise<ChartData> => {
    try {
      const response = await fetch('https://api.example.com/notes') //Where are we acutally getting the data from?
      if (!response.ok {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return {
        title: data.title,
        type: data.chartType as 'bar' | 'line' | 'pie', //Add more as needed
        series: data.series,
        categories: data.categories
      };
    } catch (error) {
      console.error('Failed to fetch chart data:', error);
      throw error;
    }
  };
  
  const App: FC = () => {
    const [chartData, setChartData] = useState<ChartData | null>(null);
  
    useEffect(() => async () => {
      const loadChartData = async () => {
        const data = await fetchChartData();
        setChartData(data);
      };
      loadChartData();
    }, []);
      
    return (
      <div className="app">
        <h1>Dynamic Chart generator</h1>
        <InputForm onSubmit={handleFormSubmit}/>  
        {chartData && (
          <ChartComponent
        type="line" //you can change this to whatever type you've got defined
        type={chartData.type}  
        title={chartData.title}
        series={chartData.series}
        categories={chartData.categories}
          /> 
        )} 
      </div>
    );
  };
  
  export default HealthIsWealth;