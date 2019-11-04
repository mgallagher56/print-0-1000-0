document.getElementById('button').addEventListener('click',function (e) {
    e.preventDefault()
    document.getElementById('button').className = 'hidden'
    document.body.className = 'skiingbg'
    document.getElementById('layer').className = 'skiing'
    document.getElementById('text').className = 'hidden'
    document.getElementById('skier').className = 'skier'

    setInterval(function () {

        $('img').animate({left: '1150px', top: '2615px', speed: '50000'}, {
            duration: 3000,
            easing: "linear"
        })

        setInterval(function () {
            document.getElementById('skier').className = 'skierSwitch'
        }, 2900)

            $('img').animate({left: '-100px', top: '5480px', speed: '50000'}, {
                duration: 3000,
                easing: "linear"
            })

        setInterval(function () {
            document.getElementById('skier').className = 'skier'
        }, 5800)

        $('img').animate({left: '1150px', top: '8095px', speed: '50000'}, {
            duration: 3000,
            easing: "linear"
        })

        setInterval(function () {
            document.getElementById('skier').className = 'skierSwitch'
        }, 8600)

        $('img').animate({left: '-100px', top: '10610', speed: '50000'}, {
            duration: 3000,
            easing: "linear"
        })

        setInterval(function () {
            document.getElementById('skier').className = 'skier'
        }, 11600)

        $('img').animate({left: '-100px', top: '13225', speed: '50000'}, {
            duration: 3000,
            easing: "linear"
        })

        setInterval(function () {
            document.getElementById('skier').className = 'skierSwitch'
        }, 14600)

        $('img').animate({left: '-100px', top: '15840', speed: '50000'}, {
            duration: 3000,
            easing: "linear"
        })

        setInterval(function () {
            document.getElementById('skier').className = 'skier'
        }, 17600)

        $('img').animate({left: '-100px', top: '16455', speed: '50000'}, {
            duration: 3000,
            easing: "linear"
        })

    }, 2000)

})

// $("img").stop(true)
// document.getElementById('skier').className = 'skier2'

/*0%{transform: translateY(0px) translateY(0px);}*/
/*8.33%{transform: translateY(1200px) translateY(1200px);  }*/
/*16.66%{top:5030px;}*/
/*25%{top:7545px;}*/
/*33.33%{top:10060px; }*/
/*41.66%{top:12575px; }*/
/*50%{top:15090px; }*/
/*58.33%{ top:17605px;}*/
/*66.66%{top:20120px; }*/
/*75%{top:22635px; }*/
/*83.33%{top:25150px; }*/
/*91.66%{top:32665px; }*/
/*100%{top:30180px; }*/