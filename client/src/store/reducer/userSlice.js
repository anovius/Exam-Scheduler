import { createSlice } from '@reduxjs/toolkit';
import UserService from '../action/user.service';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    logout: (state, action) => {
      state.value = null;
    },
    login: (state, action) => {
     state.value = action.payload;
     console.log(action.payload);
    },
  },
})

export const { logout, login } = userSlice.actions;
export default userSlice.reducer;

export const loginAction = (body) => dispatch => {
    console.log(body);
    UserService.login(body).then(res => {
      console.log(res);
    }).catch(err => {

    });
    // dispatch(login(data))
}