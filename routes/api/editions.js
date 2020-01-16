const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Edition = require('../../models/Edition');

// @route api/editions
// @desc Test route
// @access Public
router.get('/', (req, res) => res.send('Editions route!'));

router.post('/', auth, async (req, res) => {
  const { author, title, year, description, filePaths } = req.body;

  console.log(author, title, year, description, filePaths);

  try {
    let edition = await Edition.findOne({ title });
    console.log('Awaited findOne');
    if (edition) {
      return res.status(400).json({ msg: 'Edition already exists.' });
    }
    console.log('Checked for duplicate');
    edition = new Edition({ author, title, year, description, filePaths });
    console.log('Tried to create edition');
    console.log(edition);
    await edition.save();
    console.log('Tried to save');
    return res.json({
      msg: `${author}'s edition, titled ${title}, was saved to the database successfully!`
    });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: 'There was a problem with the server.' });
  }
});

module.exports = router;
