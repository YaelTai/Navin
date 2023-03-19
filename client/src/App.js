import LogIn from "./conponents/LogIn"
import AddStore from "./conponents/addStore"
import OwnerHome from "./conponents/OwnerHome";
import ManagerHome from "./conponents/ManagerHome";
import UploadAd from "./conponents/UploadAd";
import Payment from "./conponents/Payment";
import UpdateStoreDetails from "./conponents/UpdateStoreDetails";
import UpdatePersonalsDetail from "./conponents/UpdatePersonalDetails"

import UpdateCategories from "./conponents/Updatecategories";
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
        {/* <Payment/> <OwnerHome/> < UpdatePersonalsDetail/>  */}
      <UpdateCategories/>
       {/* <UploadAd/> <UpdateStoreDetails/>*/}
      {/* perfect */}

    
      {/* <UpdateStoreDetails/> <LogIn/> not so good in big screen */}
      {/*  <Payment/> <AddStore/> <ManagerHome />  */}
       
      
      
 
      
      
    </div>)
}

export default App;



