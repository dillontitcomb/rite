import React from 'react';

const scriptURL =
	'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
if (window.ShopifyBuy) {
	if (window.ShopifyBuy.UI) {
		ShopifyBuyInit();
	} else {
		loadScript();
	}
} else {
	loadScript();
}

function loadScript() {
	var script = document.createElement('script');
	script.async = true;
	script.src = scriptURL;
	(
		document.getElementsByTagName('head')[0] ||
		document.getElementsByTagName('body')[0]
	).appendChild(script);
	script.onload = ShopifyBuyInit;
}

function ShopifyBuyInit() {
	var client = window.ShopifyBuy.buildClient({
		domain: 'rite-editions.myshopify.com',
		storefrontAccessToken: '17fe85c2c6898e7ed7b9af8bc9c90a7e',
	});
	window.ShopifyBuy.UI.onReady(client).then(function (ui) {
		ui.createComponent('collection', {
			id: '233025470619',
			node: document.getElementById('collection-component-1606865956157'),
			moneyFormat: '%24%7B%7Bamount%7D%7D',
			options: {
				product: {
					styles: {
						product: {
							'@media (min-width: 601px)': {
								'max-width': 'calc(25% - 20px)',
								'margin-left': '20px',
								'margin-bottom': '50px',
								width: 'calc(25% - 20px)',
							},
							img: {
								height: 'calc(100% - 15px)',
								position: 'absolute',
								left: '0',
								right: '0',
								top: '0',
							},
							imgWrapper: {
								'padding-top': 'calc(75% + 15px)',
								position: 'relative',
								height: '0',
							},
						},
					},
					text: {
						button: 'Add to cart',
					},
				},
				productSet: {
					styles: {
						products: {
							'@media (min-width: 601px)': {
								'margin-left': '-20px',
							},
						},
					},
				},
				modalProduct: {
					contents: {
						img: false,
						imgWithCarousel: true,
						button: false,
						buttonWithQuantity: true,
					},
					styles: {
						product: {
							'@media (min-width: 601px)': {
								'max-width': '100%',
								'margin-left': '0px',
								'margin-bottom': '0px',
							},
						},
					},
					text: {
						button: 'Add to cart',
					},
				},
				cart: {
					text: {
						total: 'Subtotal',
						button: 'Checkout',
					},
				},
			},
		});
	});
}
const Shop = () => {
	return <div id='collection-component-1606865956157'></div>;
};

export default Shop;
