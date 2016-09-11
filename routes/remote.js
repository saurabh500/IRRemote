var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

router.get('/:command', function(req, res) {
    
    var command = req.params.command;
    
    console.log("Command Called " + command);
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


module.exports = router;
