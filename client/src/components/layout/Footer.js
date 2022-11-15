import React from 'react';

const Footer = () => {
	return (
		<div className='footer'>
			<div>
				<p className=' text-center'>
					© {new Date().getFullYear()} RITE Editions
				</p>
				<div className='social-media text-center'>
					<a
						className='social-media-link'
						href='https://www.facebook.com/riteeditions'>
						<i className='fa fa-facebook'></i>
					</a>
					<a
						className='social-media-link'
						href='https://www.instagram.com/rite_editions'>
						<i className='fa fa-instagram'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
