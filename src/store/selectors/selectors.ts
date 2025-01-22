import { RootState } from '../store';

export const selectSearch = (state: RootState) => state.filters.search;
export const selectContinents = (state: RootState) => state.filters.continents;
export const selectSortBy = (state: RootState) => state.filters.sortBy;
export const selectUnits = (state: RootState) => state.filters.units;
