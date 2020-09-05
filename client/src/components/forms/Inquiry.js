import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const Inquiry = () => {
  const [state, setState] = useState({
    from_name: '',
    subject: '',
    message: '',
  });

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
    emailjs
      .sendForm(
        'rite_inquiries',
        'rite_inquiry_template',
        e.target,
        'user_91vC2zwFHYu1q4y4vGRsm'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setState({ from_name: '', subject: '', message: '' });
  };

  return (
    <div className="container">
      <p className="x-large text-weight-light text-center my-3">
        INQUIRIES & COMMENTS
      </p>
      <div className="form-container">
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={state.name}
            onChange={onChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject (e.g. Requesting information about recent edition)"
            value={state.subject}
            onChange={onChange}
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={state.message}
            onChange={onChange}
          ></textarea>
          <p>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Inquiry;
