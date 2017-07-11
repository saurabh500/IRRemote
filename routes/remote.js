var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

router.get('/:command', function(req, res) {
    
    var command = req.params.command;
    
    console.log("Command Called " + command);
    if(command === "KEY_VOLUMEUP_MULTI")
    {
	for(i=0;i < 5 ; i++ )
	{
	    exec('irsend SEND_ONCE SAMSUNG55 KEY_VOLUMEUP'); 
	}
	res.send(req.params);
	return;
    }

    if(command === "KEY_VOLUMEDOWN_MULTI")
    {
        for( i = 0 ; i < 5 ; i++ ){
		exec('irsend SEND_ONCE SAMSUNG55 KEY_VOLUMEDOWN');
	}
	res.send(req.params);
	return;
    }
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
