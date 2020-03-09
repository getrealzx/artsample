const e = require('express');
const app = e();

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(require('./controllers/index.js'));
// app.use(require('./controllers/albums.js'));

app.use(require('./controllers/chat'));

app.use(e.static('public'));




io.on('connection',(socket) => { //on let to accept message
    console.log('user connected');
    socket.on('chat message',(msg) => {
        io.emit('chat message', msg);
    })
    
})












app.listen(1000, () => {
    console.log('port 1000 is running');

})