import './App.css';

import Weather from './components/weather';

import { useState, useEffect } from 'react'
import { Dimmer, Loader } from 'semantic-ui-react';   //<-- Semantic UI React provides React components while Semantic UI provides themes as CSS 


function App() {

  //Latitude & Longitude
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  const [data, setData] = useState([])




  useEffect(() => {

    const fetchData = async () => {

      //We get our latitude and longitude using navigator.geolocation 
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      //After we get our location we pass our coordinates into the API and using our API key we can see the current weather at our location.

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
    }

    fetchData();

  }, [lat, long]);


  // If the data we get from our fetch request does not equal 'undefined' display it else keep displaying the loading page. 
  return (

    <div className="App">

      {(typeof data.main != 'undefined') ? (<Weather weatherData={data} />)
        :
        (<div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>)
      }
    </div>

  );
}

export default App;
