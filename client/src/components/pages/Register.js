import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
  const authContext = useContext(AuthContext);
  const { register } = authContext;

  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: state.name,
      email: state.email,
      password: state.password
    };
    console.log(user);
    register(user);
  };

  return (
    <div>
      <div className="container">
        <p className="x-large my-2">Register</p>
        <p className="lead">
          Subscribe to RITE Editions to access exclusive content and purchase
          editions.
        </p>
        <div className="my-1">
          <form className="form" onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={onChange}
            />

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={onChange}
            />

            <input
              type="text"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={onChange}
            />
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired
};

export default Register;
