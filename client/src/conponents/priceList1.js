 
import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { useGetAxiosApi } from '../hooks/useGetAxiosApi';
export default function PriceList() {
    const [loading, setLoading] = useState(false);
    const {data,loading:loadingPrice,error,refetch}=useGetAxiosApi('manager/priceList');

    useEffect(()=>{console.log('data',data);},[data])

    const load = () => {
        setLoading(true);
        
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
           
        </div>
    );

    return (
        <Card title="Our price list!" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "95%" ,"position":"fixed",overflowY:"auto"}}>
        <p className="m-0">
            <h3 >Price per day:{data.DayFee}</h3>
            <h3 >Price per category:{data.CategoryFee}</h3>
        
    
        </p>
    </Card>
    )
}