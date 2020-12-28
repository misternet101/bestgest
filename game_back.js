console.log('runs!!!')
const http = require('http');
const app = require('express')();
const server = http.createServer(app);
const io = require('socket.io')(server);


app.get('/',(req, res) => {
    res.sendFile(__dirname + '\\gest.html');
})

io.sockets.on('connection', socket => {
    socket.on('start', num => {
        io.sockets.emit('start', num);
    })
    socket.on('go', num => {
        io.sockets.emit('go', num);
    })
    socket.on('send_gest', gest => {
        io.sockets.emit('get_gest', gest)
    })
})

server.listen(process.env.PORT);
