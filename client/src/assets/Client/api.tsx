
const API_URL = 'https://cdn.jsdelivr.net/npm/react-apexcharts';
//cdn.jsdelivr.net/npm/react-apexcharts

export const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/data`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };