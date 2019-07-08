import React from 'react';
import PropTypes from 'prop-types';
import sunny from '../assets/sunny.png';

const ForecastDay = ({ description, temperature, imgUrl }) => {
  return (
    <div className="forecast-day">
      <img src={sunny} alt={description} width="140px" height="125px" />
      <h2>{temperature}&deg;C</h2>
      <h3>{description}</h3>
    </div>
  );
};

ForecastDay.propTypes = {
    imgUrl: PropTypes.string,
    temperature: PropTypes.number,
    description: PropTypes.string
};

export default ForecastDay;
