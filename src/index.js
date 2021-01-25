const express = require('express');
const app = express();
const cron = require('node-cron');
const playerJob = require('./job/index')

//routes
const playerRoutes = require('./routes/player')
const statRoutes = require('./routes/stat')

/*cron.schedule('* * * * * *', function() {
    playerJob.create();
});*/

app.use('/players', playerRoutes);
app.use('/stats', statRoutes);

app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    res.send('Server is running');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});