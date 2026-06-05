const shoes = [
  { id: 1, name: 'Classic Running Pro', price: 129.99, category: 'men', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', fallback: 'https://via.placeholder.com/400x400?text=Running+Pro', rating: 4.5, reviews: 128, description: 'High-performance running shoe', features: ['Breathable mesh', 'Memory foam', 'Lightweight'] },
  { id: 2, name: 'Elegant Step Heels', price: 159.99, category: 'women', image: 'https://images.unsplash.com/photo-1597805212624-bc7d8f3da4a6?w=400&h=400&fit=crop', fallback: 'https://via.placeholder.com/400x400?text=Elegant+Heels', rating: 4.7, reviews: 95, description: 'Sophisticated heels for formal events', features: ['Premium leather', 'Cushioned', 'Anti-slip'] },
  { id: 3, name: 'Bounce Kids Sneaker', price: 79.99, category: 'kids', image: 'https://images.unsplash.com/photo-1560343090-19c0bae08e38?w=400&h=400&fit=crop', fallback: 'https://via.placeholder.com/400x400?text=Kids+Sneaker', rating: 4.6, reviews: 156, description: 'Colorful and durable sneakers', features: ['Lightweight', 'Velcro strap', 'Flexible'] },
  { id: 4, name: 'Urban Explorer Boot', price: 189.99, category: 'men', image: 'https://images.unsplash.com/photo-1543163521-9efcc06b9558?w=400&h=400&fit=crop', fallback: 'https://via.placeholder.com/400x400?text=Explorer+Boot', rating: 4.8, reviews: 87, description: 'Rugged outdoor boot', features: ['Waterproof', 'Ankle support', 'Treaded'] },
  { id: 5, name: 'Comfort Casual Flat', price: 89.99, category: 'women', image: 'https://images.unsplash.com/photo-1548526881-7612dc8af359?w=400&h=400&fit=crop', fallback: 'https://via.placeholder.com/400x400?text=Casual+Flat', rating: 4.4, reviews: 142, description: 'Versatile flat for everyday wear', features: ['Soft insole', 'Flexible', 'Easy clean'] },
  { id: 6, name: 'Neon Play Sneaker', price: 84.99, category: 'kids', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop', fallback: 'https://via.placeholder.com/400x400?text=Neon+Play', rating: 4.5, reviews: 203, description: 'Bright fun sneakers for kids', features: ['Vibrant colors', 'Washable', 'Breathable'] },
  { id: 7, name: 'Sport Running Shoe', price: 119.99, category: 'men', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', fallback: 'https://via.placeholder.com/400x400?text=Sport+Shoe', rating: 4.6, reviews: 110, description: 'Perfect for athletic activities', features: ['Cushioned', 'Breathable', 'Durable'] },
  { id: 8, name: 'Summer Sandal', price: 69.99, category: 'women', image: 'https://images.unsplash.com/photo-1608256343639-a63c69b90b20?w=400&h=400&fit=crop', fallback: 'https://via.placeholder.com/400x400?text=Summer+Sandal', rating: 4.3, reviews: 118, description: 'Comfortable summer sandals', features: ['Adjustable', 'Light', 'Easy wear'] },
  { id: 9, name: 'School Shoe', price: 59.99, category: 'kids', image: 'https://images.unsplash.com/photo-1548526881-7612dc8af359?w=400&h=400&fit=crop', fallback: 'https://via.placeholder.com/400x400?text=School+Shoe', rating: 4.4, reviews: 189, description: 'Perfect for school wear', features: ['Durable', 'Comfortable', 'Stylish'] },
];

let cart = [], currentProduct = null, orderNumber = null;

document.addEventListener('DOMContentLoaded', () => {
  displayProducts('all');
  setupEventListeners();
  loadCartFromStorage();
});

function displayProducts(category) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  (category === 'all' ? shoes : shoes.filter(s => s.category === category)).forEach(shoe => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${shoe.image}" alt="${shoe.name}" onerror="this.src='${shoe.fallback}'" onclick="openProductDetail(${shoe.id})">
      <p class="category">${shoe.category}</p>
      <h3>${shoe.name}</h3>
      <div class="rating">${'★'.repeat(Math.floor(shoe.rating))} (${shoe.reviews})</div>
      <p class="price">$${shoe.price}</p>
      <button onclick="openProductDetail(${shoe.id})">View Details</button>
    `;
    grid.appendChild(card);
  });
}

function setupEventListeners() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      displayProducts(this.getAttribute('data-filter'));
    });
  });
  document.getElementById('cartBtn').addEventListener('click', openCart);
  window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) e.target.classList.remove('show');
  });
}

function openProductDetail(id) {
  currentProduct = shoes.find(s => s.id === id);
  if (!currentProduct) return;
  document.getElementById('detailImage').src = currentProduct.image;
  document.getElementById('detailImage').onerror = function() { this.src = currentProduct.fallback; };
  document.getElementById('detailName').textContent = currentProduct.name;
  document.getElementById('detailPrice').textContent = `$${currentProduct.price}`;
  document.getElementById('detailDescription').textContent = currentProduct.description;
  document.getElementById('detailRating').innerHTML = '★'.repeat(Math.floor(currentProduct.rating));
  document.getElementById('detailReviews').textContent = `(${currentProduct.reviews} reviews)`;
  const features = document.getElementById('detailFeatures');
  features.innerHTML = currentProduct.features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('quantityInput').value = 1;
  document.getElementById('sizeSelect').value = '';
  document.getElementById('productModal').classList.add('show');
}

function closeProductModal() { document.getElementById('productModal').classList.remove('show'); }
function increaseQuantity() { document.getElementById('quantityInput').value = parseInt(document.getElementById('quantityInput').value) + 1; }
function decreaseQuantity() { const inp = document.getElementById('quantityInput'); if (inp.value > 1) inp.value--; }

function addToCart() {
  if (!currentProduct) return;
  const size = document.getElementById('sizeSelect').value;
  const qty = parseInt(document.getElementById('quantityInput').value);
  if (!size) { alert('Select size'); return; }
  const item = { id: currentProduct.id, name: currentProduct.name, price: currentProduct.price, quantity: qty, size, image: currentProduct.image };
  const existing = cart.find(i => i.id === item.id && i.size === item.size);
  existing ? existing.quantity += qty : cart.push(item);
  saveCartToStorage();
  updateCartCount();
  closeProductModal();
  alert('Added to cart!');
}

function openCart() {
  document.getElementById('cartModal').classList.add('show');
  displayCartItems();
  updateCartSummary();
}

function closeCart() { document.getElementById('cartModal').classList.remove('show'); }

function displayCartItems() {
  const div = document.getElementById('cartItems');
  if (!cart.length) { div.innerHTML = '<p>Cart empty</p>'; return; }
  div.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <p>${item.name} - Size: ${item.size}</p>
      <div class="controls">
        <button onclick="updateQuantity(${i}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="updateQuantity(${i}, 1)">+</button>
      </div>
      <p>$${(item.price * item.quantity).toFixed(2)}</p>
      <button onclick="removeFromCart(${i})">Remove</button>
    </div>
  `).join('');
}

function updateQuantity(i, change) {
  cart[i].quantity += change;
  if (cart[i].quantity <= 0) removeFromCart(i);
  else { saveCartToStorage(); updateCartCount(); displayCartItems(); updateCartSummary(); }
}

function removeFromCart(i) {
  cart.splice(i, 1);
  saveCartToStorage();
  updateCartCount();
  displayCartItems();
  updateCartSummary();
}

function updateCartCount() {
  document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;
  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function checkout() {
  if (!cart.length) { alert('Cart empty'); return; }
  closeCart();
  document.getElementById('checkoutModal').classList.add('show');
}

function closeCheckout() { document.getElementById('checkoutModal').classList.remove('show'); }

function completeOrder(e) {
  e.preventDefault();
  const data = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    zipCode: document.getElementById('zipCode').value,
    method: document.querySelector('input[name="paymentMethod"]:checked').value
  };
  orderNumber = `ORD-${Date.now()}`;
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = (subtotal * 0.08).toFixed(2);
  const total = (subtotal + 10 + parseFloat(tax)).toFixed(2);
  const receipt = `
    <div class="receipt">
      <h3>Order #${orderNumber}</h3>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Customer:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Address:</strong> ${data.address}, ${data.city} ${data.zipCode}</p>
      <p><strong>Payment Method:</strong> ${data.method}</p>
      <hr>
      <table><tr><th>Item</th><th>Size</th><th>Qty</th><th>Price</th><th>Total</th></tr>
      ${cart.map(i => `<tr><td>${i.name}</td><td>${i.size}</td><td>${i.quantity}</td><td>$${i.price}</td><td>$${(i.price * i.quantity).toFixed(2)}</td></tr>`).join('')}
      </table>
      <hr>
      <p>Subtotal: $${subtotal.toFixed(2)}</p>
      <p>Shipping: $10.00</p>
      <p>Tax (8%): $${tax}</p>
      <p><strong>Total: $${total}</strong></p>
    </div>
  `;
  document.getElementById('receiptContent').innerHTML = receipt;
  closeCheckout();
  cart = [];
  saveCartToStorage();
  updateCartCount();
  document.getElementById('successModal').classList.add('show');
  e.target.reset();
}

function printReceipt() {
  const w = window.open('', '', 'width=800,height=600');
  w.document.write(document.getElementById('receiptContent').innerHTML);
  w.document.close();
  setTimeout(() => w.print(), 250);
}

function downloadReceipt() {
  const text = `ShoeMart Receipt\n${orderNumber}\n${new Date()}\n\n${cart.map(i => `${i.name} x${i.quantity} = $${(i.price*i.quantity).toFixed(2)}`).join('\n')}`;
  const a = document.createElement('a');
  a.href = 'data:text/plain,' + encodeURIComponent(text);
  a.download = `Receipt-${orderNumber}.txt`;
  a.click();
}

function closeSuccess() { document.getElementById('successModal').classList.remove('show'); }

function saveCartToStorage() { localStorage.setItem('cart', JSON.stringify(cart)); }
function loadCartFromStorage() { const saved = localStorage.getItem('cart'); if (saved) { cart = JSON.parse(saved); updateCartCount(); } }
