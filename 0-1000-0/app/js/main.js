function getRandNumber($max = 3500, $min=3200) {
    return Math.floor(Math.random() * ($max - $min + 1) ) + $min
}

let randTurn1 = getRandNumber(1150,1050)
let randTurn2 = getRandNumber(-150,-50)

function switchSkier1($timeout, $characterString) {
    setTimeout(function () {
        document.getElementById($characterString).className = 'skier'
    }, $timeout)
}
function switchSkier2($timeout, $characterString) {
    setTimeout(function () {
        document.getElementById($characterString).className = 'skierSwitch'
    }, $timeout)
}

function getMarcTotalTime() {
    return parseInt(randDuration + randDuration1 + randDuration2 + randDuration3 + randDuration4 + randDuration5 + randDuration6 + randDuration7 + randDuration8 + randDuration9 + randDuration10)
}
function getCageTotalTime() {
    return parseInt(crandDuration + crandDuration1 + crandDuration2 + crandDuration3 + crandDuration4 + crandDuration5 + crandDuration6 + crandDuration7 + crandDuration8 + crandDuration9 + crandDuration10)
}
function getVaderTotalTime() {
    return parseInt(vrandDuration + vrandDuration1 + vrandDuration2 + vrandDuration3 + vrandDuration4 + vrandDuration5 + vrandDuration6 + vrandDuration7 + vrandDuration8 + vrandDuration9 + vrandDuration10)
}
function getKermitTotalTime() {
    return parseInt(krandDuration + krandDuration1 + krandDuration2 + krandDuration3 + krandDuration4 + krandDuration5 + krandDuration6 + krandDuration7 + krandDuration8 + krandDuration9 + krandDuration10)
}

document.getElementById('button').addEventListener('click',function (e) {
    e.preventDefault()
    document.getElementById('button').className = 'hidden'
    document.body.className = 'skiingbg'
    document.getElementById('layer').className = 'skiing'
    document.getElementById('text').className = 'hidden'
    document.getElementById('skier').className = 'skier'
    document.getElementById('vader').className = 'skier'
    document.getElementById('cage').className = 'skier'
    document.getElementById('kermit').className = 'skier'
    document.getElementById('finish').className = 'finish'
    document.getElementById("mario").play();
    setTimeout(function () {
        document.getElementById("race").play();
    },4000)
    setTimeout(function () {
        $("#skier, #vader, #kermit, #cage").stop()
        document.getElementById('finish').className = 'hidden'
        document.getElementById('output').className = 'hidden'
        document.getElementById('banner').className = 'banner'
        document.body.className = 'podium'
        document.getElementById("cheer").play();
    }, 41100)

    let marcTime = getMarcTotalTime()
    let cageTime= getCageTotalTime()
    let kermitTime = getKermitTotalTime()
    let vaderTime = getVaderTotalTime()

    function decideWinner(){
        if (marcTime < cageTime && marcTime < kermitTime && marcTime < vaderTime){
            setTimeout(function () {
                $("audio#marcWin")[0].play()
                $("#vader, #kermit, #cage").removeClass('skier')
                $("#vader, #kermit, #cage").addClass('hidden')
                document.getElementById("banner").innerHTML = "<h1>Marc is the champ!</h1>";
                $('#skier').animate({left: 400, top:0, speed: 1000})
                document.getElementById('skier').className = 'skier2'
            },41300)
            return marcTime
        } else if (cageTime < marcTime && cageTime < kermitTime && cageTime < vaderTime){
            setTimeout(function () {
                $("audio#cageWin")[0].play()
                $("#vader, #kermit, #skier").removeClass('skier')
                $("#vader, #kermit, #skier").addClass('hidden')
                document.getElementById("banner").innerHTML = "<h1>Nic Cage is the champ!</h1>";
                $('#cage').animate({left: 400, top:0, speed: 1000})
                document.getElementById('cage').className = 'skier2'
            },41300)
            return cageTime
        } else if (kermitTime < marcTime && kermitTime < cageTime && kermitTime < vaderTime){
            setTimeout(function () {
                $("audio#kermitWin")[0].play()
                $("#vader, #skier, #cage").removeClass('skier')
                $("#vader, #skier, #cage").addClass('hidden')
                document.getElementById("banner").innerHTML = "<h1>Kermit is the champ!</h1>";
                $('#kermit').animate({left: 400, top:0, speed: 1000})
                document.getElementById('kermit').className = 'skier2'
            },41300)
            return kermitTime
        } else {
            setTimeout(function () {
                $("audio#vaderWin")[0].play()
                $("#skier, #kermit, #cage").removeClass('skier')
                $("#skier, #kermit, #cage").addClass('hidden')
                document.getElementById("banner").innerHTML = "<h1>Darth Vader is the champ!</h1>";
                $('#vader').animate({left: 400, top:0, speed: 1000})
                document.getElementById('vader').className = 'skier2'
            },41300)
            return vaderTime
        }
    }
    let totalScrollTime = decideWinner()
    function setScrollTime($totalTime) {
        setTimeout(function () {
            $('html, body').animate({scrollTop: $(document).height()}, $totalTime, 'linear')
        }, 4600)
    }
    setScrollTime(totalScrollTime)
    marcMove()
    vaderMove()
    cageMove()
    kermitMove()
})

