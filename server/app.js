const express = require('express');

const userRoutes = require('./routes/user');

var cors = require('cors')
const app = express();

app.use(cors())

app.use('/api', userRoutes);

app.use((err, req, res, next) => {
    console.log(err);
})

app.listen(3000);