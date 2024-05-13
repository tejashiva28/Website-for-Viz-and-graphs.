
function openModal(imageUrl, captionText) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImage');
    var caption = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = imageUrl;
    caption.innerHTML = captionText;
}

// Close the modal when the close button or outside the modal is clicked
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
