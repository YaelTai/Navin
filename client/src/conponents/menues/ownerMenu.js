import { useNavigate } from "react-router-dom";
import { SpeedDial } from 'primereact/speeddial';
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css';



const ManagerMenu = () => {
  


  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', height: '350px' }}>




    <SpeedDial  direction="right" transitionDelay={80} showIcon="pi pi-home" hideIcon="pi pi-times" buttonClassName="p-button-outlined"
         onClick={()=>{ navigate("/owner")}}
  
   
  className="bottom-auto mr-17rem ml-0   "
/></div>
  );
}
export default ManagerMenu;