import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DeleteSrore from "./conponents/deleteStore"
import Register from "./conponents/Register/Register";
import ToolBar from "./conponents/visitotToolBar/toolBar";
import AddStore from "./conponents/addStore";
import OwnerHome from "./conponents/OwnerHome";
import ManagerHome from "./conponents/ManagerHome";
import UploadAd from "./conponents/UploadAd";
// import Payment from "./conponents/Payment";
import PriceList from "./conponents/priceList";
import VisitorHome from "./conponents/user_home";
import ChooseStores from "./conponents/ChooseStore";
import PresentLocation from "./conponents/present_location";
import UpdateStoreDetails from "./conponents/UpdateStoreDetails";
import UpdatePersonalsDetail from "./conponents/UpdatePersonalDetails";
import UpdateCategories from "./conponents/Updatecategories";
import AppoveAds from "./conponents/ApproveAds";
import Welcome from "./conponents/Welcome";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "./index.css";

function App() {
  return (
    <><DeleteSrore/>
{/* 
       <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/manager" element={<ManagerHome />} />
          <Route path="/manager/logIn" element={<Register />} />
          <Route path="/manager/addStore" element={<AddStore />} />
          <Route path="/manager/updateCategories" element={<UpdateCategories />} />
          <Route path="/manager/approveAds" element={<AppoveAds />} />


          <Route path="/owner" element={<OwnerHome />} />
          <Route path="/owner/uploadAd" element={<UploadAd />} />
          <Route path="/owner/priceList" element={<PriceList />} />
          <Route path="/owner/updateStoreDetails" element={<UpdateStoreDetails />} />
          <Route path="/owner/updatePersonalsDetail" element={<UpdatePersonalsDetail />} />

          <Route path="/visitor" element={<VisitorHome />} />
          <Route path="/visitor/chooseStores" element={<ChooseStores />} />
          <Route path="/visitor/presentLocation" element={<PresentLocation />} />

          
          
        </Routes>
      </Router>  */}
    </>
  );
}

export default App;
