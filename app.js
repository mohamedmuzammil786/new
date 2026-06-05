// Shoe Products Database with Real Images from Unsplash
const shoes = [
    {
        id: 1,
        name: 'Classic Running Pro',
        price: 129.99,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        rating: 4.5,
        reviews: 128,
        description: 'High-performance running shoe with advanced cushioning technology for maximum comfort during long runs.',
        features: ['Breathable mesh upper', 'Memory foam insoles', 'Durable rubber sole', 'Lightweight design']
    },
    {
        id: 2,
        name: 'Elegant Step Heels',
        price: 159.99,
        category: 'women',
        image: 'https://images.unsplash.com/photo-1597805212624-bc7d8f3da4a6?w=400&h=400&fit=crop',
        rating: 4.7,
        reviews: 95,
        description: 'Sophisticated heels perfect for formal occasions and evening events. Comfort meets elegance.',
        features: ['Premium leather', 'Cushioned heel pad', 'Anti-slip sole', 'Adjustable strap']
    },
    {
        id: 3,
        name: 'Bounce Kids Sneaker',
        price: 79.99,
        category: 'kids',
        image: 'https://images.unsplash.com/photo-1560343090-19c0bae08e38?w=400&h=400&fit=crop',
        rating: 4.6,
        reviews: 156,
        description: 'Colorful and durable sneakers designed specifically for active kids. Built for play and comfort.',
        features: ['Lightweight material', 'Velcro strap', 'Flexible sole', 'Toe protection']
    },
    {
        id: 4,
        name: 'Urban Explorer Boot',
        price: 189.99,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1543163521-9efcc06b9558?w=400&h=400&fit=crop',
        rating: 4.8,
        reviews: 87,
        description: 'Rugged outdoor boot perfect for hiking and urban exploration. Weather-resistant and durable.',
        features: ['Waterproof exterior', 'Ankle support', 'Treaded sole', 'Insulated lining']
    },
    {
        id: 5,
        name: 'Comfort Casual Flat',
        price: 89.99,
        category: 'women',
        image: 'https://images.unsplash.com/photo-1548526881-7612dc8af359?w=400&h=400&fit=crop',
        rating: 4.4,
        reviews: 142,
        description: 'Versatile flat shoe perfect for everyday wear. Comfortable for all-day use with stylish design.',
        features: ['Soft insole', 'Flexible design', 'Easy to clean', 'Available in multiple colors']
    },
    {
        id: 6,
        name: 'Neon Play Sneaker',
        price: 84.99,
        category: 'kids',
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop',
        rating: 4.5,
        reviews: 203,
        description: 'Bright and fun sneakers that kids love. Perfect for school, sports, and outdoor activities.',
        features: ['Vibrant colors', 'Washable material', 'Non-marking sole', 'Breathable mesh']
    },
    {
        id: 7,
        name: 'Professional Court Shoe',
        price: 139.99,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        rating: 4.6,
        reviews: 76,
        description: 'Premium court shoe for basketball and other indoor sports. Superior grip and support.',
        features: ['Ankle support strap', 'Non-slip sole', 'Breathable upper', 'Shock absorption']
    },
    {
        id: 8,
        name: 'Summer Sandal Bliss',
        price: 69.99,
        category: 'women',
        image: 'https://images.unsplash.com/photo-1608256343639-a63c69b90b20?w=400&h=400&fit=crop',
        rating: 4.3,
        reviews: 118,
        description: 'Comfortable summer sandals perfect for beach days and casual outings. Lightweight and stylish.',
        features: ['Adjustable straps', 'Cushioned footbed', 'Quick-dry material', 'Lightweight']
    },
    {
        id: 9,
        name: 'Adventure Trail Shoe',
        price: 149.99,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1574268565858-59b79519a69f?w=400&h=400&fit=crop',
        rating: 4.7,
        reviews: 92,
        description: 'Designed for trail running and hiking. Exceptional traction and stability on uneven terrain.',
        features: ['All-terrain grip', 'Protective toe cap', 'Breathable mesh', 'Reinforced heel']
    },
    {
        id: 10,
        name: 'Glam Evening Pump',
        price: 179.99,
        category: 'women',
        image: 'https://images.unsplash.com/photo-1600359755051-d61264a21b83?w=400&h=400&fit=crop',
        rating: 4.8,
        reviews: 104,
        description: 'Glamorous pump perfect for evening wear and special occasions. Style and comfort combined.',
        features: ['Premium material', 'Non-slip heel', 'Padded insole', 'Elegant design']
    },
    {
        id: 11,
        name: 'Junior Sports Shoe',
        price: 99.99,
        category: 'kids',
        image: 'https://images.unsplash.com/photo-1560343090-19c0bae08e38?w=400&h=400&fit=crop',
        rating: 4.6,
        reviews: 167,
        description: 'Performance shoe for young athletes. Provides support and comfort during sports activities.',
        features: ['Arch support', 'Cushioned sole', 'Durable construction', 'Adjustable fit']
    },
    {
        id: 12,
        name: 'Classic Canvas Slip-On',
        price: 59.99,
        category: 'kids',
        image: 'https://images.unsplash.com/photo-1548526881-7612dc8af359?w=400&h=400&fit=crop',
        rating: 4.4,
        reviews: 189,
        description: 'Simple and comfortable slip-on canvas shoe for everyday wear. Perfect for school.',
        features: ['Easy to put on', 'Canvas material', 'Comfortable fit', 'Easy to clean']
    }
];

