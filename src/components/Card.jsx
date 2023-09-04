import React from "react";

const Card = ({ weatherData }) => {
  return (
    <div>
      <div className=" flex flex-col border-2 border-red-200 rounded-md">
        <div id="cityname">{weatherData?.name}</div>
        <span id="dateandtime"></span>
        <div id="imgandtemp">
          <div id="img"></div>
          <div id="temp">
            <div>
              <h1>{weatherData?.main?.temp}</h1>
            </div>
            {/* <span id="currentcondition">{weatherData?.weather[0]?.main}</span> */}
          </div>
        </div>
        <div id="">
          <div id="wind">{weatherData?.wind?.speed}</div>
          <div id="humidity">{weatherData?.main?.humidity}</div>
          <div id="visibility">{weatherData?.visibility}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
