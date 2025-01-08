import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import logo from "../assets/smanticsurferimage.jpg";
import "./Header.css"


// export default function Header({
//     currentPage, handlePageChange
// }) {
//     return (
//       <div className='_Header'>
//         <div>
//             <h1>Health Is Wealth!</h1>
//         </div>

//         <Navbar currentPage={currentPage} handlePageChange={handlePageChange}></Navbar>
//       </div>
//     );
//   }



export default function Header() {
  return (
    <header className='_Header'>
      <div className="container">
        <div className="header">
          <div>
            <Link to="/">
              <img src={logo} alt="Health is Wealth logo" />
            </Link>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}


