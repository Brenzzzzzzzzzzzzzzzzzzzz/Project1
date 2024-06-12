const products = [
    { price: 3250000, image: 'LOGO/product/A.png', title: 'Lebron XXi akoya EP' },
    { price: 1250000, image: 'LOGO/MEN/air-max-90-shoes-0MB5rJ.png', title: 'air max 90' },
    { price: 2225000, image: 'LOGO/MEN/air-max-1-shoes-nVDKqc.png', title: 'air max 1' },
    { price: 1999000, image: 'LOGO/MEN/air-force-1-07-shoes-0XGfD7.png', title: 'air force 1' },
    { price: 3100000, image: 'LOGO/MEN/air-force-1-07-shoes-RgcF1Q.png', title: 'air force 1-07' },
    { price: 3100000, image: 'LOGO/MEN/full-force-low-shoes-ZchLRn.png', title: 'air force 1-07' },
    { price: 3100000, image: 'LOGO/MEN/invincible-3-road-running-shoes-jkhK7v.png', title: 'air force 1-07' },
    { price: 3100000, image: 'LOGO/MEN/invincible3.png', title: 'air force 1-07' },
    { price: 3100000, image: 'LOGO/MEN/invincible.png', title:'air force 1-07' },
];

const productContainer = document.getElementById('productContainer');


document.head.innerHTML += `
<style>
    .product-item {
        margin-bottom: 80px;
    }
    .button {
        width: 180px;
        height: 40px;
        background-image: linear-gradient(rgb(214, 202, 254), rgb(158, 129, 254));
        border: none;
        border-radius: 50px;
        color: rgb(255, 255, 255);
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        cursor: pointer;
        box-shadow: 1px 3px 0px rgb(139, 113, 255);
        transition-duration: .3s;
      }
      
      .cartIcon {
        width: 14px;
        height: fit-content;
      }
      
      .cartIcon path {
        fill: white;
      }
      
      .button:active {
        transform: translate(2px ,0px);
        box-shadow: 0px 1px 0px rgb(139, 113, 255);
        padding-bottom: 1px;
      }
      
</style>
`;

products.forEach((product) => {
    const productItem = document.createElement('div');
    productItem.classList.add('col-md-4', 'product-item');

    const productHTML = `
        <img src="${product.image}" alt="Produk" style="max-width: 100%; height: auto;">
        <h4 style="font-family: 'futura', sans-serif;">${product.title}</h4>
        <p> ${formatPrice(product.price)}</p>
        <button class="button" data-price="${product.price}">
            Shop now
            <svg class="cartIcon" viewBox="0 0 576 512">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
            </svg>
        </button>
    `;

    function formatPrice(price) {
        return `Rp ${price.toLocaleString('id-ID')}`;
    }

    productItem.innerHTML = productHTML;
    productContainer.appendChild(productItem);
});



const addToCartButtons = document.querySelectorAll('.button'); // Ganti .add-to-cart menjadi .button

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const price = parseInt(button.getAttribute('data-price'));
        cart.push({ price });
        cartTotal += price;

        updateCartTotal();
        updateCartItemCount();
        alert('TerimahKasih Barang anda sudah di Keranjang!');
    });
});


const cart = [];
let cartTotal = 0;
const cartItemCountElement = document.getElementById('cartItemCount');
const cartLinkElement = document.getElementById('cartLink');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const price = parseInt(button.getAttribute('data-price'));
        cart.push({ price });
        cartTotal += price;

        updateCartTotal();
        updateCartItemCount();
        alert('Mohon di tunggu!');
    });
});

function updateCartTotal() {
    
    console.log('Total Keranjang: Rp', cartTotal.toLocaleString('id-ID'));
}

function updateCartItemCount() {
  
    cartItemCountElement.textContent = cart.length;
  
}


const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

priceRange.addEventListener('input', () => {
    priceValue.textContent = `Rp${priceRange.value}`;
});

