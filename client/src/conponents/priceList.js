 
import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
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
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
           
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="Our PriceList"  footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    <h3 >Price per day:</h3>
                    <h3 >Price per category:</h3>
                

                </p>
            </Card>
        </div>
    )
}