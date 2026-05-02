// Simple cart array
let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    alert(`Successfully added ${itemName} to your cart! \nTotal Items: ${cart.length}`);
}

function submitContact(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you ${name}! Your message has been received. Our team will contact you shortly.`);
    event.target.reset();
}
// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
