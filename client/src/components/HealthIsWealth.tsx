import { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
// import Footer from './Footer';
import Header from './Header';


export default function HealthIsWealth() {
  const [currentPage, setCurrentPage] = useState('AddNote');
  // TODO: change useState to Home after more pages are running and navbar is functional


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    
    
    if (currentPage === 'AddNote') {
    return <AddNote />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      
      {/* <Header currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      <Header />
     
      <main className="my-4">{renderPage()}</main>
      {/* <Footer className="Footer"></Footer> */}
    </>
  );
}