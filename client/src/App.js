import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Login from "./conponents/login/login"
import DeleteSrore from "./conponents/manager/deleteStore"
import Register from "./conponents/Register/Register";
import ToolBar from "./conponents/menues/toolBar";
import AddStore from "./conponents/manager/addStore";
import OwnerHome from "./conponents/owner/OwnerHome";
import ManagerHome from "./conponents/manager/ManagerHome";
import UploadAd from "./conponents/owner/UploadAd";
import UpdatePriceList from "./conponents/manager/UpdatePriceList";
//import PriceList from "./conponents/priceList";
import VisitorHome from "./conponents/visitor/user_home";
import ChooseStores from "./conponents/visitor/ChooseStore";
import PresentLocation from "./conponents/visitor/present_location";
import UpdateStoreDetails from "./conponents/owner/UpdateStoreDetails";
import UpdatePersonalsDetail from "./conponents/owner/UpdatePersonalDetails";
import UpdateCategories from "./conponents/manager/Updatecategories";
import AppoveAds from "./conponents/manager/ApproveAds";
import Welcome from "./conponents/Welcome";
import AddOwner from "./conponents/manager/addOwner";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "./index.css";
import Payment from "./conponents/owner/Payment";
import Map from './conponents/map/Map'

function App() {
  return (
      <div className=" m-auto" >
       <Router>
        <Routes>
          
          <Route path="/" element={<Welcome/> } />

          <Route path="/manager" element={<ManagerHome />} />
          <Route path="/manager/logIn" element={<Register />} />
          <Route path="/manager/addStore" element={<AddStore />} />
          <Route path="/manager/updateCategories" element={<UpdateCategories />} />
          <Route path="/manager/approveAds" element={<AppoveAds />} />
          <Route path="/manager/removeStore" element={<DeleteSrore />} />
          <Route path="/manager/UpdatePriceList" element={<UpdatePriceList />} />
          <Route path="/manager/AddOwner" element={<AddOwner />} />

          <Route path="/owner" element={<OwnerHome />} />
          <Route path="/owner/logIn" element={<Register />} />
          <Route path="/owner/uploadAd" element={<UploadAd />} />
          {/* <Route path="/owner/priceList" element={<PriceList />} /> */}
          <Route path="payment" element={<Payment />} />

          <Route path="/owner/updateStoreDetails" element={<UpdateStoreDetails />} />
          <Route path="/owner/updatePersonalsDetail" element={<UpdatePersonalsDetail />} />

          <Route path="/visitor" element={<VisitorHome />} />
          <Route path="/visitor/chooseStores" element={<ChooseStores />} />
          <Route path="/visitor/presentLocation" element={<PresentLocation />} />

          
        
        </Routes>
      </Router>   
      </div>
      
    
  );
}

export default App;
