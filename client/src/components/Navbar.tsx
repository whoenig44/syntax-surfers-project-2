import React from 'react';
interface NavbarProps {
  currentPage: 'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
    'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About';
  handlePageChange: (page: 'Home' | 'AddDataEntry' | 'RecordData' | 'ViewResultsDashboard' |
    'ViewIndividualResults' | 'AddNewNotes' | 'ViewNotes' | 'About') => void;
}
const Navbar: React.FC<NavbarProps> = ({ currentPage, handlePageChange }) => {
  return (
    <ul className="nav nav-tabs">
      {/* Home */}
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          style={{color: 'black',
          border: '1px solid black'
          }}
        >
          Home
        </a>
      </li>
      {/* Data Tracking Dropdown */}
      <li className="nav-item dropdown">
        <a
          href="#datatracking"
          onClick={(e) => e.preventDefault()} // Prevent default navigation
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          role="button"
          aria-expanded="false"
          style={{color: 'black',
          border: '1px solid black'
          }}
        >
          Data Tracking
        </a>
        <ul className="dropdown-menu">
          <li>
            <a
              href="#adddataentry"
              onClick={() => handlePageChange('AddDataEntry')}
              className={
                currentPage === 'AddDataEntry' ? 'dropdown-item active' : 'dropdown-item'
              }
            >
              Add Data Entry
            </a>
          </li>
          <li>
            <a
              href="#recorddata"
              onClick={() => handlePageChange('RecordData')}
              className={
                currentPage === 'RecordData' ? 'dropdown-item active' : 'dropdown-item'
              }
            >
              Record Data
            </a>
          </li>
          <li>
            <a
              href="#viewresultsdashboard"
              onClick={() => handlePageChange('ViewResultsDashboard')}
              className={
                currentPage === 'ViewResultsDashboard'
                  ? 'dropdown-item active'
                  : 'dropdown-item'
              }
            >
              View Results Dashboard
            </a>
          </li>
          <li>
            <a
              href="#viewindividualresults"
              onClick={() => handlePageChange('ViewIndividualResults')}
              className={
                currentPage === 'ViewIndividualResults'
                  ? 'dropdown-item active'
                  : 'dropdown-item'
              }
            >
              View Individual Results
            </a>
          </li>
        </ul>
      </li>
      {/* Notes Dropdown */}
      <li className="nav-item dropdown">
        <a
          href="#notes"
          onClick={(e) => e.preventDefault()} // Prevent default navigation
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          role="button"
          aria-expanded="false"
          style={{color: 'black',
          border: '1px solid black'
          }}
        >
          Notes
        </a>
        <ul className="dropdown-menu">
          <li>
            <a
              href="#addnewnotes"
              onClick={() => handlePageChange('AddNewNotes')}
              className={
                currentPage === 'AddNewNotes' ? 'dropdown-item active' : 'dropdown-item'
              }
            >
              Add New Notes
            </a>
          </li>
          <li>
            <a
              href="#viewnotes"
              onClick={() => handlePageChange('ViewNotes')}
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
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={{color: 'black',
          border: '1px solid black'
          }}
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
//           href="#home"
//           onClick={() => handlePageChange('Home')}
//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </a>
//       </li>

//       {/* Data Tracking Dropdown */}
//       <li className="nav-item dropdown">
//         <a
//           href="#datatracking"
//           onClick={(e) => e.preventDefault()} // Prevent default navigation
//           className="nav-link dropdown-toggle"
//           data-bs-toggle="dropdown"
//           role="button"
//           aria-expanded="false"
//         >
//           Data Tracking
//         </a>
//         <ul className="dropdown-menu">
//           <li>
//             <a
//               href="#adddataentry"
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
//               href="#recorddata"
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
//               href="#viewresultsdashboard"
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
//               href="#viewindividualresults"
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
//           href="#notes"
//           onClick={(e) => e.preventDefault()} // Prevent default navigation
//           className="nav-link dropdown-toggle"
//           data-bs-toggle="dropdown"
//           role="button"
//           aria-expanded="false"
//         >
//           Notes
//         </a>
//         <ul className="dropdown-menu">
//           <li>
//             <a
//               href="#addnewnotes"
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
//               href="#viewnotes"
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
//           href="#about"
//           onClick={() => handlePageChange('About')}
//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </a>
//       </li>
//     </ul>
//   );
// };

// export default Navbar;