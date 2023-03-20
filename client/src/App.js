import LogIn from "./conponents/LogIn"
import AddStore from "./conponents/addStore"
import OwnerHome from "./conponents/OwnerHome";
import ManagerHome from "./conponents/ManagerHome";


import UploadAd from "./conponents/UploadAd";
// import Payment from "./conponents/Payment";

import PriceList from "./conponents/priceList"
import UserHome from "./conponents/user_home"

import UpdateStoreDetails from "./conponents/UpdateStoreDetails";
import UpdatePersonalsDetail from "./conponents/UpdatePersonalDetails"

import UpdateCategories from "./conponents/Updatecategories";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import { Card } from 'primereact/card';    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";   
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';  
import 'primereact/resources/themes/saga-blue/theme.css';
import "./index.css"

const header = (
  <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
);
const footer = (
  <div className="flex flex-wrap justify-content-end gap-2">

  </div>
);

function App() {
  return (
    <Card title="Welcome!" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "97%" ,"position":"fixed"}}>
            <p className="m-0">

        {/* <Payment/> <OwnerHome/> < UpdatePersonalsDetail/>  */}
      {/* <UpdateCategories/> */}
       {/* <UploadAd/> <UpdateStoreDetails/>*/}
      {/* perfect */}
{/* <UpdateStoreDetails/> */}
<UserHome/>
      </p>
        </Card>)}
      // {/*  <LogIn/> not so good in big screen */}
      {/*  <Payment/> <AddStore/> <ManagerHome />  */}
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

      

  


export default App;



