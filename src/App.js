import './App.css';

import { useState, useEffect } from 'react'

function App() {

  //Latitude & Longitude
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);


  //We get our latitude and longitude using navigator.geolocation 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log('Latitude is:', lat)
    console.log('Longitude is:', long)

  }, [lat, long]);


  return (

    <div className="App">

    </div>

  );
}

export default App;
