(function() {
	'use strict';
	let menuIcon = document.querySelector('#menu-icon');
	let menu = document.querySelector('#categories-menu');
	let showWithMenu = document.querySelectorAll('.show-with-menu');
	let hideWithMenu = document.querySelectorAll('.hide-with-menu');

	function toggleMenuIcon(menuOpen) {
		if(menuOpen) {
			menuIcon.classList.add('fa-times');
			menuIcon.classList.remove('fa-bars');
		} else {
			menuIcon.classList.remove('fa-times');
			menuIcon.classList.add('fa-bars');
		}
	}

	function showHideElements(menuOpen) {
		if(menuOpen) {
			for (var i = showWithMenu.length - 1; i >= 0; i--) {
				showWithMenu[i].classList.remove('hidden');
			}

			for (var i = hideWithMenu.length - 1; i >= 0; i--) {
				hideWithMenu[i].classList.add('hidden');
			}
		} else {
			for (var i = showWithMenu.length - 1; i >= 0; i--) {
				showWithMenu[i].classList.add('hidden');
			}
			for (var i = hideWithMenu.length - 1; i >= 0; i--) {
				hideWithMenu[i].classList.remove('hidden');
			}
		}
	}

	function showHideMenu() {
		menu.classList.toggle('show-menu');
		let menuOpen = menu.classList.contains('show-menu');
		toggleMenuIcon(menuOpen);
		showHideElements(menuOpen);
	}
	
	showHideElements(false);
	menuIcon.addEventListener("click", showHideMenu);
})();
