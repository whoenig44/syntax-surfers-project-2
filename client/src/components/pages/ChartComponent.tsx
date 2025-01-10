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
}

//Creating the ChartComponent
const ChartComponent: React.FC<ChartProps> =({title, type, series, categories}) => {
    const options = {
            chart: {
                id: 'dynamic-chart',
                type: type as 'line' | 'bar' | 'pie' //explicitly set type to line, bar or pie
            },
            xaxis: {
                type: 'datetime' as const, //explicitly set type to datetime
               labels: {
                format: 'MM-dd-yyyy' //Customise the data format if we want it changed. 
               },
               categories: categories //Ensure categories reflects the x-axis dates
            },
            yaxis: {
                title: {
                    text: 'Values' //Customise the y-axis title to be based on user input!
                },
                min: 0, //Sets the minimum value for the y-axis
                labels: {
                    formatter: (value: number) => value.toFixed(0),
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
