function moveVader($left, $top, $duration=3000) {
    $('#vader').animate({left: $left+'px', top: $top+'px', speed: 50000}, {
        duration: $duration,
        easing: 'linear'
    })
}
function switchSkiierV1($timeout) {
    setTimeout(function () {
        document.getElementById('vader').className = 'skier'
    }, $timeout)
}
function switchSkiierV2($timeout) {
    setTimeout(function () {
        document.getElementById('vader').className = 'skierSwitch'
    }, $timeout)
}
function getRandNumber($max = 3200, $min=2800) {
    return Math.floor(Math.random() * ($max - $min + 1) ) + $min
}

let vrandDuration = getRandNumber()
let vrandDuration1 = getRandNumber()
let vrandDuration2 = getRandNumber()
let vrandDuration3 = getRandNumber()
let vrandDuration4 = getRandNumber()
let vrandDuration5 = getRandNumber()
let vrandDuration6 = getRandNumber()
let vrandDuration7 = getRandNumber()
let vrandDuration8 = getRandNumber()
let vrandDuration9 = getRandNumber()
let vrandDuration10 = getRandNumber()

function getVaderTotalTime() {
    return parseInt(vrandDuration + vrandDuration1 + vrandDuration2 + vrandDuration3 + vrandDuration4 + vrandDuration5 + vrandDuration6 + vrandDuration7 + vrandDuration8 + vrandDuration9 + vrandDuration10)
}

let vrandTurn1 = getRandNumber(1200,1100)
let vrandTurn2 = getRandNumber(-150,-50)
let vrandTurn3 = getRandNumber(1200,1100)
let vrandTurn4 = getRandNumber(-150,-50)
let vrandTurn5 = getRandNumber(1200,1100)
let vrandTurn6 = getRandNumber(-150,-50)
let vrandTurn7 = getRandNumber(1200,1100)
let vrandTurn8 = getRandNumber(-150,-50)
let vrandTurn9 = getRandNumber(1200,1100)
let vrandTurn10 = getRandNumber(-150,-50)


function vaderMove() {
    setTimeout(function () {

        setTimeout(function () {
            $("#vader").stop()
        }, 34000)

        moveVader(vrandTurn1, 2615, vrandDuration)
        switchSkiierV2(2900)
        moveVader(vrandTurn2, 5480, vrandDuration1)
        switchSkiierV1(5800)
        moveVader(vrandTurn3, 8095, vrandDuration2)
        switchSkiierV2(8800)
        moveVader(vrandTurn4, 10810, vrandDuration3)
        switchSkiierV1(11800)
        moveVader(vrandTurn5, 13625, vrandDuration4)
        switchSkiierV2(14800)
        moveVader(vrandTurn6,16440, vrandDuration5)
        switchSkiierV1(18100)
        moveVader(vrandTurn7,19255, vrandDuration6)
        switchSkiierV2(21100)
        moveVader(vrandTurn8,21870, vrandDuration7)
        switchSkiierV1(24000)
        moveVader(vrandTurn9,24685, vrandDuration8)
        switchSkiierV2(27000)
        moveVader(vrandTurn10,27600, vrandDuration9)
        switchSkiierV1(30000)
        moveVader(950,30000, vrandDuration10)



    }, 4100)
}