import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddDataEntry from './pages/AddDataEntry';
import RecordData from './pages/RecordData';
import ViewResultsDashboard from './pages/ViewResultsDashboard';
import CombinedCharts from './pages/CombinedCharts'; // New combined charts page
import ViewIndividualResults from './pages/ViewIndividualResults';
import AddNewNotes from './pages/AddNewNotes';
import ViewNotes from './pages/ViewNotes';
import About from './pages/About';
import Login from './pages/Login';
import Footer from './Footer';
import Header from './Header';
import Auth from '../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default function HealthIsWealth(): JSX.Element {
  type Page = 'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
    'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About' | 'CombinedCharts';
  
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (Auth.loggedIn()) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (!isAuthenticated) {
    return <Login />;
  }

  const renderPage = (): JSX.Element | null => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'AddDataEntry':
        return <AddDataEntry />;
      case 'RecordData':
        return <RecordData />;
      case 'ViewResultsDashboard':
        return <ViewResultsDashboard />;
      case 'ViewIndividualResults':
        return <ViewIndividualResults />;
      case 'AddNewNotes':
        return <AddNewNotes />;
      case 'ViewNotes':
        return <ViewNotes />;
      case 'About':
        return <About />;
      default:
        return null;
    }
  };

  const handlePageChange = (
    page: 'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
      'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About' | 'CombinedCharts'
  ): void => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="my-4">
        {renderPage()}
        <Routes>  
          <Route path="/" element={<Home />} /> 
          <Route path="/add-data-entry" element={<AddDataEntry />} />
          <Route path="/record-data" element={<RecordData />} />
          <Route path="/view-results-dashboard" element={<ViewResultsDashboard />} />
          <Route path="/view-individual-results" element={<ViewIndividualResults />} />
          <Route path="/add-new-notes" element={<AddNewNotes />} />
          <Route path="/view-notes" element={<ViewNotes />} />
          <Route path="/about" element={<About />} />
          <Route path="/combined-charts/:chartIds" element={<CombinedCharts />} />  
        </Routes>  
      </main>
      <Footer /> 
    </Router>
  );
} 

//useEffect(() => {
//     // Check if the user is authenticated
//     if (Auth.loggedIn()) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }
//   }, [Auth.loggedIn]);

//   const renderPage = (): JSX.Element | null => {
//     if (currentPage === 'Home') {
//       return <Home />;
//     }
//     if (currentPage === 'AddDataEntry') {
//       return <AddDataEntry />;
//     }
//     if (currentPage === 'RecordData') {
//       return <RecordData />;
//     }
//     if (currentPage === 'ViewResultsDashboard') {
//       return <ViewResultsDashboard />;
//     }
//     if (currentPage === 'ViewIndividualResults') {
//       return <ViewIndividualResults />;
//     }
//     if (currentPage === 'AddNewNotes') {
//       return <AddNewNotes />;
//     }
//     if (currentPage === 'ViewNotes') {
//       return <ViewNotes />;
//     }
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     return null;
//   };

//   const handlePageChange = (
//     page: 'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
//     'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About'
//   ): void => {
//     setCurrentPage(page);
//   };

//   if (!isAuthenticated) {
//     return <Login />;
//   }

//   return (
//     <>
//       <Header currentPage={currentPage} handlePageChange={handlePageChange} />
//       <main className="my-4">{renderPage()}</main>
//       <Footer />
//     </>
//   );
// }