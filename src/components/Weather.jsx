// import PropTypes from 'prop-types';
import ForecastDay from './ForecastDay';

import React, { Component } from 'react';

class Weather extends Component {
  state = {
    isLoaded: false,
    forecast: [],
    error: null
  }
  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&appid=1b2211abfba57be135c5266b7d6ff62d`
    )
    .then(res => res.json())
    .then(({ list }) => {
      const cleansedWeather = [];
      list
        .filter((_, i) => i % 8 === 0)
        .forEach(day => {
          cleansedWeather.push({
            temperature: Math.round( (day.main.temp_max + day.main.temp_min) / 2 - 273.15),
            description: day.weather[0].main
          });
        });
        this.setState({
          isLoaded: true,
          forecast: cleansedWeather
        })
    },
    (err) => {
      this.setState({
        isLoaded: true,
        error: err
      })
    });

  }
  render() {
    const { error, isLoaded, forecast } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
  return (
    <div>
      <p>{this.props.city}</p>
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
          })
        }
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
