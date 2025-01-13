import React, { useState } from 'react';
import InputForm from '../context/inputForm';
import ChartComponent from './ChartComponent';
import { useChartData } from '../context/ChartDataContext';

const MultiChartComponent: React.FC = () => {
  const { charts, addNewChart, addDataPoint } = useChartData();
  const [newChartTitle, setNewChartTitle] = useState('');
  const [newChartType, setNewChartType] = useState<'bar' | 'line' | 'pie'>('line');

  const handleAddNewChart = () => {
    addNewChart(newChartTitle || `Chart ${charts.length + 1}`, newChartType);
    setNewChartTitle('');
  };

  const handleAddDataPoint = (title: string, x: string, y: number) => {
    const chart = charts.find(c => c.title === title);
    if (chart) {
      addDataPoint(chart.id, x, y, title);
    } else {
      console.error('Chart with the given title not found');
    }
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
      {charts.map((chart) => (
        <div key={chart.id}>
          <h2>{chart.title}</h2>
          <InputForm onSubmit={(title, x, y) => handleAddDataPoint(title, x, y)} />
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


// import React from 'react';
// import InputForm from '../context/inputForm';
// import ChartComponent from './ChartComponent';
// import useMultiChartData from '../hooks/useMultiChartData';
// import { addDataPoint } from '../../api/fetchChartData'; // Import the addDataPoint function 
// import Auth from '../../utils/auth';

// const AddDataEntry: React.FC = () => {
//   const { charts, addNewChart, addDataPoint: addLocalDataPoint } = useMultiChartData();
//   const [selectedChartType, setSelectedChartType] = React.useState<'line' | 'bar' | 'pie'>('line'); // Default chart type is line

//   const handleChartTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedChartType(e.target.value as 'line' | 'bar' | 'pie');
//   };

//   const handleAddDataPoint = async (chartId: number, x: string, y: number, title: string) => {
//     const token = Auth.getToken(); // get token from Auth
//     try {
//       const chart = charts.find((chart) => chart.id === chartId); // find the chart with the given id
//       if (!chart) {
//         throw new Error(`Chart with ID ${chartId} not found`);
//       }

//       await addDataPoint(token, chartId, x, y); // pass the token to the BACKEND
//       addLocalDataPoint(chartId, x, y, title); // Update local state
//     } catch (error) {
//       console.error('Failed to add data point:', error);
//     }
//   };

//   const handleTrackNewItem = () => {
//     addNewChart(`New Chart ${charts.length + 1}`, selectedChartType);
//   }

//   return (
//     <div className="add-data-entry">
//       <h1>Add Data Entry</h1>
//       <button onClick={() => addNewChart(`New Chart ${charts.length + 1}`, selectedChartType)}>
//         Track New Item
//       </button>
//       <div>
//         <label>
//           Select Chart Type:
//           <select value={selectedChartType} onChange={handleChartTypeChange}>
//             <option value="line">Line</option>
//             <option value="bar">Bar</option>
//             <option value="pie">Pie</option>
//           </select>
//         </label>
//       </div>
//       {charts.map((chart) => (
//         <div key={chart.id}>
//           <h2>{chart.title}</h2>
//           <InputForm onSubmit={(title, x, y) => handleAddDataPoint(chart.id, x, y, title)} />
//           {chart.series[0].data.length > 0 && ( // Conditionally render the ChartComponent
//             <ChartComponent
//               type={selectedChartType} // Pass the chart type
//               title={chart.title}
//               series={chart.series}
//               categories={chart.categories}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AddDataEntry;


// // import React from 'react';
// // import InputForm from './inputForm';
// // import ChartComponent from './ChartComponent';
// // import useMultiChartData from '../hooks/useMultiChartData';
// // import { addDataPoint } from '../../api/fetchChartData'; // Import the addDataPoint function 
// // import Auth from '../../utils/auth';

// // const AddDataEntry: React.FC = () => {
// //     const {charts, addNewChart, addDataPoint: addLocalDataPoint } = useMultiChartData();
// //     const [selectedChartType, setSelectedChartType] = React.useState<'line' | 'bar' | 'pie'>('line'); //Default chart type is line

// //     const handleChartTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //         setSelectedChartType(e.target.value as 'line' | 'bar' | 'pie');
// //     };
// //      const handleAddDataPoint = async (chartId: number, x: string, y: number, title: string) => {
// //         const token = Auth.getToken(); //get token from Auth
// //         try {
// //             const chart = charts.find((chart) => chart.id === chartId); //find the chart with the given id
// //             if (!chart) {
// //                 throw new Error(`Chart with ID ${chartId} not found`);
// //             }

// //             await addDataPoint(token, chartId, x, y); //pass the token to the BACKEND
// //             addLocalDataPoint(chartId, x, y, title); //Update local state
// //           } catch (error) {
// //             console.error('Failed to add data point:', error);
// //           }
// //         };

// //         return (
// //             <div className="add-data-entry">
// //              <h1>Add Data Entry</h1>
// //                 <button onClick={() => addNewChart(`New Chart ${charts.length + 1}`, selectedChartType)}>
// //                     Track New Item
// //                 </button>
// //                 <div>
// //                  <label>
// //                     Select Chart Type:
// //                     <select value={selectedChartType} onChange={handleChartTypeChange}>
// //                         <option value="line">Line</option>
// //                         <option value="bar">Bar</option>
// //                         <option value="pie">Pie</option>
// //                     </select>
// //                 </label>
// //             </div>
// //             {charts.map((chart) => (
// //                 <div key={chart.id}>
// //                     <h2>{chart.title}</h2>
// //                     <InputForm 
// //                         onSubmit={(title, x, y) => handleAddDataPoint(chart.id, x, y, title)} 
// //                     />
// //                     <ChartComponent
// //                      type={selectedChartType} // Pass the chart type
// //                      title={chart.title}
// //                      series={chart.series}
// //                      categories={chart.categories}
// //                     />
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };
// // export default AddDataEntry;