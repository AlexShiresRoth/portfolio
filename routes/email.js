require('dotenv').config();
const express = require('express'),
	mailgun = require('mailgun-js'),
	cors = require('cors'),
	router = express.Router();

const { check, validationResult } = require('express-validator');

router.use(cors());

router.post('/', [check('email').isEmail()], async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		console.log(errors.array());
		res.status(500).json({ msg: errors.array() });
	}

	const { name, email, message } = req.query;

	const DOMAIN = process.env.DOMAIN;

	const mg = mailgun({ apiKey: process.env.API_KEY, domain: DOMAIN });

	const data = {
		from: email,
		to: 'alex@alexshiresroth.com',
		subject: 'Client Contact Request',
		text: `From: ${name} \n
             Message: ${message} `,
	};

	await mg.messages().send(data, (error, body) => {
		if (error) {
			console.log(error.message);
			res.status(500).json({ msg: error.message });
		} else if (!error) {
			console.log(body);
			res.status(200).json({ msg: 'Email Sent!' });
		}
	});
});

module.exports = router;
