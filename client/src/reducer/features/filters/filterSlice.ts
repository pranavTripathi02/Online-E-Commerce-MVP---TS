import { createSlice } from '@reduxjs/toolkit';
import { FilterType } from '../../../types';

const initialState: FilterType = {
  title: null,
  seller: null,
  price_low: null,
  price_high: null,
  review: null,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      const { key, value }: { key: string; value: string } = action.payload;
      return { ...state, [key]: value };
    },
    removeFilter: (state, action) => {
      const { key }: { key: string } = action.payload;
      // state = { ...state, [key]: null };
      return { ...state, [key]: null };
      // return state;
    },
    clearAll: (state) => {
      state = initialState;
      // return state;
    },
  },
});

export const { updateFilter, removeFilter, clearAll } = filterSlice.actions;
export default filterSlice.reducer;
