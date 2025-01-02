// Select DOM elements
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const cartCount = document.createElement('span');
const cartIcon = document.querySelector('.cart-icon');
const cartText = document.querySelector('.cart p');
const backToTop = document.querySelector('.footer-title');


let cartItems = 0;

// Search functionality
searchIcon.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
    searchInput.value = ''; // Clear the input after search
  } else {
    alert('Please enter a search term.');
  }
});
// Add a cart counter
cartCount.classList.add('cart-count');
cartCount.textContent = '0';
cartIcon.parentNode.appendChild(cartCount);
// Add item to cart
cartIcon.addEventListener('click', () => {
  cartItems++;
  cartCount.textContent = cartItems;
  cartText.textContent = `Cart (${cartItems})`;
  alert(`Added an item to the cart. Total items: ${cartItems}`);
});

// Smooth scroll to top
backToTop.addEventListener('click', (e) => {

  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Highlight links on hover
const navLinks = document.querySelectorAll('.links a');
navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#febd68';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#fff';
  });
});

// Shop now button interactions
const shopNowButtons = document.querySelectorAll('.shop-link a');
shopNowButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
   
    alert('Redirecting to the shop now page.');
  });
});