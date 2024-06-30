// const product = [
   
//     {
//         id: 0,
//         image: 'image/im3.jpg',
//         title: 'iphone15',
//         price: 200.00,
//     },
//     {
//         id: 1,
//         image: 'image/im6.png',
//         title: 'iphone15',
//         price: 200.00,
//     },
//     {
//         id: 2,
//         image: 'image/im3.jpg',
//         title: 'iphone15',
//         price: 200.00,
//     },
//     {
//         id: 3,
//         image: 'image/im4.jpg',
//         title: 'iphone15',
//         price: 200.00,
//     }
// ];

const product = [
    {
        id: 0,
        image: 'image/im1.avif',
        title: 'Galaxy S23 FE',
        price: 52000.00,
    },
    {
        id: 1,
        image: 'image/im6.png',
        title: 'iphone15 Max',
        price: 85000.00,
    },
    {
        id: 2,
        image: 'image/im3.jpg',
        title: 'SAMSUNG S24 5g',
        price: 55000.00,
    },
    {
        id: 3,
        image: 'image/im4.jpg',
        title: 'Motorola Edge Pro 5g',
        price: 20000.00,
    },

    {
        id: 0,
        image: 'image/im1.avif',
        title: 'Galaxy S23 FE',
        price: 52000.00,
    },
    {
        id: 1,
        image: 'image/im6.png',
        title: 'iphone15 Max',
        price: 85000.00,
    },
    {
        id: 2,
        image: 'image/im3.jpg',
        title: 'SAMSUNG S24 5g',
        price: 55000.00,
    },
    {
        id: 3,
        image: 'image/im4.jpg',
        title: 'Motorola Edge Pro 5g',
        price: 20000.00,
    },
    
];





const categories = [...new Set(product.map((item) => item.title))].map(title => product.find(item => item.title === title));
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    const { image, title, price } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$${price.toFixed(2)}</h2>
                <button onclick='addToCart(${i++})'>Add to Cart</button>
            </div>
        </div>
    `;
}).join('');

var cart = [];

function addToCart(a) {
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;

    if (cart.length === 0) {
        document.getElementById('cartitem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$0.00";
    } else {
        document.getElementById('cartitem').innerHTML = cart.map((item) => {
            let { image, title, price } = item;
            total += price;

            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}' alt='${title}'>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$${price.toFixed(2)}</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>
            `;
        }).join('');
        document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
    }
}
