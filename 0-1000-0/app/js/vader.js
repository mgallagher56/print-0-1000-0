function moveVader($left, $top, $duration = 3000) {
    $('#vader').animate({left: $left + 'px', top: $top + 'px', speed: 50000}, {
        duration: $duration,
        easing: 'linear'
    })
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

let vswitch1 = vrandDuration - 100
let vswitch2 = vswitch1 + vrandDuration2 - 100
let vswitch3 = vswitch2 + vrandDuration3 - 100
let vswitch4 = vswitch3 + vrandDuration4 - 100
let vswitch5 = vswitch4 + vrandDuration5 - 100
let vswitch6 = vswitch5 + vrandDuration6 - 100
let vswitch7 = vswitch6 + vrandDuration7 - 100
let vswitch8 = vswitch7 + vrandDuration8 - 100
let vswitch9 = vswitch8 + vrandDuration9 - 100
let vswitch10 = vswitch9 + vrandDuration10 - 100

function vaderMove() {
    setTimeout(function () {

        moveVader(randTurn1, 2615, vrandDuration)
        switchSkier2(vswitch1, 'vader')
        moveVader(randTurn2, 5480, vrandDuration1)
        switchSkier1(vswitch2, 'vader')
        moveVader(randTurn1, 8095, vrandDuration2)
        switchSkier2(vswitch3, 'vader')
        moveVader(randTurn2, 10810, vrandDuration3)
        switchSkier1(vswitch4, 'vader')
        moveVader(randTurn1, 13625, vrandDuration4)
        switchSkier2(vswitch5, 'vader')
        moveVader(randTurn2, 16440, vrandDuration5)
        switchSkier1(vswitch6, 'vader')
        moveVader(randTurn1, 19255, vrandDuration6)
        switchSkier2(vswitch7, 'vader')
        moveVader(randTurn2, 21870, vrandDuration7)
        switchSkier1(vswitch8, 'vader')
        moveVader(randTurn1, 24685, vrandDuration8)
        switchSkier2(vswitch9, 'vader')
        moveVader(randTurn2, 27600, vrandDuration9)
        switchSkier1(vswitch10, 'vader')
        moveVader(950, 30000, vrandDuration10)

    }, 4400)
}