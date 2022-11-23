import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
	return (
		<div className='container home-container'>
			<div className='home-showcase my-2'>
				<Link to='/editions'>
					<img
						className='home-image'
						src='/img/recent_publications/editions.jpg'
						alt='Ruth Laskey Twill'
					/>
				</Link>
				<p className='large my-2'>Some RITE Editions Publications</p>
				<p>Publications clockwise: </p>
				<br />
				<p>
					Jenny Monick, <em>Spiral</em>. Ruth Laskey, <em>Twill Series</em>.
					<em>Steven Leiber Catalogs</em>. Elisheva Biernoff, <em>One Day</em>.
					Veronica De Jesus, <em>People are a light to Love</em>. Laeh Glenn,
					<em>MUM</em>. Media Burn, <em>Ant Farm and the Making of an Image</em>
					.
				</p>
				<br />
				<p className='lead-sm'>
					RE publications will be available at the SFMOMA Small Press Book
					Bazaar,
					<strong> December 1st, 2022</strong>, 1–8 p.m.
				</p>
				<p className='lead-sm my-1'>
					<a href='https://www.sfmoma.org/event/2022-small-press-book-bazaar/'>
						Click here for more information.
					</a>
				</p>
				<p>
					To order a recent edition, <a href='/shop.html'>visit our shop.</a>
				</p>
			</div>
			<div className='home-upcoming'>
				<p className='large'>New and Upcoming 2022-2023</p>
				<p className='lead-sm'>
					<Link to='/editions'>View Editions →</Link>
				</p>
			</div>
		</div>
	);
};

export default Home;
