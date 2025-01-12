import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ChartData, DataPoint, ChartDataProviderProps } from '../pages/type'; // Import types
import { fetchChartData, addDataPoint as apiAddDataPoint } from '../../api/fetchChartData'; // Import your fetch functions
import Auth from '../../utils/auth'; // Import the Auth utility

interface ChartDataContextProps {
  charts: ChartData[];
  addNewChart: (title: string, type: 'bar' | 'line' | 'pie') => void;
  addDataPoint: (chartId: number, x: string, y: number, title: string) => void;
  fetchCharts: () => void;
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

  useEffect(() => {
    fetchCharts();
  }, []);

  const fetchCharts = async () => {
    const token = Auth.getToken();
    try {
      const data = await fetchChartData(token);
      console.log('Fetched Data in Context', data);
      setCharts(data);
    } catch (error) {
      console.error('Failed to fetch charts:', error);
    }
  };

  const addNewChart = async (title: string, type: 'bar' | 'line' | 'pie') => {
    const token = Auth.getToken();
    const newChart: ChartData = {
      id: charts.length + 1,
      title,
      type,
      series: [{ name: 'User Data', data: [] }],
      categories: [],
    };
    try {
      const response = await fetch('/api/charts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newChart),
      });
      if (!response.ok) {
        throw new Error('Failed to save chart');
      }
      const savedChart = await response.json();
      setCharts([...charts, savedChart]);
    } catch (error) {
      console.error('Failed to save chart:', error);
    }
  };

  const addDataPoint = async (chartId: number, x: string, y: number, title: string) => {
    const token = Auth.getToken();
    try {
      await apiAddDataPoint(token, chartId, x, y); // Use the API function to add data point
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
                categories: [...new Set([...chart.categories, x])],
              }
            : chart
        )
      );
    } catch (error) {
      console.error('Error adding data point:', error);
    }
  };

  return (
    <ChartDataContext.Provider value={{ charts, addNewChart, addDataPoint, fetchCharts }}>
      {children}
    </ChartDataContext.Provider>
  );
};


// import React, { createContext, useContext, useState, ReactNode } from 'react';


// interface DataPoint {
//   x: string;
//   y: number;
//   title: string;
// }

// interface ChartData {
//   id: number;
//   title: string;
//   type: 'bar' | 'line' | 'pie';
//   series: { name: string; data: DataPoint[] }[];
//   categories: string[];
// }

// interface ChartDataContextProps {
//   charts: ChartData[];
//   addNewChart: (title: string, type: 'bar' | 'line' | 'pie') => void;
//   addDataPoint: (chartId: number, x: string, y: number, title: string) => void;
// }

// interface ChartDataProviderProps {
//     children: ReactNode;
// }

// const ChartDataContext = createContext<ChartDataContextProps | undefined>(undefined);

// export const useChartData = () => {
//   const context = useContext(ChartDataContext);
//   if (!context) {
//     throw new Error('useChartData must be used within a ChartDataProvider');
//   }
//   return context;
// };

// export const ChartDataProvider: React.FC<ChartDataProviderProps> = ({ children }) => {
//   const [charts, setCharts] = useState<ChartData[]>([]);
//   const [chartId, setChartId] = useState(1);

//   const addNewChart = (title: string, type: 'bar' | 'line' | 'pie') => {
//     setCharts((prevCharts) => [
//       ...prevCharts,
//       {
//         id: chartId,
//         title: title || `Chart ${chartId}`,
//         type: type,
//         series: [{ name: 'User Data', data: [] }],
//         categories: [],
//       },
//     ]);
//     setChartId((prevId) => prevId + 1);
//   };

//   const addDataPoint = (chartId: number, x: string, y: number, title: string) => {
//     console.log('Adding data point:', { chartId, x, y, title });
    
//     setCharts((prevCharts) => {
//       const updatedCharts = prevCharts.map((chart) =>
//         chart.id === chartId
//           ? {
//               ...chart,
//               series: [
//                 {
//                   ...chart.series[0],
//                   data: [...chart.series[0].data, { x, y, title }],
//                 },
//               ],
//               categories: Array.from(new Set([...chart.categories, x])), //Ensure categories are updated
//             }
//           : chart
//         );
        
//         console.log('Updated charts:', updatedCharts);
//         return updatedCharts; // Return the updated state
//       });
//     };

//   return (
//     <ChartDataContext.Provider value={{ charts, addNewChart, addDataPoint }}>
//       {children}
//     </ChartDataContext.Provider>
//   );
// };
