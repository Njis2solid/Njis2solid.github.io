let cartCount = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCartCount();
    });
});

function updateCartCount() {
    const cartLink = document.querySelector('.user-nav a[href*="Cart"]');
    cartLink.textContent = `Cart (${cartCount})`;
}
