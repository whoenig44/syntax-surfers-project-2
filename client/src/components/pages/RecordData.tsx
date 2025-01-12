import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import InputForm from './inputForm';
import ChartComponent from './ChartComponent';

const RecordData: React.FC = () => {
  const location = useLocation();
  const {title, x, y } = location.state || { x: '', y: 0 };
  const [recordedData, setrecordedData] = useState<{title: string, x: string, y: number} []>([{title, x, y}]);

  const handleDataSubmit = (title: string, x: string, y: number) => {
    setrecordedData((prevData) => [...prevData, {title, x, y}]);
  };

  return (
    <div>
      <h1>Recorded Data</h1>
      <InputForm onSubmit={handleDataSubmit} />
      <h2>Recorded Data</h2>
      <ul>
        {recordedData.map((data, index) => (
          <li key={index}>X (Date): {data.x}, Y (Value): {data.y}</li>
        ))}
      </ul>
      <ChartComponent 
      title={recordedData[0]?.title || 'Chart'} 
      type="line" // You can change this to 'bar' or 'pie' as needed 
      series={[{ 
        name: 'Data Series', 
        data: recordedData.map(data => ({ x: data.x, y: data.y })) 
      }]} 
      categories={recordedData.map(data => data.x)}
      />
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