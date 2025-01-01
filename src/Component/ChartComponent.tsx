//Importing the required libraries
import React, {FC} from 'react';
import Chart from 'react-apexcharts';

//Creating the ChartComponent
interface ChartProps {
    title: string;
    series:{name: string; data: number[] } [];
    categories: string [];
}

const ChartComponent: FC<ChartProps> =({title, series, categories}) => {
        const options ={
            chart: {
                id: 'apexchart-example',
                type: 'bar',
            },
            xaxis: {
                categories: categories
            },
            series: series
        };

        return (
            <div className="chart-container">
                <h2>{title}</h2>
                <Chart options={options} series={series} type="bar" width={500}
            />
            </div>
        );
    };

    export default ChartComponent;
