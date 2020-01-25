const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const NewsPost = require('../../models/NewsPost');

// @route GET api/newsPosts
// @desc Get all newsPosts
// @access Public
router.get('/', async (req, res) => {
  try {
    const newsPosts = await NewsPost.find();
    if (!newsPosts)
      return res.status(400).json({ msg: 'No news posts could be found.' });
    return res.json({ newsPosts });
  } catch (err) {
    if (err)
      return res
        .status(500)
        .json({ msg: 'There was an issue with the server.' });
  }
});

// @route GET api/newsPosts/:id
// @desc Get newsPost by ID
// @access Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    let newsPost = await NewsPost.findById(id);
    if (!newsPost)
      return res
        .status(400)
        .json({ msg: 'No matching news post could be found.' });
    return res.json({ newsPost });
  } catch (err) {
    if (err)
      return res
        .status(500)
        .json({ msg: 'There was an issue with the server.' });
  }
});

// @route POST api/newsPosts
// @desc Create new newsPost
// @access Private
router.post('/', auth, async (req, res) => {
  const { title, description, filePath } = req.body;

  try {
    let newsPost = await NewsPost.findOne({ title });
    if (newsPost)
      return res
        .status(400)
        .json({ msg: 'There is already a newsPost with that title.' });

    newsPost = new NewsPost({ title, description, filePath });
    await newsPost.save();
    return res.json({
      msg: `News post titled ${title} was saved to database successfully.`
    });
  } catch (err) {
    if (err)
      return res
        .status(500)
        .json({ msg: 'There was a problem with the server.' });
  }
});

// @route PUT api/newsPosts/:id
// @desc Update newsPost by ID
// @access Private
router.put('/:id', auth, async (req, res) => {
  const { title, description, filePath } = req.body;
  try {
    const newNewsPost = await NewsPost.findByIdAndUpdate(req.params.id, {
      title,
      description,
      filePath
    });
    if (!newNewsPost)
      return res.status(400).json({ msg: 'News post could not be updated.' });
    return res.json({ msg: 'News post succesfully updated.' });
  } catch (err) {
    if (err)
      return res
        .status(500)
        .json({ msg: 'There was an issue with the server.' });
  }
});

// @route DELETE api/newsPosts/:id
// @desc Delete newsPost by ID
// @access Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const deletedPost = await NewsPost.findByIdAndDelete(req.params.id);
    return res.json({
      msg: `Edition ${deletedPost.title} was succesfully deleted.`
    });
  } catch (err) {
    if (err)
      return res
        .status(500)
        .json({ msg: 'There was an issue with the server.' });
  }
});

module.exports = router;
