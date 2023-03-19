import React, { useState, useRef } from "react";
import {Camera} from "react-camera-pro";
import { Card } from 'primereact/card';
const UserHome = () => {
  const camera = useRef(null);
  const [image, setImage] = useState("");

  return (
    <div> 
        <h1>welcome!</h1>
        <iframe src="https://example.com/camera-pro-iframe" allow="camera;"/>
    <Card>
    <Camera ref={camera} aspectRatio={8 / 5} />;</Card>
      <button
 onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
      <Card>
      <img src={image} alt='Taken photo'/></Card>
    </div>
  );
}

export default UserHome;