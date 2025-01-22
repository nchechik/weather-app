import { createStore, combineReducers } from 'redux';
import filtersReducer from './reducers/reducers';

const rootReducer = combineReducers({
  filters: filtersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
