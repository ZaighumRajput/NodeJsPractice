var EventEmitter = require('events').EventEmitter;

//logger is an EventEmitter object
var logger = new EventEmitter();


//Listening
logger.on('error', function(message){
    console.log('ERR: ' + message);
});

//Making the Event Happen

logger.emit('error', 'Alarm oclockXC');

logger.emit('error', "Ehhs cracked");
