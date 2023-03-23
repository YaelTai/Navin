import { useNavigate } from "react-router-dom";
import { Dock } from "primereact/dock";
import "./DockDemo.css";
import { AiFillHome } from "react-icons/ai";
export default function ManagerMenu() {
  const items = [
    {
      label: "Finder",
      icon: () => (
        <>
       <lable><AiFillHome className="zoom" onClick={()=>{navigate("/manager")}}/></lable>
        <lable onClick={()=>{navigate("/manager")}}>Home</lable>
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
