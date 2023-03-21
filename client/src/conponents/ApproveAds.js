import React, { useEffect, useState } from "react";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const AppoveAds = () => {
  const waitingAds = [
    {
      id: "123",
      img: "https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg",
      storeName: "zara",
    },
    {
      id: "123",
      img: "https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg",
      storeName: "h&m",
    },
  ];
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
      style={{ width: "98%", height: "50px" }}
    />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2"></div>
  );

  return (
    <>
      <Card
        title="Approve ads"
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
        <p className="m-0">
          <h5>Do you want to approve the ad?</h5>
          <ul style={{ listStyle: "none", marginRight: "10%" }}>
            {waitingAds.map((ad) => (
              <li>
                <Image
                  src={ad.img}
                  alt="Image"
                  width="250"
                  preview
                  p-button-text
                  style={{ marginLeft: "10px" }}
                />
                <br /><br />
                <span>Store Name: {ad.storeName}</span>
                <Button
                  icon="pi pi-check"
                  rounded
                  text
                  raised
                  aria-label="Filter"
                  style={{ marginLeft: "10px" }}
                />
                <Button
                  icon="pi pi-times"
                  rounded
                  text
                  raised
                  severity="danger"
                  aria-label="Cancel"
                  style={{ marginLeft: "10px" }}
                />
                <br />
                <br />
              </li>
            ))}
          </ul>
        </p>
      </Card>
    </>
  );
};
export default AppoveAds;
