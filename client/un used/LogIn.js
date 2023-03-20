
import React, {useState}from 'react'
import './LogIn.css'
import { Card } from 'primereact/card';    

const header = (
  
  <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
);
const footer = (
  <div className="flex flex-wrap justify-content-end gap-2">

  </div>
);
const LogIn=()=>{
   
    return <>
    
    <Card title="Log In" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed'}}>
            <p className="m-0">
    <div class="login-box">

  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
</p>
        </Card> 
    </>
}
export default LogIn