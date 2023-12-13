// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { FaCloudMoon, FaSearchLocation } from 'react-icons/fa';

// function Weather() {
//     const [weather, setweather] = useState({})
//     const [search, setsearch] = useState()
//     // const [locweather, setlocweather] = useState([
//     //     {location:'',
//     //     temp:'',
//     //     humidity:''
//     //     }
//     // ])

//     const apikey='25f13becc6264d0c7039293ccd61d52b'

//     // const searchloc=()=>{
    
//     // }

//     useEffect(() => {
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=kozhikode&appid=${apikey}&units=metric`).then((response) => {
//           setweather(response.data);
//           console.log(response.data.name);
//           console.log(weather);
//         });
//       }, [search,apikey]);
//   return (
//     <div><br />
//     <center>
//       <div>
//         <div style={{ display: 'flex' }}>
//           <p><input
//           id='searchbox'
//             className='searchbox'
//             type="text"
//             placeholder="Enter city name"
//             value={search}
//             onChange={(e) => setsearch(e.target.value)}
//           /></p>
//           <p><FaSearchLocation  id='search' /></p>
//         </div>
//       </div>
//         <>
//           <p id='locaton'>{weather.name}</p>
//           <FaCloudMoon id='ico' />
//           <p id='climte'>
//             <span id='deree'>{weather.main.temp}°C <br /></span> {weather.weather[0].description}
//           </p>
//         </>

//     </center>
//     </div>
//   )
// }

// export default Weather