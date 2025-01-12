import React from 'react';
import InputForm from './inputForm';
import ChartComponent from './ChartComponent';
import useMultiChartData from '../hooks/useMultiChartData';


const MultiChartComponent: React.FC = () => {
  const { charts, addNewChart, addDataPoint } = useMultiChartData();

  const handleAddDataPoint = (title: string, x: string, y: number) => {
    // Find the chart with the given title
    const chart = charts.find(c => c.title === title);
    if (chart) {
      addDataPoint(chart.id, x, y);
    } else {
      console.error('Chart with the given title not found');
    }
  };

  return (
    <div>
      <button onClick={addNewChart}>Track New Item</button>
      {charts.map((chart) => (
        <div key={chart.id}>
          <h2>{chart.title}</h2>
          <InputForm onSubmit={(title, x, y) => handleAddDataPoint(title, x, y)} />
          <ChartComponent
            title={chart.title}
            type="line" // or 'bar', 'pie' as needed
            series={chart.series}
            categories={chart.categories}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiChartComponent;




// import { useState, useEffect } from 'react';
// import { fetchChartData, addDataPoint as saveDataPoint } from '../../api/fetchChartData';
// import Auth from '../../utils/auth';

// interface DataPoint {
//   x: string;
//   y: number;
// }

// interface ChartData {
//   id: number;
//   title: string;
//   series: { name: string; data: DataPoint[] }[];
//   categories: string[];
// }

// const useMultiChartData = () => {
//   const [charts, setCharts] = useState<ChartData[]>([]);
//   const [chartId, setChartId] = useState(1);

//   useEffect(() => {
//     const fetchInitialData = async () => {
//       const token = Auth.getToken();
//       try {
//         const data = await fetchChartData(token);
//         setCharts(data);
//         if (data.length > 0) {
//           setChartId(data[data.length - 1].id + 1);
//         }
//       } catch (error) {
//         console.error('Error fetching initial data:', error);
//       }
//     };

//     fetchInitialData();
//   }, []);

//   const addNewChart = () => {
//     setCharts((prevCharts) => [
//       ...prevCharts,
//       {
//         id: chartId,
//         title: `Chart ${chartId}`,
//         series: [{ name: 'User Data', data: [] }],
//         categories: []
//       }
//     ]);
//     setChartId((prevId) => prevId + 1);
//   };

//   const addDataPoint = async (chartId: number, x: string, y: number) => {
//     setCharts((prevCharts) =>
//       prevCharts.map((chart) =>
//         chart.id === chartId
//           ? {
//               ...chart,
//               series: [
//                 {
//                   ...chart.series[0],
//                   data: [...chart.series[0].data, { x, y }]
//                 }
//               ]
//             }
//           : chart
//       )
//     );

//     const token = Auth.getToken();
//     try {
//       await saveDataPoint(token, chartId, x, y);
//     } catch (error) {
//       console.error('Error saving data point:', error);
//     }
//   };

//   return {
//     charts,
//     addNewChart,
//     addDataPoint
//   };
// };

// export default useMultiChartData;






// // import { useState } from 'react';

// // interface DataPoint {
// //   x: string;
// //   y: number;
// // }

// // interface ChartData {
// //   id: number;
// //   title: string;
// //   series: { name: string; data: DataPoint[] }[];
// //   categories: string[];
// // }

// // const useMultiChartData = () => {
// //   const [charts, setCharts] = useState<ChartData[]>([]);
// //   const [chartId, setChartId] = useState(1);

// //   const addNewChart = () => {
// //     setCharts((prevCharts) => [
// //       ...prevCharts,
// //       {
// //         id: chartId,
// //         title: `Chart ${chartId}`,
// //         series: [{ name: 'User Data', data: [] }],
// //         categories: []
// //       }
// //     ]);
// //     setChartId((prevId) => prevId + 1);
// //   };

// //   const addDataPoint = (chartId: number, x: string, y: number) => {
// //     setCharts((prevCharts) =>
// //       prevCharts.map((chart) =>
// //         chart.id === chartId
// //           ? {
// //               ...chart,
// //               series: [
// //                 {
// //                   ...chart.series[0],
// //                   data: [...chart.series[0].data, { x, y }]
// //                 }
// //               ]
// //             }
// //           : chart
// //       )
// //     );
// //   };

// //   return {
// //     charts,
// //     addNewChart,
// //     addDataPoint
// //   };
// // };

// // export default useMultiChartData;





// // import React from 'react';
// // import InputForm from './inputForm';
// // //import ChartComponent from './ChartComponent';
// // //import {DataPoint} from './hooks/useUserData'; Updates with the multichart component
// // import useMultiChartData from '../hooks/useMultiChartData';

// // const MultiChartComponent: React.FC = () => {
// //     const {charts, addNewChart, addDataPoint } = useMultiChartData();

// //     return (
// //         <div>
// //             <button onClick={addNewChart}>Track New Item</button>
// //             {charts.map((chart) => (
// //                 <div key={chart.id}>
// //                     <h2>{}chart.title</h2>
// //                     <InputForm add DataPoint={(x,y) => addDataPoint(chart.id, x, y)} />
// //                     <MultiChartComponent
// //                      title={chart.title}
// //                      series={chart.series}
// //                      categories={chart.categories}
// //                     />
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default MultiChartComponent;


// // // Previous Code prior to the multichartdata component:

// // interface ChartData {
// //     id: number;
// //     title: string;
// //     series: {name: string; data: DataPoint[] }[];
// //     categories: string[];
// // }

// // const MultiChartComponent: React.FC = () => {
// //     const [charts, setCharts] = useState<ChartData[]>([]);
// //     const [chartId, setChartId] = useState(1);

// //     const addNewChart = () => {
// //         setCharts((prevCharts) => [
// //             ...prevCharts,
// //             {
// //                 id: chartId,
// //                 title: `Chart ${chartId}`,
// //                 series: [{name: 'User Data', data: [] }],
// //                 categories: []
// //             }
// //         ]);
// //         setChartId((prevId) => prevId + 1);
// //     };

// //     const addDataPoint = (chartID: number, x: string, y: number) => {
// //         setCharts((prevCharts) =>
// //         prevCharts.map((chart) =>
// //         chart.id === chartId
// //     ? {
// //         ...chart,
// //         series: [
// //             {
// //                 ...chart.series[0],
// //                 data: [...chart.series[0].data, {x,y}]
// //             }
// //           ]
// //         }
// //        : chart
// //     )
// //     );
// // };

// // return (
// //     <div>
// //         <button onClick={addNewChart}>Track New Item</button>
// //         {charts.map((chart) => (
// //             <div key={chart.id}>
// //                 <h2>{chart.title}</h2>
// //                 <InputForm addDataPoint={(x, y) => addDataPoint(chart.id, x, y)} />
// //                 <ChartComponent
// //                 title={chart.title}
// //                 series={chart.series}
// //                 categories={chart.categories}
// //                 />
// //             </div>
// //         ))}
// //     </div>    
// //   );
// // };

// // export default MultiChartComponent