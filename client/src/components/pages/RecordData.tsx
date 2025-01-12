import React, {useState} from 'react';
import InputForm from './inputForm';
import ChartComponent from './ChartComponent';
import {useChartData} from '../context/ChartDataContext';

const RecordData: React.FC = () => {
  const {charts, addDataPoint} = useChartData();
  const [chartTitle, setChartTitle] = useState('');
  const [showChart, setShowChart] = useState(false);
  // const {title, x, y } = location.state || {title: '', x: '', y: 0 };
  // const [recordedData, setrecordedData] = useState<{title: string, x: string, y: number} []>([{title, x, y}]);
  // const [showChart, setShowChart] = useState(false); //set the initial state of the chart to hidden

  // 
  
  const handleDataSubmit = (title: string, x: string, y: number) => {
    const chart = charts.find((chart) => chart.title === title);
    if (chart) {
      addDataPoint(chart.id, x, y, title);
    } else {
      console.error('Chart with the given title not found')
    }
    setChartTitle(title);
    setShowChart(true);
  };

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