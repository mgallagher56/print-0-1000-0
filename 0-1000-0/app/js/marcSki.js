function moveMarc($left, $top, $duration = 3000) {
    $('#skier').animate({left: $left + 'px', top: $top + 'px', speed: 50000}, {
        duration: $duration,
        easing: 'linear'
    })
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


let mswitch1 = randDuration - 100
let mswitch2 = mswitch1 + randDuration2 - 100
let mswitch3 = mswitch2 + randDuration3 - 100
let mswitch4 = mswitch3 + randDuration4 - 100
let mswitch5 = mswitch4 + randDuration5 - 100
let mswitch6 = mswitch5 + randDuration6 - 100
let mswitch7 = mswitch6 + randDuration7 - 100
let mswitch8 = mswitch7 + randDuration8 - 100
let mswitch9 = mswitch8 + randDuration9 - 100
let mswitch10 = mswitch9 + randDuration10 - 100

function marcMove() {
    setTimeout(function () {

        moveMarc(randTurn1, 2615, randDuration)
        switchSkier2(mswitch1, 'skier')
        moveMarc(randTurn2, 5480, randDuration1)
        switchSkier1(mswitch2, 'skier')
        moveMarc(randTurn1, 8095, randDuration2)
        switchSkier2(mswitch3, 'skier')
        moveMarc(randTurn2, 10810, randDuration3)
        switchSkier1(mswitch4, 'skier')
        moveMarc(randTurn1, 13625, randDuration4)
        switchSkier2(mswitch5, 'skier')
        moveMarc(randTurn2, 16440, randDuration5)
        switchSkier1(mswitch6, 'skier')
        moveMarc(randTurn1, 19255, randDuration6)
        switchSkier2(mswitch7, 'skier')
        moveMarc(randTurn2, 21870, randDuration7)
        switchSkier1(mswitch8, 'skier')
        moveMarc(randTurn1, 24685, randDuration8)
        switchSkier2(mswitch9, 'skier')
        moveMarc(randTurn2, 27600, randDuration9)
        switchSkier1(mswitch10, 'skier')
        moveMarc(950, 30000, randDuration10)
        console.log()

    }, 4400)
}