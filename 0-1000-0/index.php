<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Counting up and down aimlessly">
    <title>0-1000-0</title>
    <link rel="shortcut icon" href="app/img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="app/css/styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="app/js/main.js" defer></script>
    <script src="app/js/marcSki.js" defer></script>
    <script src="app/js/vader.js" defer></script>
    <script src="app/js/cage.js" defer></script>
    <script src="app/js/kermit.js" defer></script>
</head>

<body class="normal">
<audio id="mario" src="app/sound/marioStart.mp3"></audio>
<audio id="race" src="app/sound/race.mp3"></audio>
<audio id="cheer" src="app/sound/cheer.mp3"></audio>
<audio id="marcWin" src="app/sound/marc.mp3"></audio>
<audio id="vaderWin" src="app/sound/vader.mp3"></audio>
<audio id="kermitWin" src="app/sound/kermit.mp3"></audio>
<audio id="cageWin" src="app/sound/cage.mp3"></audio>


<div class="overlay">
    <div id="layer" class="layer">
        <img src="app/img/skier.png" id="skier" class="hidden">
        <img src="app/img/vader.png" id="vader" class="hidden">
        <img src="app/img/cage.png" id="cage" class="hidden">
        <img src="app/img/kermit.png" id="kermit" class="hidden">
        <div id="banner" class="hidden"></div>

        <div id="text">
            <header>
                <h1>Why Am I Doing This?</h1>
                <p class="subTitle">A MVP Story</p>
                <button name="play" id="button">Send Marc Skiing</button>
            </header>
            <H2>Print the numbers 0-1000-0 (every number in between), with 1000 only once and each number on a new line
                in:</H2>
            <ul>
                <li>The fewest PHP characters you can</li>
                <li>A unique way that no other team members have used</li>
            </ul>
            <div class="container">
                <div class="left">
                    <p>Exploded string = array(5) { [0]=> string(3) "Why" [1]=> string(2) "Am" [2]=> string(1) "I" [3]=>
                        string(5) "Doing" [4]=> string(5) "This?" }</p>
                    <p>String length = 20</p>
                    <p>Number of items in array = 5</p>
                </div>
                <div class="right">
                    <p>Multiplier = 205 (items in array concatenated on to String length)</p>
                    <p>Multiplier * items in Array = 1025</p>
                    <p> - Items in array squared = 25</p>
                    <p>= 1000</p>
                </div>
            </div>
        </div>
        <img id="finish" class="hidden" src="app/img/finish.png">
        <div id="output"
        <?php
        $array = [];
        $W = 'W';
        $h = 'h';
        $y = 'y';
        $A = 'A';
        $m = 'm';
        $I = 'I';
        $D = 'D';
        $o = 'o';
        $i = 'i';
        $n = 'n';
        $g = 'g';
        $T = 'T';
        $s = 's';


        function why($W, $h, $y, $A, $m, $I, $D, $o, $i, $n, $g, $T, $s)
        {
            $thing = $W . $h . $y . ' ' . $A . $m . ' ' . $I . ' ' . $D . $o . $i . $n . $g . ' ' . $T . $h . $i . $s . '?';
            return $thing;
        }

        $thing = why($W, $h, $y, $A, $m, $I, $D, $o, $i, $n, $g, $T, $s);

        $array = explode(' ', $thing);


        $stringLength = strlen($thing);
        $arrayItems = count($array);

        $multiplier = $stringLength . $arrayItems;


        $lengthSquare = count($array) * count($array);
        $thousand = count($array) * $multiplier - $lengthSquare;

        $zero = $lengthSquare - $lengthSquare;
        $newArray = [];

        $space = ' ';
        for ($e = $zero; $e <= $thousand; $e++) {
            array_push($newArray, $e);
            echo $space . $e . ' ';
            foreach ($array as $item) {
                echo $item . ' ';
            };
            if ($e < 185 || ($e > 370 && $e < 555) || ($e > 740 && $e < 925)) {
                $space = $space . '.' . " ";
            } else {
                $space = rtrim($space, ' ');
                $space = rtrim($space, '.');
            }
            echo '<br>';
        }

        $newArray = array_reverse($newArray);

        unset($newArray[$zero]);
        foreach ($newArray as $items) {
            echo $space . "$items ";
            foreach ($array as $item) {
                echo $item . ' ';
            };
            if (($items < 156) || ($items > 339 && $items < 524) || ($items > 707 && $items < 892)) {
                $space = $space . '.' . " ";
            } else {
                $space = rtrim($space, ' ');
                $space = rtrim($space, '.');
            }
            echo '<br>';
        }
        ?>
    </div>
</div>
</body>
