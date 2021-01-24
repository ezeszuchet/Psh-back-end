const express = require('express');
const app = express();
const cron = require('node-cron');
const playerJob = require('./job/index')

//routes
const playerRoutes = require('./routes/player')
const statRoutes = require('./routes/stat')

cron.schedule('* * * * * *', function() {
    playerJob.create();
});

app.use('/players', playerRoutes);
app.use('/stats', statRoutes);

app.get('/', function (req, res) {
    res.send('Server is running on port 2000');
});

app.listen(2000, () => {
    console.log(`Server is running on port 2000`)
});