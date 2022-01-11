import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    logout: (state) => {
      state.value += 1;
    },
    login: (state, action) => {
     state.value = action.user;
    },
  },
})

export const { logout, login } = userSlice.actions;
export default userSlice.reducer;