import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataPoint {
  x: string;
  y: number;
  title: string;
}

interface ChartData {
  id: number;
  title: string;
  type: 'bar' | 'line' | 'pie';
  series: { name: string; data: DataPoint[] }[];
  categories: string[];
}

interface ChartDataContextProps {
  charts: ChartData[];
  addNewChart: (title: string, type: 'bar' | 'line' | 'pie') => void;
  addDataPoint: (chartId: number, x: string, y: number, title: string) => void;
}

interface ChartDataProviderProps {
    children: ReactNode;
}

const ChartDataContext = createContext<ChartDataContextProps | undefined>(undefined);

export const useChartData = () => {
  const context = useContext(ChartDataContext);
  if (!context) {
    throw new Error('useChartData must be used within a ChartDataProvider');
  }
  return context;
};

export const ChartDataProvider: React.FC<ChartDataProviderProps> = ({ children }) => {
  const [charts, setCharts] = useState<ChartData[]>([]);
  const [chartId, setChartId] = useState(1);

  const addNewChart = (title: string, type: 'bar' | 'line' | 'pie') => {
    setCharts((prevCharts) => [
      ...prevCharts,
      {
        id: chartId,
        title: title || `Chart ${chartId}`,
        type: type,
        series: [{ name: 'User Data', data: [] }],
        categories: [],
      },
    ]);
    setChartId((prevId) => prevId + 1);
  };

  const addDataPoint = (chartId: number, x: string, y: number, title: string) => {
    setCharts((prevCharts) =>
      prevCharts.map((chart) =>
        chart.id === chartId
          ? {
              ...chart,
              series: [
                {
                  ...chart.series[0],
                  data: [...chart.series[0].data, { x, y, title }],
                },
              ],
              categories: [...chart.categories, x], //// Ensure categories are updated
            }
          : chart
      )
    );
  };

  return (
    <ChartDataContext.Provider value={{ charts, addNewChart, addDataPoint }}>
      {children}
    </ChartDataContext.Provider>
  );
};
