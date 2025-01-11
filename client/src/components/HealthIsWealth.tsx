import { Router, BrowserRouter } from 'react-router-dom';
import Content from './Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default function HealthIsWealth() {
  

  // const renderPage = (): JSX.Element | null => {
  //   switch (currentPage) {
  //     case 'Home':
  //       return <Home />;
  //     case 'AddDataEntry':
  //       return <AddDataEntry />;
  //     case 'RecordData':
  //       return <RecordData />;
  //     case 'ViewResultsDashboard':
  //       return <ViewResultsDashboard />;
  //     case 'ViewIndividualResults':
  //       return <ViewIndividualResults />;
  //     case 'AddNewNotes':
  //       return <AddNewNotes />;
  //     case 'ViewNotes':
  //       return <ViewNotes />;
  //     case 'About':
  //       return <About />;
  //     default:
  //       return null;
  //   }
 

  

  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
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