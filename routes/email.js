require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  mailgun = require("mailgun-js"),
  router = express.Router();

router.use(cors());

router.post("/", (req, res) => {
  const { name, email, message } = req.query;
  console.log(name,email,message);
  const DOMAIN = process.env.DOMAIN;
  const mg = mailgun({ apiKey: process.env.API_KEY, domain: DOMAIN });
  const data = {
    from: email,
    to: "alexshiresroth@alexshiresroth.com",
    subject: "Client Contact Request",
    text: `<div class='email-container'>
            <h2>${name}</h2>
             <p>${message}</p>
             </div>`
  };
  mg.messages().send(data, (error, body) => {
    if (error) {
      console.log(error.message);
    } else if(!error) {
      console.log(body);
    }
  });
});

module.exports = router;
