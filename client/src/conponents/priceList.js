import { useAxios1 } from "../hooks/useAxios";
import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function PriceList() {
  const { Get } = useAxios1();

  let { data, loading, error, refetch } = Get(`owner/priceList`);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error!</p>;
  }
console.log(data);
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
    <Card
      title="Our price list!"
      footer={footer}
      header={header}
      className="md:w-25rem"
      style={{
        margin: "2%",
        width: "95%",
        height: "95%",
        position: "fixed",
        overflowY: "auto",
      }}
    >
      <p className="m-0">
        <h3>Price per day: {data.DayFee}</h3>
        <h3>Price per category: {data.CategoryFee}</h3>
      </p>
    </Card>
  );
}
