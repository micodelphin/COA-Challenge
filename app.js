// Get the modal
var modal = document.querySelector(".modal");

// Get the image and insert it inside the modal
var modalImage = document.getElementById("modalImage");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get all .info elements
var infoElements = document.querySelectorAll(".info");

// When the user clicks on an image, open the modal
var cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
  var img = card.querySelector("img");
  img.onclick = function () {
    modal.style.display = "block";
    modalImage.src = this.src;
    modalImage.style.animation = "zoomIn 0.3s";

    // Hide all .info elements
    infoElements.forEach(function (info) {
      info.classList.add("hidden");
    });
  };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  closeModal();
};

// When the user clicks anywhere outside the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Function to close the modal with zoom-out animation
function closeModal() {
  modalImage.style.animation = "zoomOut 0.3s";
  setTimeout(() => {
    modal.style.display = "none";

    // Show all .info elements
    infoElements.forEach(function (info) {
      info.classList.remove("hidden");
    });
  }, 300); // Wait for the zoom-out animation to finish
}
