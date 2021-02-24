import { Editor } from '@tinymce/tinymce-react';
import React, { useContext, useEffect, useState } from 'react';
import ArtistContext from '../../context/artist/artistContext';
import EditionContext from '../../context/edition/editionContext';
import AddArtist from '../forms/AddArtist';
import SelectArtist from '../forms/SelectArtist';

const AddEdition = () => {
	const editionContext = useContext(EditionContext);
	const { addEdition } = editionContext;

	const artistContext = useContext(ArtistContext);
	const { getArtists, artists } = artistContext;

	const [state, setState] = useState({
		editionArtists: [],
		artist: null,
		newsPosts: [],
		title: '',
		year: '',
		description: '',
		files: [],
		price: '',
		available: false,
		showAddArtist: false,
		showSelectArtist: false,
	});

	const handleCreateArtist = () => {
		setState({ ...state, showAddArtist: true, showSelectArtist: false });
	};

	const handleSelectArtist = () => {
		setState({ ...state, showAddArtist: false, showSelectArtist: true });
	};

	const handleAddSelectedArtist = () => {
		const newArtistsList = [...state.editionArtists, state.artist];
		setState({ ...state, artist: [], editionArtists: newArtistsList });
	};

	const onSelectArtist = (selectedArtist) => {
		setState({ ...state, artist: selectedArtist });
	};

	const onChange = (e) => {
		const value = e.target.value;
		setState({
			...state,
			[e.target.name]: value,
		});
	};

	const onCheckboxChange = (e) => {
		setState({ ...state, available: e.target.checked });
	};

	const onFileChange = (e) => {
		setState({
			...state,
			files: [...state.files, ...e.target.files],
		});
	};

	const onEditorChange = (description) => {
		setState({ ...state, description });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		addEdition({
			...state,
			editionArtists: state.editionArtists.map((obj) => obj._id),
		});
		setState({
			editionArtists: [],
			newsPosts: [],
			title: '',
			year: '',
			description: '',
			files: [],
			price: '',
			available: false,
		});
	};

	useEffect(() => {
		getArtists();
		//eslint-disable-next-line
	}, []);

	const selectArtistView = (
		<div className='my-1'>
			<SelectArtist onSelectArtist={onSelectArtist}></SelectArtist>
			{state.artist && (
				<button
					className='btn btn-primary my-1'
					onClick={handleAddSelectedArtist}>
					Add
				</button>
			)}
		</div>
	);

	return (
		<div>
			<p className='large'>Add an Edition</p>
			{state.editionArtists.length > 0 && (
				<ul className='large'>
					Selected Artists:{' '}
					{state.editionArtists.map((artist, key) => (
						<li key={key}>
							<strong>{artist.name}</strong>
						</li>
					))}
				</ul>
			)}
			{!state.showSelectArtist && (
				<button className='btn btn-primary' onClick={handleSelectArtist}>
					Select Artist
				</button>
			)}
			{state.showAddArtist && <AddArtist></AddArtist>}
			{state.showSelectArtist && selectArtistView}
			{!state.showAddArtist && (
				<button className='btn btn-white' onClick={handleCreateArtist}>
					Create New Artist
				</button>
			)}
			<form className='form my-2' onSubmit={onSubmit}>
				<p>
					<strong>Select Edition Images:</strong>
				</p>
				<input type='file' name='fileGroup' multiple onChange={onFileChange} />

				{state.files.length > 0 && (
					<p>
						<strong>Files set to upload:</strong>
					</p>
				)}
				{state.files.map((file, key) => (
					<p key={key}>
						<em>{file.name}</em>
					</p>
				))}
				<br />

				<input
					type='text'
					name='title'
					placeholder='Edition Title'
					value={state.title}
					onChange={onChange}
				/>
				<input
					type='text'
					name='year'
					placeholder='Edition Year'
					value={state.year}
					onChange={onChange}
				/>
				<label htmlFor='price'>Edition Price: </label>
				<input
					type='text'
					name='price'
					placeholder='$'
					value={state.price}
					onChange={onChange}
				/>
				<Editor
					apiKey='qgf24zdv82ko9vchv3fio5j2kt4yckxr1w1a56tlpsa05wjo'
					value={state.description}
					onEditorChange={onEditorChange}
					outputFormat='html'
					init={{
						height: 500,
						menubar: false,
						plugins: [
							'advlist autolink lists link image',
							'charmap print preview anchor help',
							'searchreplace visualblocks code',
							'insertdatetime media table paste wordcount',
						],
						toolbar:
							'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help',
					}}
				/>
				<input
					type='checkbox'
					name='available'
					value={state.available}
					onChange={onCheckboxChange}
				/>
				<label htmlFor='available'> Available for purchase?</label>
				<br />
				<input type='submit' value='Submit' className='btn btn-primary' />
			</form>
		</div>
	);
};

export default AddEdition;
