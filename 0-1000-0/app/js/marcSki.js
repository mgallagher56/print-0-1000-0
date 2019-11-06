function setScrollTime($totalTime) {
    setTimeout(function () {
        $('html, body').animate({scrollTop: $(document).height()}, $totalTime, 'linear')
    }, 4600)
}
function moveMarc($left, $top, $duration=3000) {
    $('#skier').animate({left: $left+'px', top: $top+'px', speed: 50000}, {
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
function getRandNumber($max = 3200, $min=2800) {
    return Math.floor(Math.random() * ($max - $min + 1) ) + $min
}
let randDuration = getRandNumber()
let randDuration1 = getRandNumber()
let randDuration2 = getRandNumber()
let randDuration3 = getRandNumber()
let randDuration4 = getRandNumber()
let randDuration5 = getRandNumber()
let randDuration6 = getRandNumber()
let randDuration7 = getRandNumber()
let randDuration8 = getRandNumber()
let randDuration9 = getRandNumber()
let randDuration10 = getRandNumber()

function getMarcTotalTime() {
   return parseInt(randDuration + randDuration1 + randDuration2 + randDuration3 + randDuration4 + randDuration5 + randDuration6 + randDuration7 + randDuration8 + randDuration9 + randDuration10)
}

let randTurn1 = getRandNumber(1200,1100)
let randTurn2 = getRandNumber(-150,-50)
let randTurn3 = getRandNumber(1200,1100)
let randTurn4 = getRandNumber(-150,-50)
let randTurn5 = getRandNumber(1200,1100)
let randTurn6 = getRandNumber(-150,-50)
let randTurn7 = getRandNumber(1200,1100)
let randTurn8 = getRandNumber(-150,-50)
let randTurn9 = getRandNumber(1200,1100)
let randTurn10 = getRandNumber(-150,-50)


function marcMove() {
    setTimeout(function () {

        setTimeout(function () {
            $("#skier").stop()
            document.getElementById('finish').className = 'hidden'
            document.getElementById('output').className = 'hidden'
            document.body.className = 'podium'
            moveMarc(400,125, 3000)
            document.getElementById('skier').className = 'skier2'
            document.getElementById("cheer").play();

        }, 34000)

        moveMarc(randTurn1, 2615, randDuration)
        switchSkiier2(2900)
        moveMarc(randTurn2, 5480, randDuration1)
        switchSkiier1(5800)
        moveMarc(randTurn3, 8095, randDuration2)
        switchSkiier2(8800)
        moveMarc(randTurn4, 10810, randDuration3)
        switchSkiier1(11800)
        moveMarc(randTurn5, 13625, randDuration4)
        switchSkiier2(14800)
        moveMarc(randTurn6,16440, randDuration5)
        switchSkiier1(18100)
        moveMarc(randTurn7,19255, randDuration6)
        switchSkiier2(21100)
        moveMarc(randTurn8,21870, randDuration7)
        switchSkiier1(24000)
        moveMarc(randTurn9,24685, randDuration8)
        switchSkiier2(27000)
        moveMarc(randTurn10,27600, randDuration9)
        switchSkiier1(30000)
        moveMarc(950,30000, randDuration10)



    }, 4100)
}