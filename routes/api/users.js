const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route GET api/users
// @desc Test route
// @access Public
router.get('/', (req, res) => res.send('Users route!'));

// @route POST api/users
// @desc Register User
// @access Public
router.post(
	'/',
	[
		check('name', 'Name is Required')
			.not()
			.isEmpty(),
		check('email', 'Please provide a valid email').isEmail(),
		check(
			'password',
			'Please add a password with more than 6 characters'
		).isLength({ min: 6 })
	],
	(req, res) => {
		console.log(req.body);
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		res.send('Users route!');
	}
);

module.exports = router;
