import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      if( action.payload !== undefined ) {
        state.user = action.payload;
      }
    },
    clearUser: (state) => {
      state.user = {};
    }
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
