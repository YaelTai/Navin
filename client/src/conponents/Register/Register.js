import React, { useEffect, useState ,useContext,useRef} from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { Card } from 'primereact/card';    
import { useAxios1 } from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";


const header = (
  
  <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
);
const footer = (
  <div className="flex flex-wrap justify-content-end gap-2">

  </div>
);
const Register = () => {
const toast = useRef(null);
const showError = (msg) => {
  toast.current.show({
    severity: "error",
    summary: "Error",
    detail: msg,
    life: 3000,
  });
};
const showSuccess = (msg) => {
  toast.current.show({
    severity: "success",
    summary: "Success",
    detail: msg,
    life: 3000,
  });
};

  // const {setUserId}=useContext(UserContext);

  const { postData } = useAxios1();
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [password,set_password]= useState({});
  const [email,set_email]= useState({});
  const navigate = useNavigate();
  const validate = (data) => {
    let errors = {};

  

    if (!data.email) {
      errors.email = "email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email ="invalid email address";
        
    }

    if (!data.password) {
      errors.password = "password is required";
    }

   
    // else  if (pass_valid != password ) {
    //     errors.password_validation = 'הסיסמה אינה זהה';
    //  }

    return errors;
  };

  const onSubmit =async  (data, form) => {
          
    setFormData(data);
    setShowMessage(true);
    const x={
      "Name":data.email,
      "Password":data.password
    }
    
    const res=await postData("owner/logIn",x)
   
    if(res.status!=201)
    {
 
      showError("wrong email or password")
      
    }
    
    else{
    // setUserId(res.data.Id)
    localStorage.setItem("user", res.data.Id);
   console.log('local', localStorage.getItem("user"));
    if (res.data.IsManager) navigate("/manager")
    else navigate("/owner")
    form.restart();}
    }

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  return (
    <Card title="Log In" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed',overflowY:"auto"}}>
    <p className="m-0">
   
    <Toast ref={toast} />
 
          <Form
            onSubmit={onSubmit}
            initialValues={{
              email: "",
              password: "",
            }}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                <Field
                  name="first_name"
                  render={({ input, meta }) => (
                    <div className="field">
                   
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-envelope" />
                        <InputText
                          id="email"
                          onChange={(e) => set_email(e.target.value)}
                          {...input}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="email"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          email*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />

                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <Password
                          id="password"
                          onChange={(e) => set_password(e.target.value)}
                          {...input}
                          toggleMask
                          feedback={false}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="password"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          password*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />

                <Button type="submit" label="Submit"  />
              </form>
            )}
          />
    </p>
        </Card>
  );
};

export default Register;
