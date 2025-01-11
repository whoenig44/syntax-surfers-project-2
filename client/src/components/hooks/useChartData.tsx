import {useState, useEffect} from 'react';
import {fetchChartData} from '../../api/fetchChartData';
import {ChartData} from '../pages/type';
import Auth from '../../utils/auth';

export const useChartData = () => {
    const [chartData, setChartData] = useState<ChartData | null>(null);

    useEffect(() => {
        const loadChartData = async () => {
            const token = Auth.getToken(); //get authentication token
            try {
                const data = await fetchChartData (token); //pass the token to fetchChartData
            setChartData(data);
        } catch (error) {
            console.error('Error fetching chart data:', error);
        }
      };
      
      loadChartData();
    }, []);

    return chartData;
};

export default useChartData;