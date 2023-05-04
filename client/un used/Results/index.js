// import React, { useEffect, useState } from 'react';

// import Map from '../../src/conponents/map/Map'

// import { Box, Grid } from '@mui/material';

// const Home = () => {
//   const [location, setLocation] = useState();
  

  
//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//     }
//   }
//   function showPosition(position) {
   
//     setLocation({lat: 32.075644522031276, lng:34.77546354546296  });
//   }

// useEffect(()=>{getLocation()},[])

//   return (
//     <>
     
//       <Grid container spacing={5}>
//         <Grid item xs={4} sx={{}}>
//           <Map location={location} width={'400px'} height={'400px'}   />
//         </Grid>
      
//       </Grid>
//     </>
//   )
// }

// export default Home
