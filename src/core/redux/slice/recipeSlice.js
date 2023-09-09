import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    const recipeCollectionRef = collection(db, 'recipes');
    const querySnapshot = await getDocs(recipeCollectionRef);
    const recipes = [];
    querySnapshot.forEach((doc) => {
      const recipeData = doc.data();
      recipeData.id = doc.id;
      recipes.push(recipeData);
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
    deleteRecipe: ( state, action ) => {
      return state.filter((recipe) => recipe.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        return state = action.payload;
      })
  },
});

export const { setRecipe,deleteRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
