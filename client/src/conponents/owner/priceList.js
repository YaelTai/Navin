import { useAxios1 } from "../../hooks/useAxios";
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

  return (
    
      <>
        <label>Price per day: {data.DayFee}</label><br/>
        <label>Price per category: {data.CategoryFee}</label>
      
   </>
  );
}
