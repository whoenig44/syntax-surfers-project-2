// export interface SeriesData {
//     name: string;
//     data: {x: string; y: number }[];
// }

// export interface ChartData {
//     title: string;
//     type: 'bar' | 'line' | 'pie'; //Add more as needed
//     series: SeriesData[];
//     categories: string[];
// }

// export const fetchChartData = async (): Promise<ChartData> => {
//     try {
//         const response = await fetch('https://api.example.com/notes'); // Replace with your actual API endpoint 
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
//     } catch (error) {
//         console.error('Failed to fetch chart data:', error);
//         throw error, 
//      }
// };