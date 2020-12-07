import React, { useContext, useEffect } from 'react';
import EditionContext from '../../context/edition/editionContext';

const ArtistDetail = ({ artist }) => {
	const editionContext = useContext(EditionContext);
	const { getEditionsByArtist, editions } = editionContext;

	useEffect(() => {
		getEditionsByArtist(artist._id);
		//eslint-disable-next-line
	}, []);

	return (
		<div>
			<p>Here are this artist's editions!</p>
			{editions.map((edition, key) => (
				<p key={key}>{edition.title}</p>
			))}
		</div>
	);
};

export default ArtistDetail;
