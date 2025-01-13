import { ChartData } from  '../components/pages/type';
const apiEndpoint = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';


export interface SeriesData {
    name: string;
    data: {x: string; y: number }[];
}


// Function to fetch user-specific chart data 
export const fetchChartData = async (token: string): Promise<ChartData[]> => { 
    try { 
        const response = await fetch(`${apiEndpoint}/api/charts`, { 
            headers: { 
                'Authorization': `Bearer ${token}`, 
            }, 
        }); 
        // if (!response.ok) { 
        //     throw new Error('Network response was not ok'); 
        // } 
        const data = await response.json();
        console.log('Data from API', data); 
        return data; 
    } catch (error) { 
        console.error('Failed to fetch chart data:', error); 
        throw error; 
    } 
};

// Function to add a new data point to a user-specific chart 
export const addDataPoint = async (token: string, chartId: number, x: string, y: number) => { 
    try { 
        const response = await fetch(`${apiEndpoint}/api/charts/data-point`, { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`, 
        }, 
        body: JSON.stringify({ chartId, x, y }), 
    }); 
    if (!response.ok) { 
        throw new Error('Failed to add data point'); 
    } 
  } catch (error) { 
    console.error('Error adding data point:', error); 
    throw error; 
} 
};
