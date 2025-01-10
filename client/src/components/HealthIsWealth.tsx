import { useState, useEffect } from 'react';
import Home from './pages/Home';
import AddDataEntry from './pages/AddDataEntry';
import Footer from './Footer';
import Header from './Header';
import RecordData from './pages/RecordData';
import ViewResultsDashboard from './pages/ViewResultsDashboard';
import ViewIndividualResults from './pages/ViewIndividualResults';
import AddNewNotes from './pages/AddNewNotes';
import ViewNotes from './pages/ViewNotes';
import About from './pages/About';
import Login from './pages/Login';
import Auth from '../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function HealthIsWealth(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
  'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About'>('Home');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user is authenticated
    if (Auth.loggedIn()) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [Auth.loggedIn]);

  const renderPage = (): JSX.Element | null => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AddDataEntry') {
      return <AddDataEntry />;
    }
    if (currentPage === 'RecordData') {
      return <RecordData />;
    }
    if (currentPage === 'ViewResultsDashboard') {
      return <ViewResultsDashboard />;
    }
    if (currentPage === 'ViewIndividualResults') {
      return <ViewIndividualResults />;
    }
    if (currentPage === 'AddNewNotes') {
      return <AddNewNotes />;
    }
    if (currentPage === 'ViewNotes') {
      return <ViewNotes />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    return null;
  };

  const handlePageChange = (
    page: 'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
    'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About'
  ): void => {
    setCurrentPage(page);
  };

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="my-4">{renderPage()}</main>
      <Footer />
    </>
  );
}