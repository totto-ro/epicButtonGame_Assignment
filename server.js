const express = require( 'express' );
const app = express();

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use( express.static(__dirname + '/static') );

app.use( express.urlencoded({ extended: true }) );

//render index
app.get("/", function( request, response ){
    
    response.render( 'index');
});

const server = app.listen( 7077 );

const io =require( 'socket.io' ) ( server );

io.on( 'connection', function( socket ){
    console.log( "You are in the server" );

    
    socket.on( 'count', function( numCount ){
        console.log( numCount );
        io.sockets.emit( 'sendAll', numCount )
    });
    

});