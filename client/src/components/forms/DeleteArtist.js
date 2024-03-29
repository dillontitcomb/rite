import React, { useContext, useState } from 'react';
import artistContext from '../../context/artist/artistContext';
import SelectArtist from '../forms/SelectArtist';

const DeleteArtist = () => {
	const ArtistContext = useContext(artistContext);
	const { deleteArtist } = ArtistContext;

	const [state, setState] = useState({
		name: '',
		id: '',
	});

	const onSubmit = async (e) => {
		e.preventDefault();
		deleteArtist(state.id);
		setState({
			name: '',
			id: '',
		});
	};

	const onSelectArtist = (artist) => {
		setState({
			name: artist.name || '',
			id: artist._id || '',
		});
	};

	return (
		<div className='my-2'>
			<p className='large'>Delete Artist</p>
			<p>
				<i>This option will delete an artist permanently. Use with caution!</i>
			</p>
			<form onSubmit={onSubmit} className='form'>
				<SelectArtist onSelectArtist={onSelectArtist}></SelectArtist>
				<input
					type='submit'
					value='Delete Artist'
					className='btn btn-danger'></input>
			</form>
		</div>
	);
};

export default DeleteArtist;
