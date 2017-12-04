function buildModalContent(potion) {

	let figure = document.createElement('figure');
	let description = document.createElement('aside');

	let image = document.createElement('img');
	image.src = 'assets/products/' + potion.image;
	
	let productName = document.createElement('h2');
	productName.innerHTML = potion.name;

	let effectTitle = document.createElement('h3');
	effectTitle.innerHTML = "Use/Effect:";

	let productEffect = document.createElement('p');
	productEffect.innerHTML = potion.effect;

	let ingredientsTitle = document.createElement('h3');
	ingredientsTitle.innerHTML = "Ingredients:"

	let productIngredientsList = document.createElement('ul');
	// productIngredientsList
	// for (let i = 0; i < ingredients.length; i++) {
	// 	let ingredient = ingredients[i];
	// }

	let priceTitle = document.createElement('h3');
	priceTitle.innerHTML = "Price:"

	let productPrice = document.createElement('p');
	productPrice.innerHTML = "$ " + potion.price;
	productPrice.classList.add('price-value')

	let cartBtn = document.createElement('button');
	cartBtn.classList.add('btn')
	cartBtn.classList.add('cart-btn')
	cartBtn.innerHTML = "add to cart"

	figure.appendChild(image);
	description.appendChild(productName);
	description.appendChild(effectTitle);
	description.appendChild(productEffect);
	description.appendChild(ingredientsTitle);
	description.appendChild(productIngredientsList);
	description.appendChild(priceTitle);
	description.appendChild(productPrice);
	description.appendChild(cartBtn);

	let content = document.querySelector('#modal-content');

	content.appendChild(figure);
	content.appendChild(description);

	console.log('build');
}

