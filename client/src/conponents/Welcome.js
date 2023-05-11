import React, { useEffect } from "react";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import NAVIN2 from '../videos/NAVIN2.mp4'
import card from '../images/card.png'
import { Button } from 'primereact/button';

const Welcome = () => {
    localStorage.clear();
  const header = (
    <>
      <img
        alt="Card"
        src={card}
        style={{ width: "100%", height: "50px" }}
      />
      <Button
        style={{
          backgroundColor: "rgb(173,222,78)",
          border: "none",
          height: "30px",
          marginLeft: "3%",
          borderRadius: "5px",
        }}
        onClick={() => navigate("/manager/logIn")} 


      >
        log in
      </Button>
     
    </>
  );
  const footer = (
    <div className="flex flex-wrap justify-content-center gap-2">
     <Button style={{"backgroundColor":"rgb(173,222,78)"}} label=" Let's start!"   onClick={() => navigate("/visitor" )}  />
            {/* <button
        style={{
          backgroundColor: "lightblue",
          border: "none",
          height: "30px",
          marginLeft: "39px",
          borderRadius: "5px",
        }}
      

      >
        Let's start
      </button> */}
    </div>
  );
  const navigate = useNavigate();

  return (
    <>
     <div className="flex flex-wrap justify-content-center gap-2">
      <Card
        title="Welcome!"
        footer={footer}
        header={header}
        className="md:w-25rem"
        style={{
          margin: "2%",
          width: "95%",
          height: "98%",
          // position: "fixed",
          overflowY: "auto",
        }}
      >
  
  <div className="flex flex-wrap justify-content-center gap-2">
        <video autoPlay muted loop src={NAVIN2} type="video/mp4"
                        style={{ width: '90%', height: 'auto', objectFit: 'contain' }}/> 


      </div>             
      </Card>
      </div>
    </>
  );
};
export default Welcome;
