import React, { useEffect, useState } from "react";
import sunny from "./../assets/sunny.gif";
import Info from "./Info";
import axios from "axios";

const Weather = () => {
  const [cityName, setCityName] = useState("Lagos");
  const [currentTemp, setcurrentTemp] = useState(30);
  const [weatherData, setweatherData] = useState([]);
  useEffect(() => {
    const fetchWeather = async () => {
      let weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=baeca21bbeb50b4d74f2f39bb009c952`
      );
      let data = await weather.data
     setcurrentTemp(data.main.temp)
      console.log(data.main.temp)
    };

    fetchWeather()
  }, [cityName]);

  //  const checkCity=(e)=>{
  //     setTimeout(
  //         setCityName(e.target.value),
  //      1000)
  //  }

  // axios
  //       .get(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=baeca21bbeb50b4d74f2f39bb009c952`
  //       )
  //       .then((response) => {
  //         // console.log(response.data);
  //         return response.data

  //       })
  //       .then((data)=>{
  //         console.log(data)
  //         setweatherData(data)
  //         console.log(weatherData)
  //       })

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCityName(e.target.value);
    }
  };

  return (
    <div
      className="h-screen bg-no-repeat bg-cover  flex justify-between"
      style={{ backgroundImage: `url(${sunny})` }}
    >
      {/* <p className='text-white'>jdhhfhhf</p> */}

      <div className="h-[90vh] flex flex-col justify-between p-4">
        <input
          type="text"
          className="bg-transparent outline-none border-b-[2px] text-white border-white placeholder:text-white w-[250px]"
          placeholder="Search City"
          //   onChange={(e)=>checkCity(e)}
          onKeyDown={handleKeyDown}
          autoFocus
        />

        <div className="text-white flex flex-col items-start ">
          <p className="font-semibold text-[120px]">
            {Math.ceil(currentTemp-273)}<span>°C</span>
          </p>
          <p className="text-[40px]">Lagos, NG</p>
          <p className="text-24px]">CLear sky</p>
        </div>
      </div>

      <Info></Info>
    </div>
  );
};

export default Weather;
