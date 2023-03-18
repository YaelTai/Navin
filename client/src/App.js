import LogIn from "./conponents/LogIn"
import AddStore from "./conponents/addStore"
import OwnerHome from "./conponents/OwnerHome";
import ManagerHome from "./conponents/ManagerHome";

import Payment from "./conponents/Payment";
import UpdateStoreDetails from "./conponents/UpdateStoreDetails";
import InddorMap from 'indoor-positioning-map'
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
import Example from "./conponents/b";
function App() {
  return (
    <div className="card" >
      {/* <OwnerHome/>  <UpdateStoreDetails/>
      {/* perfect */}

      {/* <LogIn/> */}
      {/* not so good in big screen */}
      {/* <Payment/> */}
      {/* <AddStore/> */}

      {/* <ManagerHome />
      <UpdateStoreDetails/>  */}
      {/* <InddorMap /> */}
      <Example/>
      
    </div>)
}

export default App;



