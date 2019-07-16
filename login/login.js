$(function () {
    activate();
});

function activate() {
    var done = false;
    $('#account img').click(function () {
        if (!done) {
            $('#bg').css({
                'opacity': '1',
                'transition': '0.5s'
            });
            $('#account').animate({
                'top': '-60px'
            }, 500, function () {
                $('#container').append('<div><input type="password"></div>');
            });
            done = true;
        }
    });
};