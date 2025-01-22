import React from 'react';
import './City.css';
import { CityData } from '../../types/types';
import { useHistory } from 'react-router-dom';

const City: React.FC<{ city: CityData }> = ({ city }) => {
  const { image, name, country, description } = city;

  const imageStyle = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1) ), url(${image})`,
  };

  const history = useHistory();

  const handleImageClick = () => {
    history.push(`/weather/${name}`, { city });
  };

  return (
    <div onClick={handleImageClick} className="city" style={imageStyle}>
      <p className="city-name">{name}</p>
      <p className="country-name">{country}</p>
      <p className="description">{description}</p>
    </div>
  );
};
export default City;
