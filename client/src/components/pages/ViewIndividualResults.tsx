import React from 'react';
import ChartComponent from './ChartComponent';
import { useChartData } from '../context/ChartDataContext';

const ViewIndividualResults: React.FC = () => {
  const { charts } = useChartData();

  return (
    <div className="view-individual-results">
      <h1>View Individual Results</h1>
      {charts.length === 0 ? (
        <p>No charts available. Please add charts in the "Record Data" page.</p>
      ) : (
        charts.map((chart) => (
          <div key={chart.id}>
            <h2>{chart.title}</h2>
            {chart.series[0].data.length > 0 && (
              <ChartComponent
                title={chart.title}
                type={chart.type}
                series={chart.series}
                categories={chart.categories}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ViewIndividualResults;


// import React from 'react';
// import InputForm from '../context/inputForm'; // Adjust the path as needed
// import ChartComponent from './ChartComponent'; // Adjust the path as needed
// import useMultiChartData from '../hooks/useMultiChartData'; // Adjust the path as needed

// const ViewIndividualResults: React.FC = () => {
//   const { charts, addNewChart, addDataPoint } = useMultiChartData();

//   return (
//     <div className="view-individual-results">
//       <h1>Individual Results</h1>
//       <button onClick={addNewChart}>Add New Chart</button>
//       {charts.map((chart) => (
//         <div key={chart.id}>
//           <h2>{chart.title}</h2>
//           <InputForm onSubmit={(x, y) => addDataPoint(chart.id, x, y)} />
//           <ChartComponent
//             type="line" // Example chart type
//             title={chart.title}
//             series={chart.series}
//             categories={chart.categories}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ViewIndividualResults;







//Old Code: export default function ViewIndividualResults() {
//     return (
//       <div>
//         <h1>Add Data Entry</h1>
//         <p>
//          This will be the page where users enter which behaviors they want to track.
//         </p>
//       </div>
//     );
//   }