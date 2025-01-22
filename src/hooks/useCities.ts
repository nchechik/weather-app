import { useEffect, useState } from 'react';
import citiesMock from '../mocks/data.json';
import { CityData, Coordinates } from '../types/types';
import { useSelector } from 'react-redux';
import {
  selectContinents,
  selectSearch,
  selectSortBy,
} from '../store/selectors/selectors';

const TLV_COORDINATES = { lat: 32.0853, lng: 34.7818 };

export const useCites = (): CityData[] => {
  const [cities, setCities] = useState<CityData[]>([]);

  const search = useSelector(selectSearch);
  const continents = useSelector(selectContinents);
  const sortBy = useSelector(selectSortBy);

  const haversineDistance = (
    coord1: Coordinates,
    coord2: Coordinates
  ): number => {
    const toRadians = (degrees: number): number => degrees * (Math.PI / 180);

    const R = 6371;
    const dLat = toRadians(coord2.lat - coord1.lat);
    const dLng = toRadians(coord2.lng - coord1.lng);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(coord1.lat)) *
        Math.cos(toRadians(coord2.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const distanceSortFun = (a: CityData, b: CityData) => {
    const distanceA = haversineDistance(TLV_COORDINATES, a.coords);
    const distanceB = haversineDistance(TLV_COORDINATES, b.coords);
    return distanceA - distanceB;
  };

  const nameSortFun = (a: CityData, b: CityData) =>
    a.name.localeCompare(b.name);

  useEffect(() => {
    const filteredAndSortedCities = citiesMock.cities
      .filter(({ name, country, continent, active }) => {
        return (
          active &&
          (search === '' ||
            (name + country).toLowerCase().includes(search.toLowerCase())) &&
          continents.includes(continent)
        );
      })
      .sort(sortBy === 'Name' ? nameSortFun : distanceSortFun);
    setCities(filteredAndSortedCities);
  }, [search, continents, sortBy]);

  return cities;
};
