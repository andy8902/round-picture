// Capturar la foto
const video = document.getElementById("video");
const overlay = document.getElementById("video");
const captureButton = document.getElementById("capture");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Acceder a la cámara web
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error("Error al acceder a la cámara:", error);
    });

//Dibujar lineas en la camara
// drawRuleOfThirds();

// Capturar la foto
captureButton.addEventListener("click", () => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(blob => {
        const image = new Image();
        image.src = URL.createObjectURL(blob);
        image.onload = () => {
            const newSize = 150; // Tamaño del círculo
            const centerX = image.width / 2;
            const centerY = image.height / 2;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(newSize / 2, newSize / 2, newSize / 2, 0, Math.PI * 2);
            ctx.clip();
            ctx.drawImage(image, centerX - newSize / 2, centerY - newSize / 2, newSize, newSize, 0, 0, newSize, newSize);
            
            // Resto del código para enviar la imagen al servidor
            // ...
        };
    }, "image/jpeg");
});


// function drawRuleOfThirds() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.strokeStyle = "rgba(30, 30, 30, 0.5)";
//     ctx.lineWidth = 2;

//     // Dibujar líneas de división personalizadas aquí
//     const divisions = 3; // Cambiar según la cantidad de líneas
//     const stepX = canvas.width / divisions;
//     const stepY = canvas.height / divisions;

//     for (let i = 1; i < divisions; i++) {
//         // Líneas verticales
//         ctx.beginPath();
//         ctx.moveTo(stepX * i, 0);
//         ctx.lineTo(stepX * i, canvas.height);
//         ctx.stroke();

//         // Líneas horizontales
//         ctx.beginPath();
//         ctx.moveTo(0, stepY * i);
//         ctx.lineTo(canvas.width, stepY * i);
//         ctx.stroke();
//     }

//     overlay.appendChild(canvas);
// }