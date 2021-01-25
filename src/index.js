const express = require('express');
const app = express();
const cron = require('node-cron');
const playerJob = require('./job/index')

//routes
const playerRoutes = require('./routes/player')

cron.schedule('*/5 * * * *', function() {
    playerJob.create();
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.use('/players', playerRoutes);

app.get('/', function (req, res) {
    res.send('Server is running');
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});