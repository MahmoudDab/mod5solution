// Sample menu items
const menuItems = [
  { name: 'Pizza', price: 10.99 },
  // Add more menu items as needed
];

const cartItems = [];

const cartTotalElement = document.getElementById('cart-total');
const cartListElement = document.querySelector('.cart-items');

// Function to update the cart
function updateCart() {
  cartListElement.innerHTML = '';
  let total = 0;
  for (const item of cartItems) {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartListElement.appendChild(listItem);
      total += item.price;
  }
  cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

// Function to add an item to the cart
function addToCart(item) {
  cartItems.push(item);
  updateCart();
}

// Event listener for Add to Cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
      addToCart(menuItems[index]);
  });
});

// Event listener for Checkout button
const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', () => {
  alert('Thank you for your order!'); // In a real system, this would initiate payment processing.
});

// Initial cart update
updateCart();
