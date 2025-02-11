import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddDataEntry from './pages/AddDataEntry';    
import RecordData from './pages/RecordData';
import ViewResultsDashboard from './pages/ViewResultsDashboard';
import ViewIndividualResults from './pages/ViewIndividualResults';
import AddNewNotes from './pages/AddNewNotes';
import ViewNotes from './pages/ViewNotes';
import About from './pages/About';
import Login from './pages/Login';
import Footer from './Footer';
import Header from './Header';
import Auth from '../utils/auth';
import CreateTracker from './pages/CreateTracker';
import ListTrackers from './pages/ListTrackers';
import { Page } from './pages/pageTypes'; // Import Page type

export default function Content(): JSX.Element {
   
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const authStatus = Auth.loggedIn();
    console.log(authStatus);
    if (authStatus) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      if (location.pathname !== '/login') {
        navigate('/login');
      }
    }
  }, [navigate, location.pathname]);

  
    const handlePageChange = (page: Page): void => {
        setCurrentPage(page);
        navigate(`/${page.toLowerCase().replace(/ /g, '-')}`);
    };
    
    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} isAuthenticated={isAuthenticated} />
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
                    <Route path="/create-tracker" element={<CreateTracker />} />
                    <Route path="/list-trackers" element={<ListTrackers />} />
                   
                    
                </Routes>
            </main>
            <Footer />
        </>
    );
}


