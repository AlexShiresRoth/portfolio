//require('dotenv').config();
const express = require('express'),
	mailgun = require('mailgun-js'),
	cors = require('cors'),
	router = express.Router();

router.use(cors());

router.post('/', async (req, res) => {
	const { name, email, message } = req.query;
	console.log(name, email, message);
	const DOMAIN = process.env.DOMAIN;
	const mg = mailgun({ apiKey: process.env.API_KEY, domain: DOMAIN });
	const data = {
		from: email,
		to: 'alex@alexshiresroth.com',
		subject: 'Client Contact Request',
		text: `<tr class='email-container'>
            <td>${name}</td>
             <td>${message}</td>
             </tr>`,
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
