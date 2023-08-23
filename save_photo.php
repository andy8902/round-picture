<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["photo"])) {
    $targetDir = "uploads/";
    $targetFile = $targetDir . "cropped_photo.jpg"; // Nombre del archivo

    if (file_exists($targetDir . "cropped_photo.jpg")) {
        unlink($targetDir . "cropped_photo.jpg");
    }
    $sourceImage = imagecreatefromjpeg($_FILES["photo"]["tmp_name"]);
    $croppedImage = imagecreatetruecolor(150, 150); // Tamaño del círculo recortado
    $white = imagecolorallocate($croppedImage, 255, 255, 255);
    imagefill($croppedImage, 0, 0, $white);

    $radius = 75; // Radio del círculo
    imagecopyresampled($croppedImage, $sourceImage, 0, 0, 0, 0, 150, 150, $radius * 2, $radius * 2);

    imagejpeg($croppedImage, $targetFile); // Guardar la imagen

    imagedestroy($sourceImage);
    imagedestroy($croppedImage);

    echo "Foto guardada en: " . $targetFile;
} else {
    echo "Acceso no válido.";
}
?>

