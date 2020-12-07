import React, { useContext, useEffect } from 'react';
import editionContext from '../../context/edition/editionContext';
import EditionItem from './EditionItem';
import './Editions.css';

const Editions = () => {
	const EditionContext = useContext(editionContext);
	const { getEditions, editions, loading } = EditionContext;

	useEffect(() => {
		getEditions();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<div className='container'>
				<p className='x-large text-center text-weight-light my-3'>
					THE EDITIONS
				</p>

				<div className='editions-grid'>
					{loading ? (
						<p>Loading...</p>
					) : (
						editions.map((edition, key) => (
							<EditionItem key={edition._id} edition={edition}></EditionItem>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default Editions;
