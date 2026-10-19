function openModal(img) {
  var modal = document.getElementById("certModal");
  var modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}

// Optional: Close modal with ESC key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
