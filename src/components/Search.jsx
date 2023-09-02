import axios from "axios";
import React, { useRef, useState } from "react";
import Card from "./Card";

const Search = () => {
  const cityNameRef = useRef(null);
  const [weatherData, setWeatherData] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const myApi = "7a08a0e9f8541685c4151b60c35c2b50";
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&appid=${myApi}&units=metric`
      );
      console.log(response.data);
      const d = new Date(response.data.dt);
      console.log(d);
      console.log(response.data.dt);
    } catch (error) {
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
      <Card />
    </div>
  );
};

export default Search;
