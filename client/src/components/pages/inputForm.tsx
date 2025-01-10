import React, { useState } from 'react';

interface InputFormProps {
  onSubmit: (x: string, y: number) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(x, parseFloat(y));
    setX('');
    setY('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          X (Date):
          <input type="text" value={x} onChange={(e) => setX(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Y (Value):
          <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
        </label>
      </div>
      <button type="submit">Add Data Point</button>
    </form>
  );
};

export default InputForm;


// import { FC, useState, useEffect } from 'react';
// import ChartComponent from './MultiChartComponent';
// import InputForm from './inputForm';
// import { fetchChartData, ChartData } from '../api/fetchChartData'; //Need to update the fetch chart data path to the correct notes file. 

// const App: FC = () => {
//   const [chartData, setChartData] = useState<ChartData | null>(null);

//   useEffect(() => {
//     const loadChartData = async () => {
//       try {
//         const data = await fetchChartData();
//         setChartData(data);
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       }
//     };
//     loadChartData();
//   }, []);

//   const handleFormSubmit = async (formData: any) => {
//     try {
//       const data = await fetchChartData(formData);
//       setChartData(data);
//     } catch (error) {
//       console.error("Error submitting form data:", error);
//     }
//   };

//   return (
//     <div className="app">
//       <h1>Dynamic Chart Generator</h1>
//       <InputForm onSubmit={handleFormSubmit} />
//       {chartData && (
//         <ChartComponent
//           type={chartData.type}
//           title={chartData.title}
//           series={chartData.series}
//           categories={chartData.categories}
//         />
//       )}
//     </div>
//   );
// };

// export default App;