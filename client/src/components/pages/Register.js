import React, { useState } from 'react';

const Register = () => {
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
    console.log(state.name, state.email, state.password);
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

export default Register;
