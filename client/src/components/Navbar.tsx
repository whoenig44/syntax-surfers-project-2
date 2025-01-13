import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from './pages/pageTypes'; // Import Page type

interface NavbarProps {
  currentPage: Page;
  handlePageChange: (page: Page) => void;
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, handlePageChange}) => {
  return (
    <ul className="nav nav-tabs">
      {/* Home */}
      <li className="nav-item">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); handlePageChange('Home'); }}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          style={{ color: 'black', border: '1px solid black' }}
        >
          Home
        </a>
      </li>
      {/* Data Tracking Dropdown */}
      <li className="nav-item dropdown">
        <a
          href="/data-tracking"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          role="button"
          aria-expanded="false"
          style={{ color: 'black', border: '1px solid black' }}
        >
          Data Tracking
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link
              to="/add-data-entry"
              onClick={() => handlePageChange('AddDataEntry')}
              className={
                currentPage === 'AddDataEntry' ? 'dropdown-item active' : 'dropdown-item'
              }
            >
              Add Data Entry
            </Link>
          </li>
          <li>
            <Link
              to="/record-data"
              onClick={() => handlePageChange('RecordData')}
              className={
                currentPage === 'RecordData' ? 'dropdown-item active' : 'dropdown-item'
              }
            >
              Record Data
            </Link>
          </li>
          <li>
            <Link
              to="/view-results-dashboard"
              onClick={() => handlePageChange('ViewResultsDashboard')}
              className={
                currentPage === 'ViewResultsDashboard'
                  ? 'dropdown-item active'
                  : 'dropdown-item'
              }
            >
              View Results Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/view-individual-results"
              onClick={() => handlePageChange('ViewIndividualResults')}
              className={
                currentPage === 'ViewIndividualResults'
                  ? 'dropdown-item active'
                  : 'dropdown-item'
              }
            >
              View Individual Results
            </Link>
          </li>
        </ul>
      </li>
      {/* Notes Dropdown */}
      <li className="nav-item dropdown">
        <a
          href="/notes"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          role="button"
          aria-expanded="false"
          style={{ color: 'black', border: '1px solid black' }}
        >
          Notes
        </a>
        <ul className="dropdown-menu">
          <li>
            <a
              href="/add-new-notes"
              onClick={(e) => { e.preventDefault(); handlePageChange('AddNewNotes'); }}
              className={
                currentPage === 'AddNewNotes' ? 'dropdown-item active' : 'dropdown-item'
              }
            >
              Add New Notes
            </a>
          </li>
          <li>
            <a
              href="/view-notes"
              onClick={(e) => { e.preventDefault(); handlePageChange('ViewNotes'); }}
              className={
                currentPage === 'ViewNotes' ? 'dropdown-item active' : 'dropdown-item'
              }
            >
              View Notes
            </a>
          </li>
        </ul>
      </li>
      {/* About */}
      <li className="nav-item">
        <a
          href="/about"
          onClick={(e) => { e.preventDefault(); handlePageChange('About'); }}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={{ color: 'black', border: '1px solid black' }}
        >
          About
        </a>
      </li>
    </ul>
  );
};

export default Navbar;

// import React from 'react';

// interface NavbarProps {
//   currentPage: 'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
//     'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About';
//   handlePageChange: (page: 'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
//     'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About') => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ currentPage, handlePageChange }) => {
//   return (
//     <ul className="nav nav-tabs">
//       {/* Home */}
//       <li className="nav-item">
//         <a
//           href="/"
//           onClick={(e) => { e.preventDefault(); handlePageChange('Home'); }}
//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//           style={{color: 'black', border: '1px solid black'}}
//         >
//           Home
//         </a>
//       </li>
//       {/* Data Tracking Dropdown */}
//       <li className="nav-item dropdown">
//         <a
//           href="/data-tracking"
//           className="nav-link dropdown-toggle"
//           data-bs-toggle="dropdown"
//           role="button"
//           aria-expanded="false"
//           style={{color: 'black', border: '1px solid black'}}
//         >
//           Data Tracking
//         </a>
//         <ul className="dropdown-menu">
//           <li>
//             <a
//               href="/add-data-entry"
//               onClick={(e) => { e.preventDefault(); handlePageChange('AddDataEntry'); }}
//               className={
//                 currentPage === 'AddDataEntry' ? 'dropdown-item active' : 'dropdown-item'
//               }
//             >
//               Add Data Entry
//             </a>
//           </li>
//           <li>
//             <a
//               href="/record-data"
//               onClick={(e) => { e.preventDefault(); handlePageChange('RecordData'); }}
//               className={
//                 currentPage === 'RecordData' ? 'dropdown-item active' : 'dropdown-item'
//               }
//             >
//               Record Data
//             </a>
//           </li>
//           <li>
//             <a
//               href="/view-results-dashboard"
//               onClick={(e) => { e.preventDefault(); handlePageChange('ViewResultsDashboard'); }}
//               className={
//                 currentPage === 'ViewResultsDashboard'
//                   ? 'dropdown-item active'
//                   : 'dropdown-item'
//               }
//             >
//               View Results Dashboard
//             </a>
//           </li>
//           <li>
//             <a
//               href="/view-individual-results"
//               onClick={(e) => { e.preventDefault(); handlePageChange('ViewIndividualResults'); }}
//               className={
//                 currentPage === 'ViewIndividualResults'
//                   ? 'dropdown-item active'
//                   : 'dropdown-item'
//               }
//             >
//               View Individual Results
//             </a>
//           </li>
//         </ul>
//       </li>
//       {/* Notes Dropdown */}
//       <li className="nav-item dropdown">
//         <a
//           href="/notes"
//           className="nav-link dropdown-toggle"
//           data-bs-toggle="dropdown"
//           role="button"
//           aria-expanded="false"
//           style={{color: 'black', border: '1px solid black'}}
//         >
//           Notes
//         </a>
//         <ul className="dropdown-menu">
//           <li>
//             <a
//               href="/add-new-notes"
//               onClick={(e) => { e.preventDefault(); handlePageChange('AddNewNotes'); }}
//               className={
//                 currentPage === 'AddNewNotes' ? 'dropdown-item active' : 'dropdown-item'
//               }
//             >
//               Add New Notes
//             </a>
//           </li>
//           <li>
//             <a
//               href="/view-notes"
//               onClick={(e) => { e.preventDefault(); handlePageChange('ViewNotes'); }}
//               className={
//                 currentPage === 'ViewNotes' ? 'dropdown-item active' : 'dropdown-item'
//               }
//             >
//               View Notes
//             </a>
//           </li>
//         </ul>
//       </li>
//       {/* About */}
//       <li className="nav-item">
//         <a
//           href="/about"
//           onClick={(e) => { e.preventDefault(); handlePageChange('About'); }}
//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//           style={{color: 'black', border: '1px solid black'}}
//         >
//           About
//         </a>
//       </li>
//     </ul>
//   );
// };

