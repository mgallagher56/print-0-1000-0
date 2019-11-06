function moveKermit($left, $top, $duration=3000) {
    $('#kermit').animate({left: $left+'px', top: $top+'px', speed: 50000}, {
        duration: $duration,
        easing: 'linear'
    })
}
function switchSkiierK1($timeout) {
    setTimeout(function () {
        document.getElementById('kermit').className = 'skier'
    }, $timeout)
}
function switchSkiierK2($timeout) {
    setTimeout(function () {
        document.getElementById('kermit').className = 'skierSwitch'
    }, $timeout)
}



let krandDuration = getRandNumber()
let krandDuration1 = getRandNumber()
let krandDuration2 = getRandNumber()
let krandDuration3 = getRandNumber()
let krandDuration4 = getRandNumber()
let krandDuration5 = getRandNumber()
let krandDuration6 = getRandNumber()
let krandDuration7 = getRandNumber()
let krandDuration8 = getRandNumber()
let krandDuration9 = getRandNumber()
let krandDuration10 = getRandNumber()

function getkermitTotalTime() {
    return parseInt(krandDuration + krandDuration1 + krandDuration2 + krandDuration3 + krandDuration4 + krandDuration5 + krandDuration6 + krandDuration7 + krandDuration8 + krandDuration9 + krandDuration10)
}

let krandTurn1 = getRandNumber(1200,1100)
let krandTurn2 = getRandNumber(-150,-50)
let krandTurn3 = getRandNumber(1200,1100)
let krandTurn4 = getRandNumber(-150,-50)
let krandTurn5 = getRandNumber(1200,1100)
let krandTurn6 = getRandNumber(-150,-50)
let krandTurn7 = getRandNumber(1200,1100)
let krandTurn8 = getRandNumber(-150,-50)
let krandTurn9 = getRandNumber(1200,1100)
let krandTurn10 = getRandNumber(-150,-50)


function kermitMove() {
    setTimeout(function () {

        setTimeout(function () {
            $("#kermit").stop()
        }, 34000)

        moveKermit(krandTurn1, 2615, krandDuration)
        switchSkiierK2(2900)
        moveKermit(krandTurn2, 5480, krandDuration1)
        switchSkiierK1(5800)
        moveKermit(krandTurn3, 8095, krandDuration2)
        switchSkiierK2(8800)
        moveKermit(krandTurn4, 10810, krandDuration3)
        switchSkiierK1(11800)
        moveKermit(krandTurn5, 13625, krandDuration4)
        switchSkiierK2(14800)
        moveKermit(krandTurn6,16440, krandDuration5)
        switchSkiierK1(18100)
        moveKermit(krandTurn7,19255, krandDuration6)
        switchSkiierK2(21100)
        moveKermit(krandTurn8,21870, krandDuration7)
        switchSkiierK1(24000)
        moveKermit(krandTurn9,24685, krandDuration8)
        switchSkiierK2(27000)
        moveKermit(krandTurn10,27600, krandDuration9)
        switchSkiierK1(30000)
        moveKermit(950,30000, krandDuration10)



    }, 4100)
}