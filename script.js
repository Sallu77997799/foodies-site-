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
