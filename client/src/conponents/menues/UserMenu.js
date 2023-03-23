
import { Dock } from "primereact/dock";
import { FcRotateCamera } from "react-icons/fc";
import "./DockDemo.css";
import { FcWorkflow } from "react-icons/fc";
import { useNavigate } from "react-router-dom";


export default function VisitorMenu() {
  const items = [
    {
      label: "Finder",
      icon: () => (
        <>
        <lable>
          <FcRotateCamera className="zoom" onClick={()=>{navigate("/visitor/")}}/>
        </lable>
        <lable onClick={()=>{navigate("/visitor/")}}>Where am I?</lable>
        </>
      ),
    },
   

    {
      label: "App Store",
      icon: () => (
      <>
        <lable >
          <FcWorkflow className="zoom" onClick={()=>{navigate("/visitor/chooseStores")}}/>
        </lable>
        <small onClick={()=>{navigate("/visitor/chooseStores")}}>Rebuild route</small>
        </>
      ),
    },
  ];
const navigate = useNavigate();
  return (
    <div className="dock-window" style={{"position":"sticky"}}>
      <Dock model={items} position="bottom" />
    </div>
  );
}
