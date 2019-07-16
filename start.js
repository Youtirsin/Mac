$(function () {
    main();
    $.get("login/wallpaper.jpg");
});

function main() {
    setTimeout(() => {
        start();
    }, 3000); //7+1.5+2+2=12.5s
    setTimeout(() => {
        loginin();
    }, 15000);
};


function start() {
    $('#realbody').css({
        'background': 'white',
        'transition': '2s'
    });
    var scrolllen = 0;
    setTimeout(() => {
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
    }, 4000);
}

function jump() {
    $('#scroll').css('background', 'white');
    $('#scroll div').css('background', 'white');
    $('#realbody,#scroll,#scroll div').css({
        'background': '#000',
        'transition': '2s'
    });
}

function loginin() {
    window.location.href = 'login/login.html';
}