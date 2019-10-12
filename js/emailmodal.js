var emailModal = document.querySelector(".email-modal");
var closeModalBtn = document.querySelector(".email-modal-closebtn");

function closeModal() {
    emailModal.style.display = "none";
}

closeModalBtn.addEventListener("click", closeModal);


setTimeout(() => {
    emailModal.style.display = "block";
}, 3000);