import { FC } from 'react';
import ChartComponent from '../ChartComponent';

const ViewIndividualResults: FC = () => {
  const chartData = {
    title: 'User Defined Chart',
    series: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }
    ],
    categories: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999']
  };

  return (
    <div className="app">
      <ChartComponent
        title={chartData.title}
        series={chartData.series}
        categories={chartData.categories}
      />  
    </div>
  );
};

  export default ViewIndividualResults;