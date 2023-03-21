
import { Dock } from "primereact/dock";
import { FcRotateCamera } from "react-icons/fc";
import "./DockDemo.css";
import { FcWorkflow } from "react-icons/fc";
import { useNavigate } from "react-router-dom";


export default function UserMenu() {
  const items = [
    {
      label: "Finder",
      icon: () => (
        <>
        <lable>
          <FcRotateCamera className="zoom" onClick={()=>{navigate("/visitor/chooseStores")}}/>
        </lable>
        <lable onClick={()=>{navigate("/visitor/userHOme")}}>Where am I?</lable>
        </>
      ),
    },
   

    {
      label: "App Store",
      icon: () => (
      <>
        <lable >
          <FcWorkflow className="zoom" onClick={()=>{navigate("/visitor")}}/>

        </lable>
        <small onClick={()=>{navigate("/visitor")}}>Rebuild route</small>
        </>
      ),
    },
  ];
const navigate = useNavigate();
  return (
    

    <div className="dock-window">
      <Dock model={items} position="bottom" />
    </div>
  );
}
