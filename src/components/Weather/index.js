import React, { useState } from "react";
import { Container, Button, Form, CardColumns, Card } from "react-bootstrap";

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
          wind_speed: data.wind.speed,
          icon: data.weather[0].icon,
        };

        setSearchedData(weatherData);
        setSearchInput("");
      });
    });
  };

  return (
    <Container className="flex">
      <p className="current-day mt-4">{date}</p>
      <h2 className="mt-2">
        {searchedData
          ? `Viewing ${searchedData.city} Weather:`
          : "Search for a city to begin"}
      </h2>
      <Form
        onSubmit={handleFormSubmit}
        inline
        className="justify-content-center mt-4"
      >
        <Form.Control
          className="search-city"
          name="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="City Name"
        />

        <Button type="submit" className="search-btn" variant="dark">
          Search
        </Button>
      </Form>

      <div className="current-weather-box">
        <div className="mt-4"></div>
        {searchedData ? (
          <div>
            <h4>
              {searchedData.city}{" "}
              <img
                alt=""
                src={`http://openweathermap.org/img/w/${searchedData.icon}.png`}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </h4>
            <CardColumns>
              <Card>
                <Card.Body>
                  <Card.Title>Temperature:</Card.Title>
                  <Card.Text>{searchedData.the_temp} °C</Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      {date} {searchedData.city}
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Humidity:</Card.Title>
                  <Card.Text>{searchedData.humidity} %</Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      {date} {searchedData.city}
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Wind Speed:</Card.Title>
                  <Card.Text>{searchedData.wind_speed} m/s</Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      {date} {searchedData.city}
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardColumns>
          </div>
        ) : null}
      </div>
    </Container>
  );
}

export default Weather;
