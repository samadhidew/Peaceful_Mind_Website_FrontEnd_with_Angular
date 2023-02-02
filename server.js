var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/',(req,res)=> res.send('Hello TestCodesiz server!'))
io.on('connection',(socket)=> {
    console.log('SOme user is connected');
})
http.listen(3000,()=>{
    console.log('Listening On *:3000')
})