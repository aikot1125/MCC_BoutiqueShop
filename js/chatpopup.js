let chatPopup = document.querySelector('.chat-popup');
let openChatForm = document.querySelector('.open-button');
let closeChatForm = document.querySelector('.close-button');


openChatForm.addEventListener('click', function() {
    chatPopup.classList.add('open-form');
})

closeChatForm.addEventListener('click', function() {
    chatPopup.classList.remove('open-form');
})