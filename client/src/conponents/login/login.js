import React, { useState } from "react";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';

import { Button } from 'primereact/button';
import { useAxios1} from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom"

function Login(props) {
  const { getData, postData, updateData, deteteData } = useAxios1();
  const navigate = useNavigate();
  const [notValid, setNotValid] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler =async() => {
    //לטפל בעניין שאם המספר זהות לא קייים מחזיר שגיאה ולא מציג את ההודעה
    
    if (id == '' || password == '') {
      if(!notValid) setNotValid(true);
      return;
    }
    let { data, loading, error, refetch} = await getData(`manager/login/${id}`, password);
    if(!data){
      if(!notValid) setNotValid(true);
      return;
    }
    if(data.message){
      if(!notValid) setNotValid(true);
      return;
    }
    if(data.user){
      navigate("/Home")
    }
  }
  return (
    //style={{textAlign:"center"}}
    <div className="card">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Card title="הכנס פרטי כניסה" style={{ width: "50%", marginRight: "25%", textAlign:"center"}}>
        <div className="card flex justify-content-center">
          <InputText placeholder="הכנס מספר זהות" keyfilter="int" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <br></br>
        <div className="card flex justify-content-center">
          <InputText placeholder="הכנס סיסמה" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div> 
        {notValid && <><span style={{ color: "red" }}>מספר הזהות ו/או הסיסמה אינם נכונים</span> <br></br></>}
        <br></br>
        <div className="card flex justify-content-center">
          <Button onClick={() => { loginHandler() }}>הכנס</Button>
        </div>

      </Card>
    </div>
  )
}

export default Login