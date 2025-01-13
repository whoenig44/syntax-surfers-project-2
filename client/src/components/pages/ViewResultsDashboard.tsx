import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';
import useMultiChartData from '../hooks/useMultiChartData';
import { fetchChartData } from '../../api/fetchChartData'; // Import fetchChartData
import { ChartData } from './type'; // Import ChartData
import Auth from '../../utils/auth'; // Import Auth

const ViewResultsDashboard: React.FC = () => {
  const { combineChartData } = useMultiChartData();
  const [fetchedCharts, setFetchedCharts] = useState<ChartData[]>([]); // Correctly declare fetchedCharts and its setter
  const [chartIdsToCombine, setChartIdsToCombine] = useState<number[]>([]);
  const [combinedChart, setCombinedChart] = useState<ChartData | null>(null);

  // Fetch charts when the component mounts
  useEffect(() => {
    const loadChartData = async () => {
      try {
        const token = Auth.getToken(); // Get token from Auth
        const data = await fetchChartData(token); // Fetch chart data
        setFetchedCharts(data); // Use the correct setter
      } catch (error) {
        console.error('Failed to fetch chart data:', error);
      }
    };

    loadChartData(); // Call the loadChartData function
  }, []);

  // Combine selected charts when chartIdsToCombine changes
  useEffect(() => {
    if (chartIdsToCombine.length > 0) {
      const combined = combineChartData(chartIdsToCombine);
      setCombinedChart(combined);
    } else {
      setCombinedChart(null);
    }
  }, [chartIdsToCombine, combineChartData]);

  // Handle combining charts
  const handleCombineCharts = () => {
    setChartIdsToCombine(chartIdsToCombine); // Trigger combination
  };

  // Handle chart selection
  const handleChartSelection = (id: number) => {
    setChartIdsToCombine((prev) =>
      prev.includes(id) ? prev.filter((chartId) => chartId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {fetchedCharts.map((chart: ChartData, index: number) => (
        <div key={index}>
          <ChartComponent
            type={chart.type}
            title={chart.title}
            series={chart.series}
            categories={chart.categories}
          />
          <label>
            <input
              type="checkbox"
              checked={chartIdsToCombine.includes(chart.id)}
              onChange={() => handleChartSelection(chart.id)}
            />
            Select Chart to Combine
          </label>
        </div>
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



// import React, { useState, useEffect } from 'react';
// import useMultiChartData from '../hooks/useMultiChartData';
// import ChartComponent from'./ChartComponent';
// import { fetchChartData } from '../../api/fetchChartData'; // Import fetchChartData 
// import { ChartData } from './type'; // Import ChartData
// import Auth from '../../utils/auth'; // Import Auth

// const ViewResultsDashboard: React.FC = () => {
//   const { combineChartData } = useMultiChartData();
//   const [setCombinedChart] = useState<ChartData | null>(null);
//   const [chartIdsToCombine, setChartIdsToCombine] = useState<number[]>([]);
//   const [ setFetchedCharts] = useState<ChartData[]>([])

//   useEffect(() => {
//     const loadChartData = async () => {
//       try {
//         const token = Auth.getToken(); // Get token from Auth
//         const data = await fetchChartData(token); // Fetch chart data
//        setFetchedCharts(data); // Assuming you get an array of chart data
//       } catch (error) {
//         console.error('Failed to fetch chart data:', error);
//       }
//     };
  
//       loadChartData(); // Call the loadChartData function
//     }, []);
  
//     // Combine selected charts with chartIdsToCombine changes
//     useEffect(() => {
//       if (chartIdsToCombine.length > 0) {
//         const combined = combineChartData(chartIdsToCombine);
//         setCombinedChart(combined);
//       } else {
//         setCombinedChart(null);
//       }
//     }, [chartIdsToCombine, combineChartData]);
  
//     const handleCombineCharts = () => {
//       // trigger combination by setting teh chartIdsToCombine
//       setChartIdsToCombine(chartIdsToCombine);
//     };

//     const handleCombineCharts - () => {
//  // Trigger combination by setting the chartIdsToCombine
//       setChartIdsToCombine(chartIdsToCombine);
//     }

//     //Handle chart selection
//     const handleChartSelection = (id: number) => {
//       setChartIdsToCombine(prev =>
//         prev.includes(id) ? prev.filter(chartId => chartId !== id) : [...prev, id]
//       );
//     };
  
//     return (
//       <div>
//         <h1>Dashboard</h1>
//         {fetchedCharts.map((chart: ChartData, index: number) => (
//           <div key={index}>
//             <ChartComponent
//               type={chart.type}
//               title={chart.title}
//               series={chart.series}
//               categories={chart.categories}
//             />
            
//             <label>
//               <input
//                 type="checkbox"
//                 checked={chartIdsToCombine.includes(chart.id)}
//                 onChange={() => handleChartSelection(chart.id)}
//               />
//               Select Charts to Combine
//             </label>
//           </div>
//         ))}
//             <button onClick={handleCombineCharts}>Combine Charts</button>
//               {combinedChart && (
//                 <div>
//                   <h2>Combined Chart</h2>
//                   <ChartComponent
//                     type="line"
//                     title={combinedChart.title}
//                     series={combinedChart.series}
//                     categories={combinedChart.categories}
//                   />
//                 </div>
//               )}
//               </div>
//             );
//           };
          
  
//   export default ViewResultsDashboard;
  





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