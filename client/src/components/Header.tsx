import Navbar from './Navbar'
  type Page = "Home" | "AddDataEntry" | "RecordData" | "ViewResultsDashboard" | "ViewIndividualResults" | "AddNewNotes" | "ViewNotes" | "About";
  export default function Header({ currentPage, handlePageChange }: { currentPage: Page, handlePageChange: (page: Page) => void }) {
    return (
      <div className='_Header'>
        <div>
          <h1 style={{marginLeft:'40px', fontWeight: 'bold'}}>Health Is Wealth!</h1>
        </div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    );
  }
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
 
  

