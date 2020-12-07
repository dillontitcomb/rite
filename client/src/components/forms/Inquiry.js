import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const Inquiry = () => {
	const [state, setState] = useState({
		from_name: '',
		subject: '',
		message: '',
		contact: '',
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
		setState({ from_name: '', subject: '', message: '', contact: '' });
	};

	return (
		<div className='container'>
			<p className='x-large text-weight-light text-center my-3'>
				INQUIRIES & COMMENTS
			</p>
			<div className='form-container'>
				<form className='form' onSubmit={onSubmit}>
					<p className='lead-sm my-1='>Contact Us</p>
					<input
						type='text'
						name='from_name'
						placeholder='Your Name'
						value={state.name}
						onChange={onChange}
					/>
					<input
						type='text'
						name='subject'
						placeholder='Subject'
						value={state.subject}
						onChange={onChange}
					/>
					<textarea
						name='message'
						placeholder='Message'
						value={state.message}
						onChange={onChange}></textarea>
					<br />
					<p className='lead-sm my-1'>How should we reach you?</p>
					<input
						type='text'
						name='contact'
						placeholder='Phone or email address'
						value={state.contact}
						onChange={onChange}
					/>
					<p>
						<input type='submit' value='Submit' className='btn btn-primary' />
					</p>
				</form>
			</div>
		</div>
	);
};

export default Inquiry;
