const express = require('express');

const userRoutes = require('./routes/user');

const app = express();

app.use('/api', userRoutes);

app.listen(3000);