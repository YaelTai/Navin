import LogIn from "./conponents/LogIn"
import AddStore from "./conponents/addStore"
import OwnerHome from "./conponents/OwnerHome";
import ManagerHome from "./conponents/ManagerHome";

import Payment from "./conponents/Payment";
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
    <div className="card" >
        {/* <Payment/>  */}
      <OwnerHome/> 
       
      {/* perfect */}

<<<<<<< HEAD
     
      {/*  <LogIn/> not so good in big screen */}
      {/* <UpdateStoreDetails/> <Payment/> <AddStore/> <ManagerHome /> <UpdateStoreDetails/> */}
       
      
      
 
      
=======
      {/* <LogIn/> */}
      {/* not so good in big screen */}
      {/* <Payment/> */}
      {/* <AddStore/> */}

      <ManagerHome />
      {/* <UpdateStoreDetails/>  */ 
      }
      {/* <InddorMap /> */}
      {/* <Example/> */}
>>>>>>> 973ceee021d32eb5db771f368cbb59e80c5d5ac8
      
    </div>)
}

export default App;



