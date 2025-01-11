export interface SeriesData {
    name: string;
    data: {x: string; y: number }[];
}

export interface ChartData {
    title: string;
    type: 'bar' | 'line' | 'pie'; //Add more as needed
    series: SeriesData[];
    categories: string[];
}

// Function to fetch user-specific chart data 
export const fetchChartData = async (token: string): Promise<ChartData[]> => { 
    try { 
        const response = await fetch('/api/charts', { 
            headers: { 
                'Authorization': `Bearer ${token}`, 
            }, 
        }); 
        if (!response.ok) { 
            throw new Error('Network response was not ok'); 
        } 
        const data = await response.json(); 
        return data; 
    } catch (error) { 
        console.error('Failed to fetch chart data:', error); 
        throw error; 
    } 
};

// Function to add a new data point to a user-specific chart 
export const addDataPoint = async (token: string, chartId: number, x: string, y: number) => { 
    try { 
        const response = await fetch('/api/charts/data-point', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, 
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

// export const fetchChartData = async (): Promise<ChartData> => {
//     try {
//         const response = await fetch('./api/userAPI'); // Replace with your actual API endpoint from notes 
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return {
//             title: data.title,
//             type: data.charType as 'bar' | 'line' | 'pie', //Add more as needed
//             series: data.series,
//             categories: data.categories,
//         };
//     } catch (error:any) {
//         console.error('Failed to fetch chart data:', error);
//         throw error; 
//      }
// };