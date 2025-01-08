import React from 'react';
import InputForm from './InputForm';
import ChartComponent from './ChartComponent';
//import {DataPoint} from './hooks/useUserData'; Updates with the multichart component
import useMultiChartData from '../hooks/useMultiChartData';

const MultiChartComponent: React.FC = () => {
    const {charts, addNewChart, addDataPoint } = useMultiChartData();

    return (
        <div>
            <button onClick={addNewChart}>Track New Item</button>
            {charts.map((chart) => (
                <div key={chart.id}>
                    <h2>{}chart.title</h2>
                    <InputForm add DataPoint={(x,y) => addDataPoint(chart.id, x, y)} />
                    <ChartComponent
                     title={chart.title}
                     series={chart.series}
                     categories={chart.categories}
                    />
                </div>
            ))}
        </div>
    );
};

export default MultiChartComponent;


//Previous Code prior to the multichartdata component:

// interface ChartData {
//     id: number;
//     title: string;
//     series: {name: string; data: DataPoint[] }[];
//     categories: string[];
// }

// const MultiChartComponent: React.FC = () => {
//     const [charts, setCharts] = useState<ChartData[]>([]);
//     const [chartId, setChartId] = useState(1);

//     const addNewChart = () => {
//         setCharts((prevCharts) => [
//             ...prevCharts,
//             {
//                 id: chartId,
//                 title: `Chart ${chartId}`,
//                 series: [{name: 'User Data', data: [] }],
//                 categories: []
//             }
//         ]);
//         setChartId((prevId) => prevId + 1);
//     };

//     const addDataPoint = (chartID: number, x: string, y: number) => {
//         setCharts((prevCharts) =>
//         prevCharts.map((chart) =>
//         chart.id === chartId
//     ? {
//         ...chart,
//         series: [
//             {
//                 ...chart.series[0],
//                 data: [...chart.series[0].data, {x,y}]
//             }
//           ]
//         }
//        : chart
//     )
//     );
// };

// return (
//     <div>
//         <button onClick={addNewChart}>Track New Item</button>
//         {charts.map((chart) => (
//             <div key={chart.id}>
//                 <h2>{chart.title}</h2>
//                 <InputForm addDataPoint={(x, y) => addDataPoint(chart.id, x, y)} />
//                 <ChartComponent
//                 title={chart.title}
//                 series={chart.series}
//                 categories={chart.categories}
//                 />
//             </div>
//         ))}
//     </div>    
//   );
// };

// export default MultiChartComponent