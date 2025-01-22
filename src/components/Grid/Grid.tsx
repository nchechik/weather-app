import React from 'react';
import './Grid.css';
import City from '../City/City';
import { useCites } from '../../hooks/useCities';

const Grid: React.FC = () => {
  const cities = useCites();

  return (
    <div className="grid">
      {cities.map((city, index) => (
        <City key={index} city={city} />
      ))}
    </div>
  );
};

export default Grid;
