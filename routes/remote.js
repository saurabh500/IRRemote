var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

/*
router.param('command', function (req, res, next, command) {
  console.log('Command ' +  command);
  next();
});
*/

router.get('/MyCommand', function(req, res, next) {
  res.send(" MyCommand Called ");
});

router.get('/:command', function(req, res) {
    
    var command = req.params.command;
    
    console.log(command);
    exec('irsend SEND_ONCE SAMSUNG55 ' + command, function callback(error, stdout, stderr){
        if(error){
            console.log(error);
        }
        if(stderr){
            console.log(stderr);
        }
        res.send(req.params);
    });
});

router.get('/', function(req, res, next) {
    console.log("Root Called for Remote ");
    
});

module.exports = router;
