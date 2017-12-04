(function() {
	'use strict';

	let products = document.querySelector("#products-list");

	for (let i = 0; i < dirtyPotions.length; i++) {

		let potion = dirtyPotions[i];

		let item = document.createElement('li');

		let figure = document.createElement('figure');

		let image = document.createElement('img');
		image.src = 'assets/products/' + potion.image;

		let caption = document.createElement('figcaption');

		let name = document.createElement('em');
		name.innerHTML = potion.name + " -";

		let price = document.createElement('span');
		price.innerHTML = " $" + potion.price;

		caption.appendChild(name);
		caption.appendChild(price);
		figure.appendChild(image);
		figure.appendChild(caption);
		item.appendChild(figure);
		products.appendChild(item);

		item.addEventListener('click', function() {
			buildModalContent(potion);
			openModal();
		});
	}

})();
