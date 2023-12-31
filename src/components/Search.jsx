import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const Search = () => {
  const cityNameRef = useRef(null);
  const [weatherData, setWeatherData] = useState(null);
  // const [currentLocationWeather, setCurrentLocationWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (location) => {
        console.log("location: ", location);

        const myApi = "7a08a0e9f8541685c4151b60c35c2b50";
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${myApi}&units=metric`
          );
          console.log(response.data);

          setWeatherData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const myApi = "7a08a0e9f8541685c4151b60c35c2b50";
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&appid=${myApi}&units=metric`
      );
      console.log(response.data);
      const d = new Date().getHours();
      console.log(d);
      const sunrise = response.data.sys.sunrise;
      const hours = sunrise / (1000 * 60 * 60);
      console.log("hours", hours);
      //   console.log(response.data.dt);
      setWeatherData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className=" m-4 border-2 border-purple-600"
      >
        <input
          type="text"
          className=" p-3 outline-0"
          placeholder="Search your city weather"
          required
          ref={cityNameRef}
        />
        <button type="submit">
          <i className="bi bi-search"></i>
        </button>
      </form>
      {isLoading ? <div>Loading...</div> : null}
      {weatherData || isLoading ? null : <div>No Data</div>}
      <Card weatherData={weatherData} />
      {/* {currentLocationWeather ? (
        <Card weatherData={currentLocationWeather} />
      ) : null} */}
    </div>
  );
};

export default Search;
