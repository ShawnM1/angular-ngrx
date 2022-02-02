const express = require('express');
const axios = require('axios');

const router = express.Router();

const domain = 'https://jsonplaceholder.typicode.com';

router.get('/users', async (req, res, next) => {
    const response = await axios.get(`${domain}/users`);
    res.json(response.data);
})

router.get('/users/:id', async (req, res, next) => {
    console.log('userId ' + req.params['id']);
    try {
        const response = await axios.get(`${domain}/users/${req.params['id']}`);
        res.json(response.data);
    } catch(e) {
       throw e;
    }
  
})


module.exports = router;