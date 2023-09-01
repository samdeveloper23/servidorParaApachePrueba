require('dotenv').config();
const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());

server.get('/', (req, res) => {
    res.send({
        status: 200,
        msg: 'conseguido',
    })
})

server.listen(process.env.PORT, () => {
    console.log(`escuchado en el puerto: ${process.env.PORT}`);
});