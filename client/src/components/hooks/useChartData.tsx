import {useState, useEffect} from 'react';
import {fetchChartData, ChartData} from '../api/fetchChartData';

export const useChartData = () => {
    const [chartData, setChartData] = useState<ChartData | null>(null);

    useEffect(() => {
        const loadChartData = async () => {
            const data = await fetchChartData ();
            setChartData(data);
        };
        loadChartData();
    }, []);

    return chartData;
};