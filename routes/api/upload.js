const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ msg: 'No files were uploaded.' });
  }

  console.log(req.body);

  const files = req.files.fileGroup;

  files.forEach((file) => console.log(file));

  return res.status(200).json({ msg: 'Tried to console log the files!' });
});

module.exports = router;
