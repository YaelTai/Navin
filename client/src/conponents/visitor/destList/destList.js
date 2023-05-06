import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
 import { ProductService } from './ProductService';
// import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import 'primeflex/primeflex.css';

import card from '../../../images/card.png'
 
const DestList = () => {
    const header = (
        <img alt="Card" src={card} style={{ "width": "100%", "height": "50px" }} />
      );
      const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
    
        </div>
      );
  
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
 ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 5)));
  }, []);
  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

const itemTemplate = (product) => {
    return (
        <div className="col-12">
            <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                
                <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div className="text-2xl font-bold text-900">{product.name}</div>
                      
                        <div className="flex align-items-center gap-3">
                            <span className="flex align-items-center gap-2">
                             
                                <span className="font-semibold">{product.category}</span>
                            </span>
                          
                        </div>
                    </div>
                    <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        
                        <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

  return (
    <>
      <Card
        title="The chosen stores:"
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
  <h2>first floor:</h2>
  <DataView value={products} itemTemplate={itemTemplate} />
  <h2>second floor:</h2>  
      </Card>
    </>
  );
};
export default DestList;
