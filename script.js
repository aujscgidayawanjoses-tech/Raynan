function playMusic() 
{
    document.getElementById("birthdayMusic").play();
}
function showLetter() {
    let letter = document.getElementById("letter");

    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";
    }
}

function showImage() {
    let image = document.getElementById("imageContainer");

    if (image.style.display === "block") {
        image.style.display = "none";
    } else {
        image.style.display = "block";
    }
}

function showVideos() {
    document.getElementById("videoSection").style.display = "block";
}

function changeVideo(videoFile) {
    const video = document.getElementById("mainVideo");

    video.src = videoFile;
    video.load();
    video.play();
}