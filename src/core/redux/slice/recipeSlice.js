import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    const recipeCollectionRef = collection(db, 'recipes');
    const querySnapshot = await getDocs(recipeCollectionRef);
    const recipes = [];
    querySnapshot.forEach((doc) => {
        console.log('doc',doc.data());
      recipes.push(doc.data());
    });
  
    return recipes;
  });

const recipeSlice = createSlice({
  name: 'recipes',
  initialState : [],
  reducers: {
    setRecipe: (state, action) => {
        state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        console.log('state',action);
        state.push(action.payload);
      })
  },
});

export const { setRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
