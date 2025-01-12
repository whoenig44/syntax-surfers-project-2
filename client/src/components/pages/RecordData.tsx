import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import InputForm from './inputForm';
import ChartComponent from './ChartComponent';

const RecordData: React.FC = () => {
  const location = useLocation();
  const {title, x, y } = location.state || {title: '', x: '', y: 0 };
  const [recordedData, setrecordedData] = useState<{title: string, x: string, y: number} []>([{title, x, y}]);
  const [showChart, setShowChart] = useState(false); //set the initial state of the chart to hidden

  const handleDataSubmit = (title: string, x: string, y: number) => {
    setrecordedData((prevData) => [...prevData, {title, x, y}]);
    setShowChart(true); //Show chart after data is submitted
  };

  return (
    <div>
      <h1>Recorded Data Summary</h1>
      <InputForm onSubmit={handleDataSubmit} />
      {showChart && (
      <ChartComponent
        title={recordedData[0].title || 'Chart'}
        type="line"
        series={[{
          name: recordedData[0]?.title || 'Data Series',
          data: recordedData.map(data => ({ x: data.x, y: data.y }))
        }]}
        categories={recordedData.map(data => data.x)}
        yAxisTitle={recordedData[0]?.title || 'Values'} //set the y-axis title to match chart title
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