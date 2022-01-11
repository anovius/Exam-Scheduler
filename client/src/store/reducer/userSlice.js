import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    logout: (state) => {
      state.value = null;
    },
    login: (state, action) => {
     state.value = action;
     console.log(action.payload);
    },
  },
})

export const { logout, login } = userSlice.actions;
export default userSlice.reducer;