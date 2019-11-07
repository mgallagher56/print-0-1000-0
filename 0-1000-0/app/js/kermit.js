function moveKermit($left, $top, $duration=3000) {
    $('#kermit').animate({left: $left+'px', top: $top+'px', speed: 50000}, {
        duration: $duration,
        easing: 'linear'
    })
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


let kswitch1 = krandDuration-100
let kswitch2 = krandDuration + krandDuration2-100
let kswitch3 = krandDuration + krandDuration2 + krandDuration3-100
let kswitch4 = krandDuration + krandDuration2 + krandDuration3 + krandDuration4-100
let kswitch5 = krandDuration + krandDuration2 + krandDuration3 + krandDuration4 + krandDuration5-100
let kswitch6 = krandDuration + krandDuration2 + krandDuration3 + krandDuration4 + krandDuration5 + krandDuration6-100
let kswitch7 = krandDuration + krandDuration2 + krandDuration3 + krandDuration4 + krandDuration5 + krandDuration6 + krandDuration7-100
let kswitch8 = krandDuration + krandDuration2 + krandDuration3 + krandDuration4 + krandDuration5 + krandDuration6 + krandDuration7 + krandDuration8-100
let kswitch9 = krandDuration + krandDuration2 + krandDuration3 + krandDuration4 + krandDuration5 + krandDuration6 + krandDuration7 + krandDuration8 + krandDuration9-100
let kswitch10 = krandDuration + krandDuration2 + krandDuration3 + krandDuration4 + krandDuration5 + krandDuration6 + krandDuration7 + krandDuration8 + krandDuration9 + krandDuration10-100


function kermitMove() {
    setTimeout(function () {

        moveKermit(randTurn1, 2615, krandDuration)
        switchSkier2(kswitch1,'kermit')
        moveKermit(randTurn2, 5480, krandDuration1)
        switchSkier1(kswitch2,'kermit')
        moveKermit(randTurn1, 8095, krandDuration2)
        switchSkier2(kswitch3,'kermit')
        moveKermit(randTurn2, 10810, krandDuration3)
        switchSkier1(kswitch4,'kermit')
        moveKermit(randTurn1, 13625, krandDuration4)
        switchSkier2(kswitch5,'kermit')
        moveKermit(randTurn2,16440, krandDuration5)
        switchSkier1(kswitch6,'kermit')
        moveKermit(randTurn1,19255, krandDuration6)
        switchSkier2(kswitch7,'kermit')
        moveKermit(randTurn2,21870, krandDuration7)
        switchSkier1(kswitch8,'kermit')
        moveKermit(randTurn1,24685, krandDuration8)
        switchSkier2(kswitch9,'kermit')
        moveKermit(randTurn2,27600, krandDuration9)
        switchSkier1(kswitch10,'kermit')
        moveKermit(950,30000, krandDuration10)



    }, 4400)
}