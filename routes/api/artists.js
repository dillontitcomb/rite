const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Artist = require('../../models/Artist');

// @route GET api/artists
// @desc Get all artists
// @access Public
router.get('/', async (req, res) => {
  try {
    const artists = await Artist.find();
    if (!artists)
      return res.status(400).json({ msg: 'No artists could be found.' });
    return res.json({ artists });
  } catch (err) {
    return res.status(500).json({ msg: 'There was an error with the server' });
  }
});

// @route POST api/artists
// @desc Create new artist
// @access Private
router.post('/', auth, async (req, res) => {
  const { name, artistLink, bio } = req.body;
  try {
    const existingArtist = await Artist.findOne({ name });
    if (existingArtist)
      return res
        .status(400)
        .json({ msg: 'An artist by this name already exists.' });
    const newArtist = new Artist({ name, artistLink, bio });
    await newArtist.save();
    return res.json({
      msg: `Artist ${name} was successfully added to the database.`
    });
  } catch (err) {
    return res.status(500).json({ msg: 'There was an error with the server' });
  }
});
