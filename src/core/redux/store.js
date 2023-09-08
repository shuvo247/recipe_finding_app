import { configureStore } from '@reduxjs/toolkit';
import recipeSlice from './slice/recipeSlice';
import userReducer from './slice/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    recipes: recipeSlice
  },
})