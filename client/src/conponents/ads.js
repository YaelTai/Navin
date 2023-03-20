import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';    
import { ProductService } from './ProductService';





export default function Ads() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

   

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div >
                <div className="mb-3">
                    {/* <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" /> */}
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} style={{"height":"140px"}}/>
                </div>
                 <Button icon="pi pi-plus" className="p-button p-button-rounded" /><span > add to your route</span>
              
            </div>
        );
    };
    
    
    
    return (
        <div className="card"  >
        <Carousel value={products} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
        autoplayInterval={2500} itemTemplate={productTemplate} />
    </div> 
    )
}