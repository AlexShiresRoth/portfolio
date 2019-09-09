//require("dotenv").config();
const express = require('express'),
	mailgun = require('mailgun-js'),
	cors = require('cors'),
	router = express.Router();

	router.use(cors());

router.post('/', (req, res) => {
	const { name, email, message } = req.query;
	console.log(name, email, message);
	const DOMAIN = process.env.DOMAIN;
	const mg = mailgun({ apiKey: process.env.API_KEY, domain: DOMAIN });
	const data = {
		from: email,
		to: 'alexshiresroth@gmail.com',
		subject: 'Client Contact Request',
		text: `<tr class='email-container'>
            <td>${name}</td>
             <td>${message}</td>
             </tr>`,
	};
	mg.messages().send(data, (error, body) => {
		if (error) {
			console.log(error.message);
		} else if (!error) {
			console.log(body);
		}
	});
});

module.exports = router;
