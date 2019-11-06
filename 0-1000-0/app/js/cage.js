function moveCage($left, $top, $duration=3000) {
    $('#cage').animate({left: $left+'px', top: $top+'px', speed: 50000}, {
        duration: $duration,
        easing: 'linear'
    })
}
function switchSkiierC1($timeout) {
    setTimeout(function () {
        document.getElementById('cage').className = 'skier'
    }, $timeout)
}
function switchSkiierC2($timeout) {
    setTimeout(function () {
        document.getElementById('cage').className = 'skierSwitch'
    }, $timeout)
}

let crandDuration = getRandNumber()
let crandDuration1 = getRandNumber()
let crandDuration2 = getRandNumber()
let crandDuration3 = getRandNumber()
let crandDuration4 = getRandNumber()
let crandDuration5 = getRandNumber()
let crandDuration6 = getRandNumber()
let crandDuration7 = getRandNumber()
let crandDuration8 = getRandNumber()
let crandDuration9 = getRandNumber()
let crandDuration10 = getRandNumber()

function getCageTotalTime() {
    return parseInt(crandDuration + crandDuration1 + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 + crandDuration6 + crandDuration7 + crandDuration8 + crandDuration9 + crandDuration10)
}

let crandTurn1 = getRandNumber(1200,1100)
let crandTurn2 = getRandNumber(-150,-50)
let crandTurn3 = getRandNumber(1200,1100)
let crandTurn4 = getRandNumber(-150,-50)
let crandTurn5 = getRandNumber(1200,1100)
let crandTurn6 = getRandNumber(-150,-50)
let crandTurn7 = getRandNumber(1200,1100)
let crandTurn8 = getRandNumber(-150,-50)
let crandTurn9 = getRandNumber(1200,1100)
let crandTurn10 = getRandNumber(-150,-50)


function cageMove() {
    setTimeout(function () {

        setTimeout(function () {
            $("#cage").stop()
        }, 34000)

        moveCage(crandTurn1, 2615, crandDuration)
        switchSkiierC2(2900)
        moveCage(crandTurn2, 5480, crandDuration1)
        switchSkiierC1(5800)
        moveCage(crandTurn3, 8095, crandDuration2)
        switchSkiierC2(8800)
        moveCage(crandTurn4, 10810, crandDuration3)
        switchSkiierC1(11800)
        moveCage(crandTurn5, 13625, crandDuration4)
        switchSkiierC2(14800)
        moveCage(crandTurn6,16440, crandDuration5)
        switchSkiierC1(18100)
        moveCage(crandTurn7,19255, crandDuration6)
        switchSkiierC2(21100)
        moveCage(crandTurn8,21870, crandDuration7)
        switchSkiierC1(24000)
        moveCage(crandTurn9,24685, crandDuration8)
        switchSkiierC2(27000)
        moveCage(crandTurn10,27600, crandDuration9)
        switchSkiierC1(30000)
        moveCage(950,30000, crandDuration10)



    }, 4100)
}