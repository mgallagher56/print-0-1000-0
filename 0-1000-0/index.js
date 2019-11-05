document.getElementById('button').addEventListener('click',function (e) {
    e.preventDefault()
    document.getElementById('button').className = 'hidden'
    document.body.className = 'skiingbg'
    document.getElementById('layer').className = 'skiing'
    document.getElementById('text').className = 'hidden'
    document.getElementById('skier').className = 'skier'
    document.getElementById("audio").play();
    setTimeout(function () {
        document.getElementById("race").play();
    },3500)



    function move($left, $top, $duration=3000) {
        $('img').animate({left: $left, top: $top, speed: 50000}, {
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
            $("img").stop(true, true, true )
            document.getElementById('output').className = 'hidden'
            document.body.className = 'podium'
            document.getElementById('skier').className = 'skier2'
            document.getElementById("cheer").play();

        }, 35500)

        move('1150px', '2615px')
        switchSkiier2(2900,)
        move('-100px', '5480px')
        switchSkiier1(5800)
        move('1150px', '8095px')
        switchSkiier2(8800)
        move('-100px', '10810px')
        switchSkiier1(11800)
        move('1150px', '13625px')
        switchSkiier2(14800)
        move('-100px','16440px')
        switchSkiier1(18100)
        move('1150px','19255px')
        switchSkiier2(21100)
        move('-100px','21870px')
        switchSkiier1(24000)
        move('1150px','24685px' )
        switchSkiier2(27000)
        move('-100px','27600px')
        switchSkiier1(30000)
        move('400px','29350px', 4000)



    }, 4100)

})