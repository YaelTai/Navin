import React, { useEffect } from "react";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import NAVIN2 from '../videos/NAVIN2.mp4'
import card from '../images/card.png'

const Welcome = () => {
    
  const header = (
    <>
      <img
        alt="Card"
        src={card}
        style={{ width: "100%", height: "50px" }}
      />
      <button
        style={{
          backgroundColor: "lightblue",
          border: "none",
          height: "30px",
          marginLeft: "3%",
          borderRadius: "5px",
        }}
        onClick={() => navigate("/manager/logIn")} 


      >
        owner/manager
      </button>
     
    </>
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
            <button
        style={{
          backgroundColor: "lightblue",
          border: "none",
          height: "30px",
          marginLeft: "39px",
          borderRadius: "5px",
        }}
        onClick={() => navigate("/visitor" )} 

      >
        Let's start
      </button>
    </div>
  );
  const navigate = useNavigate();

  return (
    <>
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
  
      
        <video autoPlay muted loop src={NAVIN2} type="video/mp4"
                        style={{ width: '90%', height: 'auto', objectFit: 'contain' }}
                    />
      </Card>
    </>
  );
};
export default Welcome;