let cart = [];
let currentProduct = null;
let orderNumber = null;

document.addEventListener('DOMContentLoaded', () => {
    displayProducts('all');
    setupEventListeners();
    loadCartFromStorage();
});

function displayProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    let filteredShoes = shoes;
    if (category !== 'all') {
        filteredShoes = shoes.filter(shoe => shoe.category === category);
    }
    filteredShoes.forEach(shoe => {
        const productCard = createProductCard(shoe);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(shoe) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${shoe.image}" alt="${shoe.name}" onerror="this.src='https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=${encodeURIComponent(shoe.name)}'" onclick="openProductDetail(${shoe.id})" style="cursor: pointer;">
        </div>
        <div class="product-content">
            <div class="product-category">${shoe.category}</div>
            <h3 class="product-name">${shoe.name}</h3>
            <div class="product-rating">
                <span class="stars">${getStarRating(shoe.rating)}</span>
                <span>(${shoe.reviews})</span>
            </div>
            <div class="product-price">$${shoe.price.toFixed(2)}</div>
            <button class="product-btn" onclick="openProductDetail(${shoe.id})">View Details</button>
        </div>
    `;
    return card;
}

function getStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) {
        stars += '☆';
    }
    return stars;
}

function setupEventListeners() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            displayProducts(filter);
        });
    });
    document.getElementById('cartBtn').addEventListener('click', openCart);
    window.addEventListener('click', function(event) {
        const cartModal = document.getElementById('cartModal');
        const productModal = document.getElementById('productModal');
        const checkoutModal = document.getElementById('checkoutModal');
        const successModal = document.getElementById('successModal');
        if (event.target === cartModal) closeCart();
        if (event.target === productModal) closeProductModal();
        if (event.target === checkoutModal) closeCheckout();
        if (event.target === successModal) closeSuccess();
    });
}

function openProductDetail(productId) {
    currentProduct = shoes.find(shoe => shoe.id === productId);
    if (!currentProduct) return;
    document.getElementById('detailImage').src = currentProduct.image;
    document.getElementById('detailImage').onerror = function() {
        this.src = 'https://via.placeholder.com/400x400/FF6B35/FFFFFF?text=' + encodeURIComponent(currentProduct.name);
    };
    document.getElementById('detailName').textContent = currentProduct.name;
    document.getElementById('detailPrice').textContent = `$${currentProduct.price.toFixed(2)}`;
    document.getElementById('detailDescription').textContent = currentProduct.description;
    document.getElementById('detailRating').innerHTML = getStarRating(currentProduct.rating);
    document.getElementById('detailReviews').textContent = `(${currentProduct.reviews} reviews)`;
    const featuresList = document.getElementById('detailFeatures');
    featuresList.innerHTML = '';
    currentProduct.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    document.getElementById('quantityInput').value = 1;
    document.getElementById('sizeSelect').value = '';
    document.getElementById('productModal').classList.add('show');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('show');
}

function increaseQuantity() {
    const input = document.getElementById('quantityInput');
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity() {
    const input = document.getElementById('quantityInput');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function addToCart() {
    if (!currentProduct) return;
    const size = document.getElementById('sizeSelect').value;
    const quantity = parseInt(document.getElementById('quantityInput').value);
    if (!size) {
        alert('Please select a size');
        return;
    }
    const cartItem = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        quantity: quantity,
        size: size,
        image: currentProduct.image
    };
    const existingItem = cart.find(item => item.id === cartItem.id && item.size === cartItem.size);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push(cartItem);
    }
    saveCartToStorage();
    updateCartCount();
    closeProductModal();
    alert(`${currentProduct.name} added to cart!`);
}

function openCart() {
    document.getElementById('cartModal').classList.add('show');
    displayCartItems();
    updateCartSummary();
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('show');
}

function displayCartItems() {
    const cartItemsDiv = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        return;
    }
    cartItemsDiv.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-details">Size: ${item.size}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(cartItemElement);
    });
}

function updateQuantity(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            removeFromCart(index);
        } else {
            saveCartToStorage();
            updateCartCount();
            displayCartItems();
            updateCartSummary();
        }
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartCount();
    displayCartItems();
    updateCartSummary();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
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
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    closeCart();
    document.getElementById('checkoutModal').classList.add('show');
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('show');
}

function generateReceipt(customerInfo) {
    const orderDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const orderTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    let receiptHTML = `<div class="receipt"><div class="receipt-header"><h1>🛍️ ShoeMart</h1><p>Order Receipt</p></div><div class="receipt-section"><h3>Order Information</h3><p><strong>Order Number:</strong> ${orderNumber}</p><p><strong>Order Date:</strong> ${orderDate} at ${orderTime}</p><p><strong>Status:</strong> <span style="color: #28a745; font-weight: bold;">✓ CONFIRMED</span></p></div><div class="receipt-section"><h3>Customer Information</h3><p><strong>Name:</strong> ${customerInfo.fullName}</p><p><strong>Email:</strong> ${customerInfo.email}</p><p><strong>Shipping Address:</strong><br>${customerInfo.address}<br>${customerInfo.city}, ${customerInfo.zipCode}</p></div><div class="receipt-section"><h3>Items Ordered</h3><table class="receipt-table"><thead><tr><th>Product</th><th>Size</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead><tbody>`;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        receiptHTML += `<tr><td>${item.name}</td><td>${item.size}</td><td>${item.quantity}</td><td>$${item.price.toFixed(2)}</td><td>$${itemTotal.toFixed(2)}</td></tr>`;
    });
    receiptHTML += `</tbody></table></div><div class="receipt-section"><div class="receipt-summary"><div class="summary-row"><span>Subtotal:</span><span>$${subtotal.toFixed(2)}</span></div><div class="summary-row"><span>Tax (8%):</span><span>$${tax.toFixed(2)}</span></div><div class="summary-row"><span>Shipping:</span><span>$${shipping.toFixed(2)}</span></div><div class="summary-row total"><span>TOTAL:</span><span>$${total.toFixed(2)}</span></div></div></div><div class="receipt-section"><h3>Payment Method</h3><p><strong>Card Number:</strong> **** **** **** ${customerInfo.cardNumber.slice(-4)}</p><p><strong>Payment Status:</strong> <span style="color: #28a745; font-weight: bold;">✓ PROCESSED</span></p></div><div class="receipt-footer"><p>Thank you for your purchase!</p><p>A confirmation email has been sent to ${customerInfo.email}</p><p style="font-size: 0.9rem; margin-top: 1rem; color: #666;">Expected Delivery: 5-7 business days</p></div></div>`;
    return receiptHTML;
}

function completeOrder(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zipCode').value;
    const cardNumber = document.getElementById('cardNumber').value;
    if (!fullName || !email || !address || !city || !zipCode || !cardNumber) {
        alert('Please fill in all fields');
        return;
    }
    orderNumber = 'ORD-' + Math.random().toString(9).substr(2, 8).toUpperCase();
    const customerInfo = { fullName, email, address, city, zipCode, cardNumber };
    const receiptHTML = generateReceipt(customerInfo);
    document.getElementById('receiptContent').innerHTML = receiptHTML;
    closeCheckout();
    cart = [];
    saveCartToStorage();
    updateCartCount();
    document.getElementById('successModal').classList.add('show');
    event.target.reset();
}

function printReceipt() {
    const receiptContent = document.getElementById('receiptContent').innerHTML;
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`<html><head><title>ShoeMart Order Receipt</title><style>body { font-family: Arial, sans-serif; margin: 20px; } .receipt { max-width: 700px; margin: 0 auto; } .receipt-header { text-align: center; margin-bottom: 20px; border-bottom: 3px solid #004E89; padding-bottom: 15px; } .receipt-header h1 { margin: 0; color: #004E89; font-size: 2em; } .receipt-section { margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px; } .receipt-section h3 { color: #004E89; margin-top: 0; } .receipt-table { width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.95em; } .receipt-table th { background-color: #004E89; color: white; padding: 10px; text-align: left; } .receipt-table td { padding: 8px; border-bottom: 1px solid #ddd; } .receipt-summary { background-color: white; padding: 15px; border: 2px solid #004E89; border-radius: 5px; } .summary-row { display: flex; justify-content: space-between; margin: 8px 0; font-size: 1.05em; } .summary-row.total { font-weight: bold; font-size: 1.3em; color: #FF6B35; border-top: 2px solid #ddd; padding-top: 10px; margin-top: 10px; } .receipt-footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #004E89; color: #666; }</style></head><body>${receiptContent}</body></html>`);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 250);
}

function downloadReceipt() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = (subtotal + 10 + tax).toFixed(2);
    let textContent = `\n╔═══════════════════════════════════════════════╗\n║             ShoeMart - Order Receipt          ║\n╚═══════════════════════════════════════════════╝\n\nOrder Number: ${orderNumber}\nOrder Date: ${new Date().toLocaleString()}\nStatus: ✓ CONFIRMED\n\n═══════════════════════════════════════════════\nITEMS ORDERED\n═══════════════════════════════════════════════\n`;
    cart.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        textContent += `\n${item.name}\n  Size: ${item.size} | Qty: ${item.quantity} x $${item.price.toFixed(2)} = $${itemTotal}`;
    });
    textContent += `\n\n═══════════════════════════════════════════════\nORDER SUMMARY\n═══════════════════════════════════════════════\nSubtotal: $${subtotal.toFixed(2)}\nTax (8%): $${tax.toFixed(2)}\nShipping: $10.00\n───────────────────────────────────────────────\nTOTAL: $${total}\n═══════════════════════════════════════════════\n\nThank you for your purchase!\nExpected Delivery: 5-7 business days\n`;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textContent));
    element.setAttribute('download', `Receipt-${orderNumber}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function closeSuccess() {
    document.getElementById('successModal').classList.remove('show');
}

function saveCartToStorage() {
    localStorage.setItem('shoeStoreCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('shoeStoreCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}