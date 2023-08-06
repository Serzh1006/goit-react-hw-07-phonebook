import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from './phoneBookSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: Reducer,
    filter: filterReducer,
  },
});
