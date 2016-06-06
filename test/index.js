/**
 * Created by Bean Li on 2016/6/6.
 */
var fs = require('fs');
var AsynLoop = require('../index');

var fileArr = ['./1', './2', './3'];
var iterator = function (index, item, continueCallback, quitCallback) {
    fs.readFile(item, function (err, data) {
        if (err) {
            quitCallback && quitCallback();
        }else{
            console.log('execute loop ' + index + ';');
            continueCallback && continueCallback();
        }
    });
};
var callback = function () {
    console.log('fulfil work.')
};
AsynLoop(fileArr, iterator, callback).start();
