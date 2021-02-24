const express = require('express');
const router = express.Router();
const mkdirp = require('mkdirp');
const auth = require('../../middleware/auth');

// Converts to lowercase & hyphenated
const convertTitleToDirName = (title) => {
	return title
		.toLowerCase()
		.replace(/[^0-9a-z|\s]/gi, '')
		.split(' ')
		.join('-');
};

// @route POST api/upload
// @desc Upload file(s) to new directory
// @access Private
router.post('/', auth, (req, res) => {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).json({ msg: 'No files were uploaded.' });
	}

	if (!req.body.title)
		return res
			.status(400)
			.json({ msg: 'No title was provided for the file upload.' });

	// Get files and title for directory name
	const files = req.files.fileGroup;
	const title = req.body.title;
	const directoryName = convertTitleToDirName(title);

	// Create directory for files
	const dirPath = `${process.cwd()}/client/public/img/uploads/${directoryName}`;
	mkdirp(dirPath, (err) => {
		if (err) {
			console.error('This directory could not be created');
		} else {
			console.log('Directory created!');
		}
	});

	// Move each image into directory and return relative filePaths to frontend
	const filePaths = [];

	// If only one file, files is an object rather than an array
	if (files.length) {
		for (const file of files) {
			// Relative img path to store in db
			const relativePath = `/img/uploads/${directoryName}/${file.name}`;
			// Filepath to move img to
			const filePath = `${dirPath}/${file.name}`;
			filePaths.push(relativePath);

			file.mv(filePath, (err) => {
				if (err) {
					return res
						.status(500)
						.json({ msg: 'Error moving file to newly created directory.' });
				}
			});
		}
	} else {
		let file = files;
		// Relative img path to store in db
		const relativePath = `/img/uploads/${directoryName}/${file.name}`;
		// Filepath to move img to
		const filePath = `${dirPath}/${file.name}`;
		filePaths.push(relativePath);
		file.mv(filePath, (err) => {
			if (err) {
				return res
					.status(500)
					.json({ msg: 'Error moving file to newly created directory.' });
			}
		});
	}

	// Return new file paths to frontend
	return res.json({ filePaths });
});

module.exports = router;
