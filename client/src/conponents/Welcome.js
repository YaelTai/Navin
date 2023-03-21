import React from "react";
import { Image } from "primereact/image";
import { Card } from "primereact/card";

const Welcome = () => {
  const header = (
    <>
      <img
        alt="Card"
        src="https://primefaces.org/cdn/primereact/images/usercard.png"
        style={{ width: "98%", height: "50px" }}
      />
      <button
        style={{
          backgroundColor: "lightblue",
          border: "none",
          height: "30px",
          marginLeft: "39px",
          borderRadius: "5px",
        }}
      >
        Log in as a manager
      </button>
      <button
        style={{
          backgroundColor: "lightblue",
          border: "none",
          height: "30px",
          marginLeft: "20px",
          borderRadius: "5px",
        }}
      >
        Log in as a store owner
      </button>
    </>
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <h1>fh</h1>
    </div>
  );

  return (
    <>
      <Card
        title="Welcome"
        footer={footer}
        header={header}
        className="md:w-25rem"
        style={{
          margin: "2%",
          width: "95%",
          height: "98%",
          position: "fixed",
          overflowY: "auto",
        }}
      >
        <p className="m-0"></p>
        <Image
          src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg"
          alt="Image"
          width="90%"
        />
      </Card>
    </>
  );
};
export default Welcome;
