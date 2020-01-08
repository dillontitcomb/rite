import React, { useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './userReducer';

const UserState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        user: state.user
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
