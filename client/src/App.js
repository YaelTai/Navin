import LogIn from "./conponents/LogIn"
import AddStore from "./conponents/addStore"
import OwnerHome from "./conponents/OwnerHome";
import ManagerHome from "./conponents/ManagerHome";
import PriceList from "./conponents/priceList"
import UserHome from "./conponents/user_home"
// #import Payment from "./conponents/
import UpdateStoreDetails from "./conponents/UpdateStoreDetails";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";   
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';  
import 'primereact/resources/themes/saga-blue/theme.css';
import "./index.css"

function App() {
  return (
    <div >
        {/* <Payment/>  */}
      {/* <OwnerHome/>  */}
       
      {/* perfect */}
<UserHome/>

     {/* <PriceList/> */}
      {/*  <LogIn/> not so good in big screen */}
      {/* <UpdateStoreDetails/> <Payment/> <AddStore/> <ManagerHome /> <UpdateStoreDetails/> */}
       
      
      
 
      

      {/* <LogIn/> */}
      {/* not so good in big screen */}
    
      {/* <AddStore/> */}
{/* 
      <ManagerHome /> */}
      {/* <UpdateStoreDetails/>  */ 
      }
      {/* <InddorMap /> */}
      {/* <Example/> */}

      
    </div>)
}

export default App;



