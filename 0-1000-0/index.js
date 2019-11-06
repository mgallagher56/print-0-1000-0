document.getElementById('button').addEventListener('click',function (e) {
    e.preventDefault()
    document.getElementById('button').className = 'hidden'
    document.body.className = 'skiingbg'
    document.getElementById('layer').className = 'skiing'
    document.getElementById('text').className = 'hidden'
    document.getElementById('skier').className = 'skier'
    document.getElementById('finish').className = 'finish'
    document.getElementById("audio").play();
    setTimeout(function () {
        document.getElementById("race").play();
    },3500)

    function move($left, $top, $duration=3000) {
        $('#skier').animate({left: $left, top: $top+'px', speed: 50000}, {
            duration: $duration,
            easing: 'linear'
        })
    }
    function switchSkiier1($timeout) {
        setTimeout(function () {
            document.getElementById('skier').className = 'skier'
        }, $timeout)
    }
    function switchSkiier2($timeout) {
        setTimeout(function () {
            document.getElementById('skier').className = 'skierSwitch'
        }, $timeout)
    }

    setTimeout(function () {
        setTimeout(function () {
            $('html, body').animate({scrollTop:$(document).height()}, 32900,'linear')
        },500)

        setTimeout(function () {
            $("#skier").stop()
            document.getElementById('finish').className = 'hidden'
            document.getElementById('output').className = 'hidden'
            document.body.className = 'podium'
            move(400,125, 3000)
            document.getElementById('skier').className = 'skier2'
            document.getElementById("cheer").play();

        }, 34000)

        move('1150px', 2615)
        switchSkiier2(2900,)
        move('-100px', 5480)
        switchSkiier1(5800)
        move('1150px', 8095)
        switchSkiier2(8800)
        move('-100px', 10810)
        switchSkiier1(11800)
        move('1150px', 13625)
        switchSkiier2(14800)
        move('-100px',16440)
        switchSkiier1(18100)
        move('1150px',19255)
        switchSkiier2(21100)
        move('-100px',21870)
        switchSkiier1(24000)
        move('1150px',24685)
        switchSkiier2(27000)
        move('-100px',27600)
        switchSkiier1(30000)
        move('950px',30000)

    }, 4100)

})