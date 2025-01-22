import React, { ChangeEvent } from 'react';
import './DataFilters.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContinents,
  selectSearch,
  selectSortBy,
  selectUnits,
} from '../../store/selectors/selectors';
import {
  FilterActionTypes,
  setContinents,
  setSearch,
  setSortBy,
  setUnits,
} from '../../store/actions/actions';
import { Dispatch } from 'redux';
import { PrimitiveFilter } from '../PrimitiveFilter/PrimitiveFilter';
import { SearchBar } from '../SearchBar/SearchBar';
import { MultiSelectDropdown } from '../MultiSelectDropdown/MultiSelectDropDown';

const CONTINENTS = [
  'Europe',
  'Asia',
  'North America',
  'Australia',
  'South America',
  'Africa',
];

export const DataFilters = () => {
  const dispatch = useDispatch<Dispatch<FilterActionTypes>>();
  const continents = useSelector(selectContinents);
  const sortBy = useSelector(selectSortBy);
  const units = useSelector(selectUnits);
  const search = useSelector(selectSearch);

  const updateUnits = (units: string) => {
    dispatch(setUnits(units));
  };

  const updateSortBy = (sortBy: string) => {
    dispatch(setSortBy(sortBy));
  };

  const updateContinents = (continents: string[]) => {
    dispatch(setContinents(continents));
  };

  const updateSearch = (search: string) => {
    dispatch(setSearch(search));
  };

  return (
    <div>
      <div className="grid-container">
        <div className="grid-item">
          <SearchBar value={search} onChange={updateSearch} />
        </div>
        <div className="grid-item">
          <MultiSelectDropdown
            label="Select Continents"
            items={CONTINENTS}
            selectedItems={continents}
            setSelectedItems={updateContinents}
          />
        </div>
        <div className="grid-item">
          <div className="primitive-filters">
            <PrimitiveFilter
              onChange={updateSortBy}
              title="Sort By"
              names={['Name', 'Distance']}
              chosenFilter={sortBy}
            />
            <PrimitiveFilter
              onChange={updateUnits}
              title="Units"
              names={['°C', '°F']}
              chosenFilter={units}
            />
          </div>
        </div>
      </div>
      {/* <SearchBar value={search} onChange={updateSearch} />
      <MultiSelectDropdown
        items={CONTINENTS}
        selectedItems={continents}
        setSelectedItems={updateContinents}
      />
      <PrimitiveFilter
        onChange={updateSortBy}
        title="Sort By"
        names={['Name', 'Distance']}
        chosenFilter={sortBy}
      />
      <PrimitiveFilter
        onChange={updateUnits}
        title="Units"
        names={['°C', '°F']}
        chosenFilter={units}
      /> */}
    </div>
  );
};
