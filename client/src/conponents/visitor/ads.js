import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';

import you_are_here from '../../images/you_are_here.png'
import { useAxios1 } from '../../hooks/useAxios';
// import card from '../../images/card.png'



export default function Ads(props) {
    console.log("hiiiii++++++++++", props.Cat);

    const [products, setProducts] = useState([]);
    const [cat, setCat] = useState(props.Cat.Id);
    if(props.Cat.Id!=cat)
        {setCat(props.Cat.Id)}

    const { postData } = useAxios1();
    const loadAds = async () => {
        //console.log("ADS LOADED");
        //console.log("hiiiii", props.Cat);

        let res = await postData('visitor/ads', { CatId: props.Cat.Id })
        console.log("ads got from sever:", res.data);
        setProducts([...res.data])
        console.log("Productd", products);

        // x = await postData(`manager/ads`,
        //     { "URL": res.data[3]["advertisment.Img"] });
        // console.log("x", x.data);
        // //setProducts(x.data)

    }

    useEffect(() => {
        console.log("useeeeeeeeeeeeeeeeeeeeee");
        if (props.Cat) loadAds()

    }, [cat])

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




    const productTemplate = (prod) => {
        return (

            <div >
                <div className="mb-3">

                    <img src={`data:image/jpeg;base64,${prod.Img}`} alt={prod.name} style={{ "height": "140px" }} />
                </div>
                <Button icon="pi pi-plus" className="p-button p-button-rounded" onClick={
                    () => {
                        //console.log("###########",products[index].StoreName);
                        const obj = { Name: prod.StoreName }
                        //console.log("###########",obj);
                        // props.setSelectedStore(products[index].StoreName)
                        console.log("@@@@@@@@@@@@@@@", props.selectedstoresForCat);
                        // if (!props.selectedstoresForCat.includes({"Name":products[index].StoreName})) {
                        if (props.selectedstoresForCat.find((s) => s.Name === prod.StoreName))
                            console.log("selectedStore", obj);
                        else props.setselectedstoresForCat([...props.selectedstoresForCat, obj]);

                    }
                }
                /><span > add to your route</span>

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