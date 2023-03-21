import { useNavigate } from "react-router-dom";
import { Dock } from "primereact/dock";
import "./DockDemo.css";
import { AiFillHome } from "react-icons/ai";
export default function OwnerMenu() {
  const items = [
    {
      label: "Finder",
      icon: () => (
        <>
       <lable><AiFillHome className="zoom" onClick={()=>{navigate("/owner")}}/></lable>
        <lable onClick={()=>{navigate("/owner")}}>Home</lable>
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
