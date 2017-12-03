let modal = document.querySelector('#modal');
let modalCloseIcon = document.querySelector('#modal-close');

function closeModal() {
	modal.classList.remove('modal-opened');
}

function openModal() {
	modal.classList.add('modal-opened');
}

modalCloseIcon.addEventListener('click', closeModal);