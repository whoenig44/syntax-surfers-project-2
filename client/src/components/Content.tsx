import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddDataEntry from './pages/AddDataEntry';
import RecordData from './pages/RecordData';
import ViewResultsDashboard from './pages/ViewResultsDashboard';
//import CombinedCharts from './pages/CombinedCharts'; // New combined charts page
import ViewIndividualResults from './pages/ViewIndividualResults';
import AddNewNotes from './pages/AddNewNotes';
import ViewNotes from './pages/ViewNotes';
import About from './pages/About';
import Login from './pages/Login';
import Footer from './Footer';
import Header from './Header';
import Auth from '../utils/auth';


export default function Content(): JSX.Element {
    type Page = 'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
    'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About';  

    const location = useLocation();
    console.log(location)
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const authStatus = Auth.loggedIn();
    console.log(authStatus)
    if (authStatus) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
     if (location.pathname !== '/login') {
      window.location.assign('/login');
     }
    }
  }, []);

  
  const handlePageChange = (
      page: 'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
        'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About' 
    ): void => {
      setCurrentPage(page);
    };
    return (
        <>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} isAuthenticated = {isAuthenticated} />
              <main className="my-4">
               
                <Routes>  
                  <Route path="/" element={<Home />} /> 
                  <Route path="/add-data-entry" element={<AddDataEntry />} />
                  <Route path="/record-data" element={<RecordData />} />
                  <Route path="/view-results-dashboard" element={<ViewResultsDashboard />} />
                  <Route path="/view-individual-results" element={<ViewIndividualResults />} />
                  <Route path="/add-new-notes" element={<AddNewNotes />} />
                  <Route path="/view-notes" element={<ViewNotes />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />  
                </Routes>  
              </main>
              <Footer /> 
        </>
    )
}