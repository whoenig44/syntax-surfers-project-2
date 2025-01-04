//Importing the required libraries
import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

//Creating the ChartComponent
interface SeriesData {
    name: string;
    data: number[];
}

interface ChartProps {
    title: string;
    series:SeriesData[];
    categories: string[];
    type?: 'bar' | 'line' | 'pie'; //Add more as needed
}

const ChartComponent: React.FC<ChartProps> =({title, series, categories, type= 'line'}) => {
    // Ensure that series data is of the correct type
    series.forEach(serie => {
        if (!Array.isArray(serie.data) || !serie.data.every(item => typeof item === 'number')) {
            throw new Error('Series data must be an array of numbers'); //This many need to be removed depending on the type of data we use. However if its the series for the axies this would be correct. 
        }
    });    
    
    const options ={
            chart: {
                id: 'apexchart-example',
                type: type, //Use the type from props
            },
            xaxis: {
                categories: categories
            },
            title: {
                text: title,
                align: 'center' as 'center', //Align the title to the center
            }
    
        };

        useEffect(() => {
            const chart = new ApexCharts(document.querySelector("#chart") as HTMLElement, options);
            chart.render(); //Renders a new chart
            return() => {
                chart.destroy(); //Clean-up: Destroy previous chart before rendering a new one
            };
        }, [options]); //Only 'options' should be passed as a dependency

        return (
            <div className="chart-container">
                <h2>{title}</h2>
                <Chart options={options} series={series} type={type} width={500} //I believe that if we change this to a % it will be responsive
            />
            </div>
        );
    };

    export default ChartComponent;
