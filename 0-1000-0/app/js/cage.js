function moveCage($left, $top, $duration=3000) {
    $('#cage').animate({left: $left+'px', top: $top+'px', speed: 50000}, {
        duration: $duration,
        easing: 'linear'
    })
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

let cswitch1 = crandDuration -100
let cswitch2 = crandDuration + crandDuration2-100
let cswitch3 = crandDuration + crandDuration2 + crandDuration3-100
let cswitch4 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4-100
let cswitch5 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5-100
let cswitch6 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 + crandDuration6-100
let cswitch7 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 + crandDuration6 + crandDuration7-100
let cswitch8 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 + crandDuration6 + crandDuration7 + crandDuration8-100
let cswitch9 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 + crandDuration6 + crandDuration7 + crandDuration8 + crandDuration9-100
let cswitch10 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 + crandDuration6 + crandDuration7 + crandDuration8 + crandDuration9 + crandDuration10-100


function cageMove() {
    setTimeout(function () {

        moveCage(randTurn1, 2615, crandDuration)
        switchSkier2(cswitch1, 'cage')
        moveCage(randTurn2, 5480, crandDuration1)
        switchSkier1(cswitch2, 'cage')
        moveCage(randTurn1, 8095, crandDuration2)
        switchSkier2(cswitch3, 'cage')
        moveCage(randTurn2, 10810, crandDuration3)
        switchSkier1(cswitch4, 'cage')
        moveCage(randTurn1, 13625, crandDuration4)
        switchSkier2(cswitch5, 'cage')
        moveCage(randTurn2,16440, crandDuration5)
        switchSkier1(cswitch6, 'cage')
        moveCage(randTurn1,19255, crandDuration6)
        switchSkier2(cswitch7, 'cage')
        moveCage(randTurn2,21870, crandDuration7)
        switchSkier1(cswitch8, 'cage')
        moveCage(randTurn1,24685, crandDuration8)
        switchSkier2(cswitch9, 'cage')
        moveCage(randTurn2,27600, crandDuration9)
        switchSkier1(cswitch10, 'cage')
        moveCage(950,30000, crandDuration10)

    }, 4400)
}