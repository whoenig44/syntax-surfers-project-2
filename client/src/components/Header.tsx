import React from 'react';
import { Page } from './pages/pageTypes'; // Import Page type
import Navbar from './Navbar';

interface HeaderProps {
    currentPage: Page;
    handlePageChange: (page: Page) => void;
    isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPage, handlePageChange, isAuthenticated }) => {
  return (
    <header>
      <h1>Health Is Wealth!</h1>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} isAuthenticated={isAuthenticated} />
    </header>
  
  
  // return (
    //     // <nav>
        //     <ul>
        //         <li>
        //             <a href="/" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'active' : ''}>Home</a>
        //         </li>
        //         {/* Add other navigation links similarly */}
        //     </ul>
        // </nav>
    );
};

export default Header;


// import Navbar from './Navbar'

//   type Page = "Home" | "AddDataEntry" | "RecordData" | "ViewResultsDashboard" | "ViewIndividualResults" | "AddNewNotes" | "ViewNotes" | "About";
//   export default function Header({ currentPage, handlePageChange, isAuthenticated }: { currentPage: Page, isAuthenticated: boolean, handlePageChange: (page: Page) => void }) {
// const handleChangeAuth = () => {
//   if (isAuthenticated) {
//     localStorage.removeItem('id_token');
//     window.location.assign('/login');
//   } else {
//     window.location.assign('/login');
//   }
// }    
    
    
    
//     return (
//       <div className='_Header'>
//         <div className="_Header-title">
//           <h1 style={{marginLeft:'40px', fontWeight: 'bold'}}>Health Is Wealth!</h1>
//           <button className="button" onClick = {handleChangeAuth}>{isAuthenticated ? "Log out" : "Log in"}</button>
//         </div>
//         <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//       </div>
//     );
//   }
// import Navbar from './Navbar'



  
//   type Page = "Home" | "AddDataEntry" | "RecordData" | "ViewResultsDashboard" | "ViewIndividualResults" | "AddNewNotes" | "ViewNotes" | "About";

//   export default function Header({ currentPage, handlePageChange }: { currentPage: Page, handlePageChange: (page: Page) => void }) {
//     return (
//       <div className='_Header'>
//         <div>
//           <h1>Health Is Wealth!</h1>
//         </div>
//         <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//       </div>
//     );
//   }
 
  

