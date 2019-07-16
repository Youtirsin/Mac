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
            done = true;
        }
    });
};