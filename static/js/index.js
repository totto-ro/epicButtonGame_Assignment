console.log( "working" );

let socket = io( 'http://localhost:7077' );
let numCount = 0;

$('.epicButton').on('submit', function( event ){
    event.preventDefault();
    numCount += 1;

    socket.emit( 'count', numCount );
});

socket.on( 'sendAll', function( numCount ){
    let newResult = `${numCount}`;
    console.log( newResult );
    $( '.result' ).html( newResult ); //Get the HTML contents of the first element in the set of matched elements
});


$(".reset").on('submit', function( event ){
    event.preventDefault();
    numCount = 0;
    
    socket.emit('count', numCount);
})
