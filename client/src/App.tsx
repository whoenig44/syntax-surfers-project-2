import React, { useState, use Effect } from 'react';
import ChartComponent from './components/ChartComponent';
import InputForm from './Component/InputForm'; //Need to update this path 

interface SEriesData {
  name: string;
  data: number[];
}

interface ChartData {
  title: string;
  type: 'bar' | 'line' | 'pie'; //Add more as needed
  series: SeriesData[];
  categories: string[];
}

constfetchChartData = async (): Promise<ChartData> => {
  try {
    const response = await fetch('https://api.example.com/notes') //Where are we acutally getting the data from?
    if (!response.ok {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return {
      title: data.title,
      type: data.chartType as 'bar' | 'line' | 'pie', //Add more as needed
      series: data.series,
      categories: data.categories
    };
  } catch (error) {
    console.error('Failed to fetch chart data:', error);
    throw error;
  }
};

const App: FC = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => async () => {
    const loadChartData = async () => {
      const data = await fetchChartData();
      setChartData(data);
    };
    loadChartData();
  }, []);
    
  return (
    <div className="app">
      <h1>Dynamic Chart generator</h1>
      <InputForm onSubmit={handleFormSubmit}/>  
      {chartData && (
        <ChartComponent
      type="line" //you can change this to whatever type you've got defined
      type={chartData.type}  
      title={chartData.title}
      series={chartData.series}
      categories={chartData.categories}
        /> 
      )} 
    </div>
  );
};

export default App;


// import React, { FC } from 'react';
// import ChartComponent from './Component/ChartComponent';

// const App: FC = () => {
//   const chartData = {
//     title: 'User Defined Chart',
//     series: [
//       {
//         name: 'series-1',
//         data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//       }
//     ],
//     categories: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999']
//   };

//   return (
//     <div className="app">
//       <ChartComponent
//         title={chartData.title}
//         series={chartData.series}
//         categories={chartData.categories}
//       />  
//     </div>
//   );
// };

//   export default App;






// import { useState } from 'react';
// import smanticLogo from './assets/smanticsurferimage.jpg';
// import './App.css';
// import LineGraph from './Component/bargraph';

// // Explicitly type the component as a React Functional Component (FC)
// const App: React.FC = () => {
//   // Typing useState with 'number' to indicate count will always be a number
//   const [count, setCount] = useState<number>(0);

//   return (
//     <>
//       <div>
//         <a href="https://github.com/whoenig44/syntax-surfers-project-2" target="_blank" rel="noopener noreferrer">
//           <img src={smanticLogo} className="logo" alt="Semantic Surfers Logo" />
//         </a>
//       </div>
//       <h1>Welcome to the Health Monitoring Application!!!</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Push to main branch of Git Repo to trigger rebuild of Production Application
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Semantic Surfers Logo above to go to the GitHub Repository for this project
//       </p>
//       <LineGraph />
//     </>
//   );
// };

// export default App;
