function moveCage ($left, $top, $duration = 3000) {
  $('#cage').animate({
    left: $left + 'px',
    top: $top + 'px',
    speed: 50000
  }, {
    duration: $duration,
    easing: 'linear'
  })
}

const crandDuration = getRandNumber()
const crandDuration1 = getRandNumber()
const crandDuration2 = getRandNumber()
const crandDuration3 = getRandNumber()
const crandDuration4 = getRandNumber()
const crandDuration5 = getRandNumber()
const crandDuration6 = getRandNumber()
const crandDuration7 = getRandNumber()
const crandDuration8 = getRandNumber()
const crandDuration9 = getRandNumber()
const crandDuration10 = getRandNumber()

const cswitch1 = crandDuration - 100
const cswitch2 = crandDuration + crandDuration2 - 100
const cswitch3 = crandDuration + crandDuration2 + crandDuration3 - 100
const cswitch4 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 - 100
const cswitch5 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 - 100
const cswitch6 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 + crandDuration6 - 100
const cswitch7 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 + crandDuration6 + crandDuration7 - 100
const cswitch8 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 + crandDuration6 + crandDuration7 + crandDuration8 - 100
const cswitch9 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 + crandDuration6 + crandDuration7 + crandDuration8 + crandDuration9 - 100
const cswitch10 = crandDuration + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 + crandDuration6 + crandDuration7 + crandDuration8 + crandDuration9 + crandDuration10 - 100


function cageMove() {
  setTimeout(function() {

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
    moveCage(randTurn2, 16440, crandDuration5)
    switchSkier1(cswitch6, 'cage')
    moveCage(randTurn1, 19255, crandDuration6)
    switchSkier2(cswitch7, 'cage')
    moveCage(randTurn2, 21870, crandDuration7)
    switchSkier1(cswitch8, 'cage')
    moveCage(randTurn1, 24685, crandDuration8)
    switchSkier2(cswitch9, 'cage')
    moveCage(randTurn2, 27600, crandDuration9)
    switchSkier1(cswitch10, 'cage')
    moveCage(950, 30000, crandDuration10)

  }, 4400)
}
