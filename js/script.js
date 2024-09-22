document.addEventListener("DOMContentLoaded", () => {
    const workshopCards = document.querySelectorAll(".workshop-card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalCertificate = document.getElementById("modal-certificate");
    const modalSchool = document.getElementById("modal-school");
    const modalSpeaker = document.getElementById("modal-speaker");
    const modalRoom = document.getElementById("modal-room");
    const modalTime = document.getElementById("modal-time");
    const closeModal = document.getElementById("close-modal");

    workshopCards.forEach(card => {
        card.addEventListener("click", () => {
            modalTitle.textContent = card.getAttribute("data-title");
            modalDescription.textContent = card.getAttribute("data-description");
            modalCertificate.textContent = card.getAttribute("data-certificate");
            modalSchool.textContent = card.getAttribute("data-school");
            modalSpeaker.textContent = card.getAttribute("data-speaker");
            modalRoom.textContent = card.getAttribute("data-room");
            modalTime.textContent = card.getAttribute("data-time");
            modal.style.display = "flex"; // Show the modal
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none"; // Hide the modal
    });

    // Close modal on outside click
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal
        }
    });
});
