const express = require('express');
const mailerController = require('./contact.controller');

const router = express.Router();

router.post('/contact-us', mailerController);

module.exports = router;