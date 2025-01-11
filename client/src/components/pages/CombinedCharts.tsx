import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChartComponent from './ChartComponent';
import useMultiChartData from '../hooks/useMultiChartData';


const CombinedCharts: React.FC = () => {
  const { combineChartData } = useMultiChartData();
  const [combinedChart, setCombinedChart] = useState<ChartData | null>(null);
  const { chartIds } = useParams<{ chartIds: string }>(); // Get chart IDs from URL parameters

  useEffect(() => {
    if (chartIds) {
      const ids = chartIds.split(',').map(Number);
      const combined = combineChartData(ids);
      setCombinedChart(combined);
    }
  }, [chartIds, combineChartData]);

  return (
    <div>
      <h1>Combined Chart</h1>
      {combinedChart && (
        <ChartComponent
          type="line"
          title={combinedChart.title}
          series={combinedChart.series}
          categories={combinedChart.categories}
        />
      )}
    </div>
  );
};

export default CombinedCharts;
