const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
eventEmitter.on('start', () => {
    console.log('started');
  });

  eventEmitter.on('start', () => {
    console.log('started 2');
  });

  setInterval(() => {
    eventEmitter.emit('start');
  }, 1000)