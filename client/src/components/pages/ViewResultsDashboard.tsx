import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';
import useMultiChartData from '../hooks/useMultiChartData';
import { fetchChartData, ChartData } from '../../api/fetchChartData'; // Import fetchChartData and ChartData

const ViewResultsDashboard: React.FC = () => {
  const { charts, combineChartData } = useMultiChartData();
  const [combinedChart, setCombinedChart] = useState<ChartData | null>(null);
  const [chartIdsToCombine, setChartIdsToCombine] = useState<number[]>([]);
  const [fetchedCharts, setFetchedCharts] = useState<ChartData[]>([])

  useEffect(() => {
    const loadChartData = async () => {
      try {
        const data = await fetchChartData(); // Fetch chart data
        setFetchedCharts([data]); // Assuming you get an array of chart data
      } catch (error) {
        console.error('Failed to fetch chart data:', error);
      }
    };
  
      loadChartData(); // Call the loadChartData function
    }, []);
  
    // Combine selected charts when chartIdsToCombine changes
    useEffect(() => {
      if (chartIdsToCombine.length > 0) {
        const combined = { ...combineChartData(chartIdsToCombine), type: 'line' as 'line' }; // Ensure type is included
        setCombinedChart(combined);
      } else {
        setCombinedChart(null);
      }
    }, [chartIdsToCombine, combineChartData]);
  
    const handleCombineCharts = () => {
      // Assuming you want to combine all charts
      setChartIdsToCombine(charts.map((chart) => chart.id));
    };
  
    return (
      <div>
        <h1>Dashboard</h1>
        {fetchedCharts.map((chart: ChartData, index: number) => (
          <ChartComponent
            key={index}
            type={chart.type}
            title={chart.title}
            series={chart.series}
            categories={chart.categories}
          />
        ))}
        <button onClick={handleCombineCharts}>Combine Charts</button>
        {combinedChart && (
          <div>
            <h2>Combined Chart</h2>
            <ChartComponent
              type="line"
              title={combinedChart.title}
              series={combinedChart.series}
              categories={combinedChart.categories}
            />
          </div>
        )}
      </div>
    );
  };
  
  export default ViewResultsDashboard;
  





  // Combine selected charts when chartIdsToCombine changes
//   useEffect(() => {
//     if (chartIdsToCombine.length > 0) {
//       const combined = combineChartData(chartIdsToCombine);
//       setCombinedChart(combined);
//     } else {
//       setCombinedChart(null);
//     }
//   }, [chartIdsToCombine, combineChartData]);

//   const handleCombineCharts = () => {
//     // Assuming you want to combine all charts
//     setChartIdsToCombine(charts.map((chart) => chart.id));
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {charts.map((chart) => (
//         <ChartComponent
//           key={chart.id}
//           type="line"
//           title={chart.title}
//           series={chart.series}
//           categories={chart.categories}
//         />
//       ))}
//       <button onClick={handleCombineCharts}>Combine Charts</button>
//       {combinedChart && (
//         <div>
//           <h2>Combined Chart</h2>
//           <ChartComponent
//             type="line"
//             title={combinedChart.title}
//             series={combinedChart.series}
//             categories={combinedChart.categories}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewResultsDashboard;





// import React, { useState } from 'react';
// import ChartComponent from './ChartComponent';
// import useMultiChartData from '../hooks/useMultiChartData';

// const ViewResultsDashboard: React.FC = () => {
//   const { charts, addDataPoint, addNewChart } = useMultiChartData();

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {charts.map((chart) => (
//         <ChartComponent
//           key={chart.id}
//           type="line"
//           title={chart.title}
//           series={chart.series}
//           categories={chart.categories}
//         />
//       ))}
//       {/* Render other components or charts as needed */}
//     </div>
//   );
// };

// export default ViewResultsDashboard;








// // export default function ViewResultsDashboard() {
// //     return (
// //       <div>
// //         <h1>View Results Dashboard</h1>
// //         <p>
// //          This will be the page where users can see the results of the data they're tracking.
// //         </p>
// //       </div>
// //     );
// //   }