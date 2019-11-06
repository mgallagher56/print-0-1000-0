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
    },3500)
    let marcTime = getMarcTotalTime()
    setScrollTime(marcTime)
    marcMove()
    vaderMove()
    cageMove()
    kermitMove()
})