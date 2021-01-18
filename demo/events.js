const EventEmitter = require('events');

const emitter = new EventEmitter();

// emitter.on('anyth', (data) => {
//     console.log('событие', data)
// });

// emitter.emit('anyth', {a: 1});
// emitter.emit('anyth', {ab: 12});

// setTimeout(() => {
//     emitter.emit('anyth', {abc: 123});
// }, 1000);

class Dispatcher extends EventEmitter {
    subscribe(eventName, cb) {
        console.log('(Subscribe)');
        this.on(eventName, cb);
    }

    dispatch(eventName, data) {
        console.log('(Dispatching)');
        this.emit(eventName, data);
    }
}

const dis = new Dispatcher();

dis.subscribe('aa', (data) => {
    console.log('ON aa', data)
});

dis.dispatch('aa', {aa: 11});