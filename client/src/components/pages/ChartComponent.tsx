//Importing the required libraries
import React from 'react';
import Chart from 'react-apexcharts';

//Define the DataPoint interface
interface DataPoint {
    x: string;
    y: number;
}
//Define ChartProps interface
interface ChartProps {
    title: string;
    type: 'bar' | 'line' | 'pie'; // Add more as needed
    series:{name: string; data: DataPoint[] } [];
    categories: string [];
    yAxisTitle?: string; //Optional prop for y-axis title
}

//Creating the ChartComponent
const ChartComponent: React.FC<ChartProps> =({title, type, series, categories, yAxisTitle})  => {
    const options = {
            chart: {
                id: 'dynamic-chart',
                type: type as 'line' | 'bar' | 'pie' //explicitly set type to line, bar or pie
            },
            xaxis: {
                type: 'datetime' as const, //explicitly set type to datetime
               labels: {
                format: 'MM-dd-yyyy'//format the x-axis labels
               },
               categories: categories //Ensure categories reflects the x-axis dates
            },
            yaxis: {
                title: {
                    text: yAxisTitle ||'Values' //sets teh y-axis title to match chart title
                },
                min: 0, //Sets the minimum value for the y-axis
                labels: {
                    formatter: (value: number) => value?.toFixed(0),
                }
             },
            title: {
                text: title //set the title of the chart
            }
        };

        return (
            <div className="chart-container">
                <h2>{title}</h2>
                <Chart options={options} series={series} type={type} width={500}/>
            </div>
        );
    };

    export default ChartComponent;






// //Importing the required libraries
// import React from 'react';
// import Chart from 'react-apexcharts';

// //import InputForm from './components/InputForm.tsx'; //Need to update this path
// //Creating the ChartComponent
// interface ChartProps {
//     title: string;
//     series:{name: string; data: number[] } [];
//     categories: string [];
// }

// const ChartComponent: React.FC<ChartProps> =({title, series, categories}) => {
//         const options ={
//             chart: {
//                 id: 'apexchart-example',
//                 type: 'bar',
//             },
//             xaxis: {
//                 categories: categories
//             },
//             series: series
//         };

//         return (
//             <div className="chart-container">
//                 <h2>{title}</h2>
//                 <Chart options={options} series={series} type="bar" width={500}
//             />
//             </div>
//         );
//     };

//     export default ChartComponent;
