function openImage(image) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImg.src = image.src;
}

function closeImage() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}