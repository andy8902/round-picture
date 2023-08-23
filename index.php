<!DOCTYPE html>
<html>
<head>
    <title>Tomar Foto con Webcam</title>
    <style>
        #video {
            width: 100%;
            max-width: 640px;
            /* transform: scaleX(-1); // Voltear horizontalmente para simular espejo */
            /* border: 1px solid black;
            position relative; */
        }

        /* #video::before {
            content: "";
            position: absolute;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: rgba(30, 30, 30, 0.7);
        }

        #video::before,
        #video::after {
            content: "";
            position: absolute;
            height: 100%;
            width: 3px;
            background-color: rgba(30, 30, 30, 0.7);
        }

        #video::after {
            top: 0;
            left: 33.33%; 
        } 
        #overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }*/
    </style>
</head>
<body>
    <video id="video" autoplay></video>
    <button id="capture">Tomar Foto</button>
    <canvas id="canvas" style="display: inline;"></canvas>
    <script src="script.js"></script>
</body>
</html>