import { useState, useEffect } from 'react';
import { fetchChartData, addDataPoint as saveDataPoint } from '../../api/fetchChartData';
import {ChartData, DataPoint} from '../pages/type';
import Auth from '../../utils/auth';

const useMultiChartData = () => {
  const [charts, setCharts] = useState<ChartData[]>([]);
  const [chartId, setChartId] = useState(1);

  useEffect(() => {
    const fetchInitialData = async () => {
      const token = Auth.getToken();
      try {
        const data = await fetchChartData(token);
        setCharts(data);
        //Update charId to ensure it starts fromt eh nex available ID
        if (data.length >0) {
          setChartId(data[data.length - 1].id + 1);
        }        
        } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchInitialData();
  }, []);

  const addNewChart = (title: string, type: 'bar' | 'line' | 'pie' = 'line') => { // Default type is 'line') => {
    setCharts((prevCharts) => [
      ...prevCharts,
      {
        id: chartId,
        title: title || `Chart #${chartId}`,
        type: type, 
        series: [{ name: 'User Data', data: [] }],
        categories: []
      }
    ]);
    setChartId((prevId) => prevId + 1);
  };

  const addDataPoint = async (chartId: number, x: string, y: number, title: string) => {
    setCharts((prevCharts) =>
      prevCharts.map((chart) =>
        chart.id === chartId
          ? {
              ...chart,
              series: [
                {
                  ...chart.series[0],
                  data: [...chart.series[0].data, { x, y, title } as DataPoint]
                }
              ]
            }
          : chart
      )
    );

    const token = Auth.getToken();
    try {
      await saveDataPoint(token, chartId, x, y, title);
    } catch (error) {
      console.error('Error saving data point:', error);
    }
  };

  const combineChartData = (chartIds: number[]): ChartData => { 
    const combinedSeries: { name: string; data: DataPoint[] }[] = []; 
    const combinedCategories: Set<string> = new Set(); 
    const combinedChartTitles: string [] = [];
    
    chartIds.forEach((id) => { 
      const chart = charts.find((chart) => chart.id === id); 
      if (chart) { 
        chart.series.forEach((series, index) => { 
          if (!combinedSeries[index]) { 
            combinedSeries[index] = { name: `Combined ${series.name}`, data: [] }; 
          } 
          combinedSeries[index].data.push(...series.data); 
          series.data.forEach((dataPoint) => combinedCategories.add(dataPoint.x)); 
        }); 
      } 
    }); 

    //Increment chartID to ensure unique IDfor teh combined chart
setChartId((prevId) => prevId + 1);

    return { 
      id: chartId, 
      title: `Combined ${combinedChartTitles.join(' ,  ')}`, 
      type: 'line',
      series: combinedSeries, 
      categories: Array.from(combinedCategories).sort(), 
    };
  };

  return {
    charts,
    addNewChart,
    addDataPoint,
    combineChartData,
  };
};

export default useMultiChartData;




// import {useState} from 'react';

// interface DataPoint {
//     x: string;
//     y: number;
// }


// interface ChartData {
//     id: number;
//     title: string;
//     series: {name: string; data: DataPoint[] }[];
//     categories: string[];
// }

// const useMultiChartData = () => {
//     const [charts, setCharts] = useState<ChartData[]>([]);
//     const [chartId, setChartId] = useState(1);
        
//         const addNewChart = () => {
//             setCharts((prevCharts) => [
//                 ...prevCharts,
//                 {
//                     id: chartId,
//                     title: `chart ${chartId}`,
//                     series: [{name: 'User Data', data: [] }],
//                     categories: []
//                 }
//             ]);
//             setChartId((prevId) => prevId + 1);
//         };    
    
    
//     const addDataPoint =(chartId: number, x: string, y: number) => {
//         setCharts((prevCharts) => 
//             prevCharts.map((chart) =>
//                 chart.id === chartId
//                 ? {
//                     ...chart,
//                     series: [
//                         {
//                             ...chart.series[0],
//                             data: [...chart.series[0].data,{x,y}]
//                         }
//                     ]
//                 }
//                 : chart
//             )
//         );
//     };
//     const combineChartData = (chartIds: number[]): ChartData => { 
//         const combinedSeries: { name: string; data: DataPoint[] }[] = []; 
//         const combinedCategories: Set<string> = new Set(); 
//         chartIds.forEach((id) => { 
//             const chart = charts.find((chart) => chart.id === id); 
//             if (chart) { 
//                 chart.series.forEach((series, index) => { 
//                     if (!combinedSeries[index]) { combinedSeries[index] = { name: series.name, data: [] }; 
//                 } 
//                 combinedSeries[index].data.push(...series.data); 
//                 series.data.forEach((dataPoint) => combinedCategories.add(dataPoint.x)); 
//             }); 
//         } 
//     }); 
//     return { 
//         id: chartId, 
//         title: 'Combined Chart', 
//         series: combinedSeries, 
//         categories: Array.from(combinedCategories).sort(), };
//      };

//     return {
//         charts,
//         addNewChart,
//         addDataPoint,
//         combineChartData,
//     };
// };

// export default useMultiChartData;








// //previous version
// //         ...prevCharts,
// //         {
// //             id: chartId,
// //             title:`Chart ${chartId}`,
// //             series: [{name: 'User Data', data: []}],
// //             categories: []
// //         }
// //     ]);
// //     setChartId((prevId) => prevId + 1);
// // };

// // const addDataPoint = (chartId: number, x: string, y: number) => {
// //     setChart((prevCharts) =>
// //     prevCharts.map((chart) =>  //Manages an array of chart data sets
// //     chart.id === chartId    //Checks if the chart ID matches the chart ID passed in and tracks the unique identifier for each chart
// //         ? {
// //             ...chart,
// //             series: [
// //                 {
// //                     ...chart.series[0],
// //                     data: [...chart.series[0].data, {x,y}]
// //                 }
// //             ]
// //     }
// //    : chart
// // )
// // ;)
// // };

// // return {
// //     charts,
// //     addNewChart,
// //     addDataPoint
// // };
// // };

// // export default useMultiChartData;