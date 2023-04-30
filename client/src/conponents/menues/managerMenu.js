import { useNavigate } from "react-router-dom";
import { SpeedDial } from 'primereact/speeddial';
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css';



const ManagerMenu = () => {
  


  const navigate = useNavigate();

  return (
    <SpeedDial  direction="right" transitionDelay={80} showIcon="pi pi-home" hideIcon="pi pi-times" buttonClassName="p-button-outlined"
         onClick={()=>{ navigate("/manager")}}
  
   
  className="bottom-auto mr-17rem ml-0   "
/>
  );
}
export default ManagerMenu;