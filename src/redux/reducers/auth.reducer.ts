import { createSlice } from '@reduxjs/toolkit';


const AuthInitalState = {
    User: null,
    isLoggedIn: false,
}

export const authReduxSlice = createSlice({
  name: 'auth',
  initialState: AuthInitalState,
    reducers: {
      
    LOGIN_FETCH: (state, action) => {
        console.log('I am called with login', action , state) 
      return {state, ...AuthInitalState}
    },
    LOGIN_SUCCESS: (state, action) => {
        state.User = action.payload.user;
        state.isLoggedIn = action.payload.isLoggedIn;
        return state;
    },
    LOGIN_FAIL: (state, action) => {
        return { state, ...AuthInitalState }
    },
    LOGOUT: (state, action) => {
    return {state, ...AuthInitalState}
    },
  },
})


export const { LOGIN_FETCH, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } = authReduxSlice.actions;
const authReducer = authReduxSlice.reducer;
export default authReducer;