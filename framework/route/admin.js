const express = require('express');

const admin = express.Router();
admin.get('/index', (req, res) => {
    res.send('welcome adminpage')
})

module.exports = admin;