const express = require('express');

const userRoutes = require('./routes/user');

const cors = require('cors');
const app = express();

app.use(cors());

app.use('/api', userRoutes);

app.listen(3000);