import React, {useState} from 'react';
import InputForm from '../context/inputForm';
import ChartComponent from './ChartComponent';
import {useChartData} from '../context/ChartDataContext';

const RecordData: React.FC = () => {
  const {charts, addDataPoint} = useChartData();
  const [chartTitle, setChartTitle] = useState('');
  const [showChart, setShowChart] = useState(false);
  

  // 
  
  const handleDataSubmit = (title: string, x: string, y: number) => {
    console.log('Data submitted:', {title, x, y}); //debugging purposes

    const chart = charts.find((chart) => chart.title === title);
    if (chart) {
      console.log('Chart found for title:', title, chart);//debugging purposes
      addDataPoint(chart.id, x, y, title);
    } else {
      console.error('Chart with the given title not found')
    }
    setChartTitle(title);
    setShowChart(true);
  };

  console.log('Current charts state: ', charts); //debugging purposes

  return ( 
  <div> 
    <h1>Recorded Data</h1> 
    <InputForm onSubmit={handleDataSubmit} /> 
    {showChart && ( 
      <ChartComponent 
      title={chartTitle || 'Default Chart'} 
      type="line" 
      series={[{ name: chartTitle || 'Data Series', 
        data: charts.find((chart) => chart.title === chartTitle)?.series[0].data || [], 
      }]} 
      categories={charts.find((chart) => chart.title === chartTitle)?.categories || []} 
      yAxisTitle={chartTitle || 'Values'} 
      /> 
    )} 
    </div> 
    ); 
  }; 
  
  export default RecordData;





// export default function RecordData() {
//     return (
//       <div>
//         <h1>Record Data</h1>
//         <p>
//          This will be the page where users which behaviors they did on a certain date.
//         </p>
//       </div>
//     );
//   }