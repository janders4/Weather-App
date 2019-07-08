// import PropTypes from 'prop-types';
import ForecastDay from "./ForecastDay";

import React, { Component } from "react";

class Weather extends Component {
  state = {
    initial: true,
    isLoaded: false,
    forecast: [],
    error: null
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.city !== this.props.city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          this.props.city
        }&appid=1b2211abfba57be135c5266b7d6ff62d`
      )
        .then(res => res.json())
        .then(
          ({ list }) => {
            const cleansedWeather = [];
            if (list === undefined) {
              throw new Error("Invalid City");
            }
            list
              .filter((_, i) => i % 8 === 0)
              .forEach(day => {
                cleansedWeather.push({
                  temperature: Math.round(
                    (day.main.temp_max + day.main.temp_min) / 2 - 273.15
                  ),
                  description: day.weather[0].main
                });
              });
            this.setState({
              initial: false,
              isLoaded: true,
              forecast: cleansedWeather,
              error: null
            });
          },
          err => {
            this.setState({
              initial: false,
              isLoaded: true,
              error: err
            });
          }
        )
        .catch(err => {
          this.setState({
            initial: false,
            isLoaded: true,
            error: err
          });
        });
    }
  }
  render() {
    const { error, isLoaded, forecast, initial } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (initial) {
      return <div>Please choose a city</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2>{this.props.city}</h2>
          <div className="weather-container">
            {forecast.map((day, ind) => {
              return (
                <ForecastDay
                  key={ind}
                  imgUrl={day.imgUrl}
                  description={day.description}
                  temperature={day.temperature}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default Weather;

// const Weather = props => {
//   const forecast = [
//     {
//       imgUrl: '',
//       description: 'Sunny',
//       temperature: 21
//     },
//     {
//       imgUrl: '',
//       description: 'Sunny',
//       temperature: 21
//     },
//     {
//       imgUrl: '',
//       description: 'Sunny',
//       temperature: 21
//     },
//     {
//       imgUrl: '',
//       description: 'Sunny',
//       temperature: 21
//     },
//     {
//       imgUrl: '',
//       description: 'Sunny',
//       temperature: 21
//     }
//   ];
//   const getForecast = city => {
//   };
// };

//weather.propTypes = {};
