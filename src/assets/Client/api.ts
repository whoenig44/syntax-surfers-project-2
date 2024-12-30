
import ApexCharts from 'apexcharts'

const API_URL = 'https://cdn.jsdelivr.net/npm/apexcharts';

export const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/data`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };