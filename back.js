const products = [{
    name: 'jumper',
    image: 'images/jumper.jpg',
    price: 4000
}, {
    name: 'tshirt',
    image: 'images/tshirt.jpg',
    price: 3000
}, {
    name: 'socks',
    image: 'images/sock.jpeg',
    price: 800
}, {
    name: 'fleece',
    image: 'images/fleece.jpg',
    price: 5000
}];

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
        <div class="item">
                    
            <img src="${product.image}" alt="${product.name}" class="itemIMG">
            <div class="itemInfo">
                <div>${product.name}</div>
                <div>£${product.price / 100}</div>
                <div> <button class="buttonAdd js-addToCart" data-product-name="${product.name}">Add to cart <i class="fa fa-shopping-cart"></i></button> </div>
            </div>
        </div>
     `;

    
})


document.querySelector('.js-itemHolder').innerHTML = productsHTML;

document.querySelectorAll('.js-addToCart')
    .forEach((button) => {
        button.addEventListener('click', ()=> {
            const productName = button.dataset.productName;
            const productPrice = button.dataset.productPrice;
            const productImage = button.dataset.productImage;
            
            let matchingItem; 

            cart.forEach((item) => {
                if (productName == item.productName) {
                    matchingItem = item;
                }
            }); 

            if (matchingItem) {
                matchingItem.quantity += 1;


            } else {
                cart.push({
                    productName: productName,
                    productPrice: productPrice,
                    productImage: productImage,
                    quantity: 1
                });
            }

            let cartQuantity = 0;

            cart.forEach((item) => {

                cartQuantity+= item.quantity;

            });

            document.querySelector('.js-cartQuantity')
                .innerHTML = cartQuantity;

            


        });

    });
