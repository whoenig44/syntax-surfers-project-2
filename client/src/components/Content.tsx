
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
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
    const navigate = useNavigate(); //hook for SPA navigation
    const [currentPage, setCurrentPage] = useState<Page>('Home');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const authStatus = Auth.loggedIn();
        setIsAuthenticated(authStatus !== "" && authStatus !== false);

        if (authStatus === "" || authStatus === false) {
            if (location.pathname !== '/login') {
                navigate('/login');
            }
        }
    }, [location.pathname, navigate]); // Add location.pathname and navigate as dependencies
  
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


