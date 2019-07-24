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
                $('#container').append('<div id="pin"><input type="password"></div>');
                $('#pin input').keypress(function (e) { 
                    if(e.keyCode==13){
                        login();
                    }
                });
            });
            done = true;
        }
    });

};
function login(){
    $('#container').html('<div class="loading"></div>');
};