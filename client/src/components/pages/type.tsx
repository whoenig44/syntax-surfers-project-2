


export interface DataPoint {
    title: string;  
    x: string;
    y: number;
  }
  
  export interface ChartData {
    id: number;
    title: string;
    type: 'bar' | 'line' | 'pie';
    series: { name: string; data: DataPoint[] }[];
    categories: string[];
  }

  export interface ChartDataProviderProps {
    children: React.ReactNode;
  }