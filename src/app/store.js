import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import dataReducer from '../slices/dataSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer
  },
});