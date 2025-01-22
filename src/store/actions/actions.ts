export const SET_SEARCH = 'SET_SEARCH';
export const SET_CONTINENTS = 'SET_CONTINENTS';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_UNITS = 'SET_UNITS';

export interface SetSearchAction {
  type: typeof SET_SEARCH;
  payload: string;
}

export interface SetContinentsAction {
  type: typeof SET_CONTINENTS;
  payload: string[];
}

export interface SetSortByAction {
  type: typeof SET_SORT_BY;
  payload: string;
}

export interface SetUnitsAction {
  type: typeof SET_UNITS;
  payload: string;
}

export type FilterActionTypes =
  | SetSearchAction
  | SetContinentsAction
  | SetSortByAction
  | SetUnitsAction;

export const setSearch = (search: string): SetSearchAction => ({
  type: SET_SEARCH,
  payload: search,
});

export const setContinents = (continents: string[]): SetContinentsAction => ({
  type: SET_CONTINENTS,
  payload: continents,
});

export const setSortBy = (sortBy: string): SetSortByAction => ({
  type: SET_SORT_BY,
  payload: sortBy,
});

export const setUnits = (units: string): SetUnitsAction => ({
  type: SET_UNITS,
  payload: units,
});
