var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
/**
 * asynchronous loop Solution
 * @param array
 * @param iterator
 * @param callback
 * @returns {{start: 'start', state: {allLoopNum: *, execLoopNum: number}}}
 */
module.exports = function (array, iterator, callback) {

    var state = {
        'allLoopNum': array.length,
        'execLoopNum': 0
    };
    var _iterator = function (index, array) {
        if(index >= array.length){
            //fulfil work
            emitter.removeAllListeners('__loop__');

            //update state
            state.execLoopNum = state.allLoopNum;

            //execute fulfil callback
            callback && callback.apply();
        }else{
            iterator && iterator(index, array[index], function continueCallback(){
                //update state
                ++ state.execLoopNum;

                //start next loop
                emitter.emit('__loop__', state.execLoopNum, array);
            }, function quitCallback(){
                //quit work
                emitter.removeAllListeners('__loop__');
            })
        }
    };
    emitter.addListener('__loop__', _iterator);

    return {
        'start': function () {
            //start first loop
            emitter.emit('__loop__', 0,  array);
        },
        'state': state
    };
};