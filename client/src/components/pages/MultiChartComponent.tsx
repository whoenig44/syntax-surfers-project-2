import React, { useState } from 'react';
import InputForm from '../context/inputForm';
import ChartComponent from './ChartComponent';
import { useChartData } from '../context/ChartDataContext';
import { ChartData } from './type';


const MultiChartComponent: React.FC = () => {
  const { charts, addNewChart, addDataPoint } = useChartData();
  const [newChartTitle, setNewChartTitle] = useState<string>('');
  const [newChartType, setNewChartType] = useState<'bar' | 'line' | 'pie'>('line');

  const handleAddNewChart = () => {
    if (newChartTitle.trim() !== '') {
      addNewChart(newChartTitle, newChartType);
      setNewChartTitle('');
    } else {
      addNewChart(`Chart ${charts.length + 1}`, newChartType);
    }
  };
    
  const handleAddDataPoint = (chartId: number, x: string, y: number, title: string) => {
    addDataPoint(chartId, x, y, title);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter new chart title"
          value={newChartTitle}
          onChange={(e) => setNewChartTitle(e.target.value)}
        />
        <select value={newChartType} onChange={(e) => setNewChartType(e.target.value as 'bar' | 'line' | 'pie')}>
          <option value="line">Line</option>
          <option value="bar">Bar</option>
          <option value="pie">Pie</option>
        </select>
        <button onClick={handleAddNewChart}>Track New Item</button>
      </div>
      {charts.map((chart: ChartData) => (
        <div key={chart.id}>
          <h2>{chart.title}</h2>
          <InputForm
            chartId={chart.id}
            onSubmit={(x, y, title) => handleAddDataPoint(chart.id, title, x, y)}
            defaultTitle={chart.title}
          />
          {chart.series[0].data.length > 0 && (
            <ChartComponent
              title={chart.title}
              type={chart.type}
              series={chart.series}
              categories={chart.categories}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiChartComponent;




// import React, { useState } from 'react';
// import InputForm from '../context/inputForm';
// import ChartComponent from './ChartComponent';
// import { useChartData } from '../context/ChartDataContext';

// const MultiChartComponent: React.FC = () => {
//   const { charts, addNewChart, addDataPoint } = useChartData();
//   const [newChartTitle, setNewChartTitle] = useState('');
//   const [newChartType, setNewChartType] = useState<'bar' | 'line' | 'pie'>('line');

//   const handleAddNewChart = () => {
//     addNewChart(newChartTitle || `Chart ${charts.length + 1}`, newChartType);
//     setNewChartTitle('');
//   }

//   const handleAddDataPoint = (title: string, x: string, y: number) => {
//     const chart = charts.find(c => c.title === title);
//     if (chart) {
//       addDataPoint(chart.id, x, y, title);
//     } else {
//       console.error('Chart with the given title not found');
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter new chart title"
//           value={newChartTitle}
//           onChange={(e) => setNewChartTitle(e.target.value)}
//         />
//         <select value={newChartType} onChange={(e) => setNewChartType(e.target.value as 'bar' | 'line' | 'pie')}>
//           <option value="line">Line</option>
//           <option value="bar">Bar</option>
//           <option value="pie">Pie</option>
//         </select>
//         <button onClick={handleAddNewChart}>Track New Item</button>          
//       </div>
//       {charts.map((chart) => (
//         <div key={chart.id}>
//           <h2>{chart.title}</h2>
//           <InputForm onSubmit={(title, x, y) => handleAddDataPoint(title, x, y)} />
//           {chart.series[0].data.length > 0 && (
//             <ChartComponent
//               title={chart.title}
//               type={chart.type}
//               series={chart.series}
//               categories={chart.categories}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MultiChartComponent;



// import React, {useState} from 'react';
// import InputForm from './inputForm';
// import ChartComponent from './ChartComponent';
// import useMultiChartData from '../hooks/useMultiChartData';


// const MultiChartComponent: React.FC = () => {
//   const { charts, addNewChart, addDataPoint } = useMultiChartData();
//   const [newChartTitle, setNewChartTitle] = useState('');
//   const [newChartType, setNewChartType] = useState<'bar' | 'line' | 'pie'>('line');

//   const handleAddNewChart = () => {
//     addNewChart(newChartTitle || `Chart ${charts.length + 1}`);
//     setNewChartTitle('');
//   }

//   const handleAddDataPoint = (title: string, x: string, y: number) => {
//     // Find the chart with the given title
//     const chart = charts.find(c => c.title === title);
//     if (chart) {
//       addDataPoint(chart.id, x, y, title);
//     } else {
//       console.error('Chart with the given title not found');
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter new chart title"
//           value={newChartTitle}
//           onChange={(e) => setNewChartTitle(e.target.value)}
//         />
//         <select value={newChartType} onChange={(e) => setNewChartType(e.target.value as 'bar' | 'line' | 'pie')}>
//           <option value="line">Line</option>
//           <option value="bar">Bar</option>
//           <option value="pie">Pie</option>
//         </select>
//         <button onClick={handleAddNewChart}>Track New Item</button>          
//       </div>
//       {charts.map((chart) => (
//         <div key={chart.id}>
//           <h2>{chart.title}</h2>
//           <InputForm onSubmit={(title, x, y) => handleAddDataPoint(title, x, y)} />
//           <ChartComponent
//             title={chart.title}
//             type={chart.type} // or 'bar', 'pie' as needed
//             series={chart.series}
//             categories={chart.categories}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MultiChartComponent;




