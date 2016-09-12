var sendCommand = function(buttonClicked) {
    $.get('/remote/'+buttonClicked.attr('data-button'), {
        },
        function(data, status) {
            //alert('Outlet toggled!');
        });

};

$(function() {
    $('button').click(function() {
        sendCommand($(this));
    });
});