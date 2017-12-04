let modal = document.querySelector('#modal');
let modalCloseIcon = document.querySelector('#modal-close');
let content = document.querySelector('#modal-content');

function closeModal() {
	modal.classList.remove('modal-opened');
	content.innerHTML = ' ';
	console.log('close');

}

function openModal() {
	modal.classList.add('modal-opened');
	console.log('open');
}

closeModal();

modalCloseIcon.addEventListener('click', closeModal);