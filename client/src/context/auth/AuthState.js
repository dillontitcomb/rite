import axios from 'axios';
import React, { useReducer } from 'react';
import { REGISTER_FAILURE, REGISTER_SUCCESS } from '../types';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Register User

  const register = async ({ name, email, password }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({
      name,
      email,
      password
    });
    console.log(body);

    try {
      console.log('Trying to dispatch api call!');
      const res = await axios.post('/api/users', body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: REGISTER_FAILURE });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.users,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        register
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
