# asynLoop

asynchronous loop Solution for node Env!!!

## Usage

```javascript
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
```

## Tests

    $ cd test
    $ node index.js

## Credits

  - [Bean Li](http://github.com/xinghuodesdf)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Bean Li