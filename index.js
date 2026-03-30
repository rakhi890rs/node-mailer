const sendEmail = require("./email");

sendEmail(
  "rakhisinghh65@gmail.com",
  "Test Email",
  "Hello Rakhi, this is a fresh OAuth2 test"
).catch(console.error);