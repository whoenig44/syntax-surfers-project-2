import React from 'react';
import { useLocation } from 'react-router-dom';
import { useChartData } from '../context/ChartDataContext';
import InputForm from '../context/inputForm';  // Import InputForm

const RecordData: React.FC = () => {
  const location = useLocation();
  const { newChartTitle, newChartType } = location.state || {}; // Receive chart title and type
  const { charts, addDataPoint } = useChartData();

  // Find the selected chart based on the title passed
  const selectedChart = charts.find(chart => chart.title === newChartTitle);

  // Handle submitting data to the chart
  const handleAddDataPoint = (chartId: number, title: string, x: string, y: number) => {
    if (selectedChart) {
      addDataPoint(chartId, x, y, title); // Add the data point using the context's addDataPoint function
    } else {
      console.error('Chart not found.');
    }
  };

  return (
    <div>
      <h1>Record Data</h1>
      {newChartTitle && newChartType && (
        <div>
          <h2>Selected Chart</h2>
          <p>Title: {newChartTitle}</p>
          <p>Chart Type: {newChartType}</p>
          
          {selectedChart && (
            <div>
              <h3>Data for {selectedChart.title}</h3>
              <InputForm
                chartId={selectedChart.id}
                onSubmit={handleAddDataPoint}  // Pass the handleAddDataPoint function
                defaultTitle={selectedChart.title}  // Pre-fill title for this chart
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecordData;




// const RecordData: React.FC = () => {
//   return (
//     <div className="record-data">
//       <h1>Record Data</h1>
//       <MultiChartComponent />
//     </div>
//   );
// };
// import React from 'react';

// export default RecordData;


// import React, {useState} from 'react';
// import InputForm from '../context/inputForm';
// import ChartComponent from './ChartComponent';
// import {useChartData} from '../context/ChartDataContext';

// const RecordData: React.FC = () => {
//   const {charts, addDataPoint} = useChartData();
//   const [chartTitle, setChartTitle] = useState('');
//   const [showChart, setShowChart] = useState(false);
  

//   // 
  
//   const handleDataSubmit = (title: string, x: string, y: number) => {
//     console.log('Data submitted:', {title, x, y}); //debugging purposes

//     const chart = charts.find((chart) => chart.title === title);
//     if (chart) {
//       console.log('Chart found for title:', title, chart);//debugging purposes
//       addDataPoint(chart.id, x, y, title);
//     } else {
//       console.error('Chart with the given title not found')
//     }
//     setChartTitle(title);
//     setShowChart(true);
//   };

//   console.log('Current charts state: ', charts); //debugging purposes

//   return ( 
//   <div> 
//     <h1>Recorded Data</h1> 
//     <InputForm onSubmit={handleDataSubmit} /> 
//     {showChart && ( 
//       <ChartComponent 
//       title={chartTitle || 'Default Chart'} 
//       type="line" 
//       series={[{ name: chartTitle || 'Data Series', 
//         data: charts.find((chart) => chart.title === chartTitle)?.series[0].data || [], 
//       }]} 
//       categories={charts.find((chart) => chart.title === chartTitle)?.categories || []} 
//       yAxisTitle={chartTitle || 'Values'} 
//       /> 
//     )} 
//     </div> 
//     ); 
//   }; 
  
//   export default RecordData;





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