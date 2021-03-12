import React, { useState } from "react";

function Weather() {
  const [searchedData, setSearchedData] = useState("");

  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  let today = new Date();
  let date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();

  // create method to search for weather and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    const https = require("https");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=a8e17bfcb12d79725964af1dd67c506a&units=metric`;
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        data = JSON.parse(data);
        // console.log(data);
        const weatherData = {
          city: data.name,
          the_temp: data.main.temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
        };

        setSearchedData(weatherData);
        setSearchInput("");
      });
    });
  };

  return (
    <div>
      <h2>
        {searchedData
          ? `Viewing ${searchedData.city} Weather:`
          : "Search for a city to begin"}
      </h2>
      <form onSubmit={handleFormSubmit}>
        <input
          className="search-city"
          name="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="City Name"
        />

        <button type="submit" className="btn">
          Search
        </button>
      </form>

      <div className="current-weather-box">
        <div className="card-header">
          <p className="current-day">{date}</p>
        </div>
        {searchedData ? (
          <div>
            <h3>{searchedData.city}</h3>
            <div>
              <h5>Temperature:</h5>
              <p>&nbsp;{searchedData.the_temp}</p>
            </div>

            <div>
              <h5>Humidity:</h5>
              <p>&nbsp;{searchedData.humidity}</p>
            </div>

            <div>
              <h5>Pressure:</h5>
              <p>&nbsp;{searchedData.pressure}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Weather;
