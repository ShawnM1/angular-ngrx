const express = require('express');
const axios = require('axios');

const router = express.Router();

const domain = 'https://jsonplaceholder.typicode.com';

router.get('/users', async (req, res, next) => {
    const response = await axios.get(`${domain}/users`);
    res.json(response.data);
})

module.exports = router;