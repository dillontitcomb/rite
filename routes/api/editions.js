const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Edition = require('../../models/Edition');

// @route GET api/editions
// @desc Get all editions
// @access Public
router.get('/', async (req, res) => {
  try {
    const editions = await Edition.find();
    return res.json({ editions });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: 'There was a problem with the server.' });
  }
});

// @route POST api/editions
// @desc Create a new edition
// @access Private
router.post('/', auth, async (req, res) => {
  const {
    artists,
    newsPosts,
    title,
    year,
    description,
    filePaths,
    price,
    available
  } = req.body;

  try {
    let edition = await Edition.findOne({ title });
    if (edition) {
      return res.status(400).json({ msg: 'Edition already exists.' });
    }
    edition = new Edition({
      artists,
      newsPosts,
      title,
      year,
      description,
      filePaths,
      price,
      available
    });
    console.log(edition);
    await edition.save();
    return res.json({
      msg: `Edition titled ${title} was saved to the database successfully.`
    });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: 'There was a problem with the server.' });
  }
});

// @route GET api/editions/:id
// @desc Get a specific edition
// @access Public

router.get('/:id', async (req, res) => {
  try {
    let edition = await Edition.findById(req.params.id);
    if (!edition) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'No edition could be found.' }] });
    }
    return res.json({ edition });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: 'There was a problem with the server.' });
  }
});

// @route PUT api/editions/:id
// @desc Update a specific edition
// @access Private
// TODO: If title is changed, need to change image directory name
router.put('/:id', auth, async (req, res) => {
  const {
    artists,
    newsPosts,
    title,
    year,
    description,
    filePaths,
    price,
    available
  } = req.body;
  try {
    const updatedEdition = await Edition.findByIdAndUpdate(req.params.id, {
      artists,
      newsPosts,
      title,
      year,
      description,
      filePaths,
      price,
      available
    });
    if (!updatedEdition)
      return res.status(400).json({ msg: 'Edition could not be updated.' });
    return res.json({
      msg: 'Edition was successfully updated'
    });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: 'There was a problem with the server.' });
  }
});

// @route DELETE api/editions/:id
// @desc Delete a specific edition
// @access Private
// TODO: Delete image files & dir associated with edition

router.delete('/:id', auth, async (req, res) => {
  try {
    await Edition.findByIdAndRemove(req.params.id);
    return res.json({
      msg: `Edition was successfully deleted.`
    });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: 'There was a problem with the server.' });
  }
});

module.exports = router;
