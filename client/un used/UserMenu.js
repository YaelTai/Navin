
// import { Dock } from "primereact/dock";
// import { FcRotateCamera } from "react-icons/fc";
// import "./DockDemo.css";
// import { FcWorkflow } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";


// export default function VisitorMenu() {
//   const items = [
//     {
//       label: "Finder",
//       icon: () => (
//         <>
//         <label>
//           <FcRotateCamera className="zoom" onClick={()=>{navigate("/visitor/")}}/>
//         </label>
//         <label onClick={()=>{navigate("/visitor/")}}>Where am I?</label>
//         </>
//       ),
//     },
   

//     {
//       label: "App Store",
//       icon: () => (
//       <>
//         <label >
//           <FcWorkflow className="zoom" onClick={()=>{navigate("/visitor/chooseStores")}}/>
//         </label>
//         <small onClick={()=>{navigate("/visitor/chooseStores")}}>Rebuild route</small>
//         </>
//       ),
//     },
//   ];
// const navigate = useNavigate();
//   return (
//     <div className="dock-window" style={{"position":"sticky"}}>
//       <Dock model={items} position="bottom" />
//     </div>
//   );
// }
