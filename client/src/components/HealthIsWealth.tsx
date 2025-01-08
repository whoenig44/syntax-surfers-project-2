import { useState } from 'react';
// import Navbar from './Navbar';
import Home from './pages/Home';
import AddDataEntry from './pages/AddDataEntry';
// import Footer from './Footer';
import Header from './Header';
import RecordData from './pages/RecordData';
import ViewResultsDashboard from './pages/ViewResultsDashboard';
import ViewIndividualResults from './pages/ViewIndividualResults';
import AddNewNotes from './pages/AddNewNotes';
import ViewNotes from './pages/ViewNotes';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function ReactPortfolio(): JSX.Element {
  
  const [currentPage, setCurrentPage] = useState<'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
  'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About'>('Home');

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
  


  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="my-4">{renderPage()}</main>
      {/* <Footer className="Footer"></Footer> */}
    </>
  );
}









// export default function HealthIsWealth() {
//   const [currentPage, setCurrentPage] = useState('AddNote');
//   // TODO: change useState to Home after more pages are running and navbar is functional


//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return <Home />;
//     }
    
    
//     if (currentPage === 'AddNote') {
//     return <AddNote />;
//     }
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <>
      
//       {/* <Header currentPage={currentPage} handlePageChange={handlePageChange} /> */}
//       <Header />
     
//       <main className="my-4">{renderPage()}</main>
//       {/* <Footer className="Footer"></Footer> */}
//     </>
//   );
// }