$(function () {
    setTimeout(() => {
        start();
    }, 3000);
});

function start() {
    var scrolllen = 0;
    $('#scroll').css('background', '#f3f2f2');
    scroll_ = setInterval(() => {
        scrolllen += 1;
        if (scrolllen >= 150) {
            //scrolllen=0;
            clearInterval(scroll_);
            setTimeout(() => {
                jump();
            }, 2000);
        } else {
            $('#scroll div').css('width', scrolllen);
        }
    }, 20); //time=10*150ms=1.5s;
}

function jump() {
    $('#scroll').css('background', 'white');
    $('#scroll div').css('background', 'white');
    $('body,#scroll,#scroll div').css({
        'background': '#000',
        'transition': '2s'
    });
}