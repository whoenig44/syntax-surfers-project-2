import { BrowserRouter } from 'react-router-dom';
import Content from './Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ChartDataProvider } from './context/ChartDataContext'; // Import the ChartDataProvider



export default function HealthIsWealth() {
  return (
    <BrowserRouter>
      <ChartDataProvider>
        <Content />
      </ChartDataProvider>
    </BrowserRouter>
  );
} 

