//Importing the required libraries
import Chart from 'react-apexcharts';
import InputForm from './components/InputForm.tsx'; //Need to update this path
//Creating the ChartComponent
interface ChartProps {
    title: string;
    series:{name: string; data: number[] } [];
    categories: string [];
}

const ChartComponent: React.FC<ChartProps> =({title, series, categories}) => {
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
