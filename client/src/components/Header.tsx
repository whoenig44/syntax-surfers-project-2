import Navbar from './Navbar'




  
  export default function Header({ currentPage, handlePageChange }) {
    return (
      <div className='_Header'>
        <div>
          <h1>Health Is Wealth!</h1>
        </div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    );
  }
 
  
