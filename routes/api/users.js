const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

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
	async (req, res) => {
		// Check for errors
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		// Get req parameters
		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'User already exists' }] });
			}

			user = new User({ name, email, password });

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = { user: { id: user.id } };

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 36000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			return res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
