import React, { useState, useRef, useEffect } from "react";
import { Camera } from "react-camera-pro";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';



const UserHome = () => {
    const camera = useRef(null);
    const [image, setImage] = useState(null);
    const [flag, setFlag] = useState(false);

    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">

        </div>
    );
    useEffect(() => {
        console.log("hiii");

        <>
            <h4>you are near:  XXXX
            </h4>
            <span className="p-buttonset">
                <Button label="Save" icon="pi pi-check" />
                <span>    </span>
                <Button label="Cancel" icon="pi pi-times" />
            </span></>

    }, [image,flag])
    return (
        <Card title="Welcome!" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "95%" }}>
            <p className="m-0">
                <h4>Please take a picture of the store sign to your right:</h4>
                {/* <iframe src="https://example.com/camera-pro-iframe" allow="camera;"/> */}

                {!image ? <Camera ref={camera} aspectRatio={8 / 5} /> :
                    <img src={image} alt='Taken photo' style={{ "width": "70%" }} />}

                <Button label="take a picture" icon="pi-camera" onClick={() => {
                    setFlag(true)
                    setImage(camera.current.takePhoto())

                }} />
            </p>
        </Card>

    );
}

export default UserHome;




