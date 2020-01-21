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
    console.log(editions);
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
  const { author, title, year, description, filePaths } = req.body;

  console.log(author, title, year, description, filePaths);

  try {
    let edition = await Edition.findOne({ title });
    if (edition) {
      return res.status(400).json({ msg: 'Edition already exists.' });
    }
    edition = new Edition({ author, title, year, description, filePaths });
    await edition.save();
    return res.json({
      msg: `${author}'s edition, titled ${title}, was saved to the database successfully!`
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
    console.log(edition);
    if (!edition) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'No edition could be found' }] });
    }
    return res.json({ edition });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: 'There was a problem with the server.' });
  }
});





module.exports = router;