// export default Navbar;
// import React from 'react';
// interface NavbarProps {
//   currentPage: 'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
//     'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About';
//   handlePageChange: (page: 'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
//     'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About') => void;
// }
// const Navbar: React.FC<NavbarProps> = ({ currentPage, handlePageChange }) => {
//   return (
//     <ul className="nav nav-tabs">
//       {/* Home */}
//       <li className="nav-item">
//         <a
//           href="/"
//           onClick={() => handlePageChange('Home')}
//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//           style={{color: 'black',
//           border: '1px solid black'
//           }}
//         >
//           Home
//         </a>
//       </li>
//       {/* Data Tracking Dropdown */}
//       <li className="nav-item dropdown">
//         <a
//           href="/data-tracking"
//           className="nav-link dropdown-toggle"
//           data-bs-toggle="dropdown"
//           role="button"
//           aria-expanded="false"
//           style={{color: 'black',
//           border: '1px solid black'
//           }}
//         >
//           Data Tracking
//         </a>
//         <ul className="dropdown-menu">
//           <li>
//             <a
//               href="/add-data-entry"
//               onClick={() => handlePageChange('AddDataEntry')}
//               className={
//                 currentPage === 'AddDataEntry' ? 'dropdown-item active' : 'dropdown-item'
//               }
//             >
//               Add Data Entry
//             </a>
//           </li>
//           <li>
//             <a
//               href="/record-data"
//               onClick={() => handlePageChange('RecordData')}
//               className={
//                 currentPage === 'RecordData' ? 'dropdown-item active' : 'dropdown-item'
//               }
//             >
//               Record Data
//             </a>
//           </li>
//           <li>
//             <a
//               href="/view-results-dashboard"
//               onClick={() => handlePageChange('ViewResultsDashboard')}
//               className={
//                 currentPage === 'ViewResultsDashboard'
//                   ? 'dropdown-item active'
//                   : 'dropdown-item'
//               }
//             >
//               View Results Dashboard
//             </a>
//           </li>
//           <li>
//             <a
//               href="/view-individual-results"
//               onClick={() => handlePageChange('ViewIndividualResults')}
//               className={
//                 currentPage === 'ViewIndividualResults'
//                   ? 'dropdown-item active'
//                   : 'dropdown-item'
//               }
//             >
//               View Individual Results
//             </a>
//           </li>
//         </ul>
//       </li>
//       {/* Notes Dropdown */}
//       <li className="nav-item dropdown">
//         <a
//           href="/notes"
          
//           className="nav-link dropdown-toggle"
//           data-bs-toggle="dropdown"
//           role="button"
//           aria-expanded="false"
//           style={{color: 'black',
//           border: '1px solid black'
//           }}
//         >
//           Notes
//         </a>
//         <ul className="dropdown-menu">
//           <li>
//             <a
//               href="/add-new-notes"
//               onClick={() => handlePageChange('AddNewNotes')}
//               className={
//                 currentPage === 'AddNewNotes' ? 'dropdown-item active' : 'dropdown-item'
//               }
//             >
//               Add New Notes
//             </a>
//           </li>
//           <li>
//             <a
//               href="/view-notes"
//               onClick={() => handlePageChange('ViewNotes')}
//               className={
//                 currentPage === 'ViewNotes' ? 'dropdown-item active' : 'dropdown-item'
//               }
//             >
//               View Notes
//             </a>
//           </li>
//         </ul>
//       </li>
//       {/* About */}
//       <li className="nav-item">
//         <a
//           href="/about"
//           onClick={() => handlePageChange('About')}
//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//           style={{color: 'black',
//           border: '1px solid black'
//           }}
//         >
//           About
//         </a>
//       </li>
//     </ul>
//   );
// };
// export default Navbar;


