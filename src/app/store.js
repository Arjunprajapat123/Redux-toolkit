import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import TransectionReducer from '../features/counter/TransectionReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Transection:TransectionReducer,
  },
});