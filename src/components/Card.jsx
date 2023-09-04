import React from "react";
import img from "../assets/weather-app.png";

const Card = ({ weatherData }) => {
  return (
    <div className=" container">
      <div className=" bg-gradient-to-tl from-[#f8a14a] to-[#fee3bc] max-w-3xl min-w-[380px] p-4">
        <div className=" flex flex-col border-2 border-red-200 rounded-md">
          <div id="cityname" className=" text-5xl font-medium">
            {weatherData?.name}
          </div>
          <span id="dateandtime" className=" text-[#9a938c] mt-2">
            Mon, Sep 4
          </span>
          <div id="imgandtemp" className=" flex gap-x-6 my-4">
            <div id="img" className=" w-[100px] h-[100px] ">
              <img src={img} alt="" className=" w-full" />
            </div>
            <div id="temp">
              <div>
                <h1 className=" text-5xl font-extrabold text-[#303345]">
                  {Math.floor(weatherData?.main?.temp)}°C
                </h1>
              </div>
              <span id="currentcondition">{weatherData?.weather[0]?.main}</span>
            </div>
          </div>
          <div id="">
            <div id="wind">{weatherData?.wind?.speed}</div>
            <div id="humidity">{weatherData?.main?.humidity}</div>
            <div id="visibility">{weatherData?.visibility}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
