var eventEmitter = require('events').EventEmitter;
var count = 0;
var em = new eventEmitter();

setInterval(function() {
    em.emit('timed', count++);
}, 3000
);

em.on('timed', function(data) {
    console.log('The counter is: ' + data);
});