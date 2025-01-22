import {
  SET_SEARCH,
  SET_CONTINENTS,
  SET_SORT_BY,
  SET_UNITS,
  FilterActionTypes,
} from '../actions/actions';

export interface FiltersState {
  search: string;
  continents: string[];
  sortBy: string;
  units: string;
}

const initialState: FiltersState = {
  search: '',
  continents: [
    'Europe',
    'Asia',
    'North America',
    'Australia',
    'South America',
    'Africa',
  ],
  sortBy: 'Name',
  units: '°C',
};

const filtersReducer = (
  state = initialState,
  action: FilterActionTypes
): FiltersState => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case SET_CONTINENTS:
      return {
        ...state,
        continents: action.payload,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_UNITS:
      return {
        ...state,
        units: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
