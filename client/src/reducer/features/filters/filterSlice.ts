import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
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
    addFilter: (state, action) => {
      const { key, value }: { key: string; value: string } = action.payload;
      state = { ...state, [key]: value };
      return state;
    },
    removeFilter: (state, action) => {
      const { key }: { key: string } = action.payload;
      state = { ...state, [key]: null };
      return state;
    },
    clearAll: (state) => {
      state = {};
      return state;
    },
  },
});

export const { addFilter, removeFilter, clearAll } = filterSlice.actions;
export default filterSlice.reducer;
