(function() {
	'use strict';

	let modal = document.querySelector('#modal');
	let modalCloseIcon = document.querySelector('#modal-close');
	let productItemList = document.querySelectorAll('.products-list li');

	function closeModal() {
		console.log('fecha');
		// modal.classList.add('modal-closed');
		modal.classList.remove('modal-opened');
	}

	function openModal() {
		console.log('abre');
		// modal.classList.remove('modal-closed');
		modal.classList.add('modal-opened');
	}

	for (var i = productItemList.length - 1; i >= 0; i--) {
		productItemList[i].addEventListener('click', openModal);
	}

	modalCloseIcon.addEventListener('click', closeModal);

})();
