// how tf do i get the cart information from here yo and how do i make a server like wtf


const cartProducts = [{
    name: 'jumper',
    image: 'images/jumper.jpg',
    price: 4000,
    quantity: 3
}, {
    name: 'tshirt',
    image: 'images/tshirt.jpg',
    price: 3000,
    quantity: 1
}];

// const cartProducts = cart;


let basketPrice = 0;

let cartProductsHTML = '';

cartProducts.forEach((product) => {
    cartProductsHTML += `
        <div class="basketItem">
            <div class="item">
                <img src="${product.image}" alt="${product.name}" class="itemIMG">
                <div class="itemInfo">
                    <div>${product.name}</div>
                    <div>£${product.price / 100}</div>
                </div>
            </div>

            <div class="basketItemInformation">
                <div>Price: £${product.price / 100}</div>
                <div> Quanitity: ${product.quantity}</div>
                <div>Total: £${(product.price * product.quantity) / 100} </div>
            </div>
        </div>
     `;

    
    basketPrice += product.price * product.quantity
});

let purchaseOptionsHTML = '';

let postage = 1000


purchaseOptionsHTML += `
    <h3>Purchase Options</h3>
    <div class="basketPurchaseDiv">
        <div>
            basket price = £${basketPrice / 100}
        </div>
        <div>
            postage = £${postage / 100}
        </div>
        <div>
            total price = £${(basketPrice + postage)/100}
        </div>
        <div>
            <button>Checkout</button>
        </div>
    </div>

`;



document.querySelector('.js-basketItem').innerHTML = cartProductsHTML;

document.querySelector('.js-rightDiv').innerHTML = purchaseOptionsHTML;