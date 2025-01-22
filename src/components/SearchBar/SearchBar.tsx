import React, { ChangeEvent, FC } from 'react';
import './SearchBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearch } from '../../store/selectors/selectors';
import { FilterActionTypes, setSearch } from '../../store/actions/actions';
import { Dispatch } from 'redux';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <label>Search</label>
      <input
        placeholder="Search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="search-input"
      />
      {value && (
        <p onClick={() => onChange('')} className="clear-button">
          ×
        </p>
      )}
    </div>
  );
};
