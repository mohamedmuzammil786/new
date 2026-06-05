// Shoe Products Database
const shoes = [
    {
        id: 1,
        name: 'Classic Running Pro',
        price: 129.99,
        category: 'men',
        image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Running+Shoe',
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
        image: 'https://via.placeholder.com/300x300/004E89/FFFFFF?text=Heels',
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
        image: 'https://via.placeholder.com/300x300/28a745/FFFFFF?text=Kids+Sneaker',
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
        image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Combat+Boot',
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
        image: 'https://via.placeholder.com/300x300/004E89/FFFFFF?text=Casual+Flat',
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
        image: 'https://via.placeholder.com/300x300/28a745/FFFFFF?text=Neon+Sneaker',
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
        image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Court+Shoe',
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
        image: 'https://via.placeholder.com/300x300/004E89/FFFFFF?text=Summer+Sandal',
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
        image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Trail+Shoe',
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
        image: 'https://via.placeholder.com/300x300/004E89/FFFFFF?text=Evening+Pump',
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
        image: 'https://via.placeholder.com/300x300/28a745/FFFFFF?text=Sports+Shoe',
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
        image: 'https://via.placeholder.com/300x300/28a745/FFFFFF?text=Canvas+Slip-On',
        rating: 4.4,
        reviews: 189,
        description: 'Simple and comfortable slip-on canvas shoe for everyday wear. Perfect for school.',
        features: ['Easy to put on', 'Canvas material', 'Comfortable fit', 'Easy to clean']
    }
];

// Cart Array
let cart = [];
let currentProduct = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    displayProducts('all');
    setupEventListeners();
    loadCartFromStorage();
});

// Display Products
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

// Create Product Card
function createProductCard(shoe) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${shoe.image}" alt="${shoe.name}" onclick="openProductDetail(${shoe.id})">
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

// Get Star Rating HTML
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

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            displayProducts(filter);
        });
    });

    // Cart button
    document.getElementById('cartBtn').addEventListener('click', openCart);

    // Close modals on background click
    window.addEventListener('click', function(event) {
        const cartModal = document.getElementById('cartModal');
        const productModal = document.getElementById('productModal');
        const checkoutModal = document.getElementById('checkoutModal');
        const successModal = document.getElementById('successModal');

        if (event.target === cartModal) {
            closeCart();
        }
        if (event.target === productModal) {
            closeProductModal();
        }
        if (event.target === checkoutModal) {
            closeCheckout();
        }
        if (event.target === successModal) {
            closeSuccess();
        }
    });
}

// Open Product Detail
function openProductDetail(productId) {
    currentProduct = shoes.find(shoe => shoe.id === productId);
    if (!currentProduct) return;

    document.getElementById('detailImage').src = currentProduct.image;
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

// Close Product Detail
function closeProductModal() {
    document.getElementById('productModal').classList.remove('show');
}

// Increase Quantity
function increaseQuantity() {
    const input = document.getElementById('quantityInput');
    input.value = parseInt(input.value) + 1;
}

// Decrease Quantity
function decreaseQuantity() {
    const input = document.getElementById('quantityInput');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// Add to Cart
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

    // Check if item already exists in cart
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

// Open Cart
function openCart() {
    document.getElementById('cartModal').classList.add('show');
    displayCartItems();
    updateCartSummary();
}

// Close Cart
function closeCart() {
    document.getElementById('cartModal').classList.remove('show');
}

// Display Cart Items
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

// Update Quantity
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

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartCount();
    displayCartItems();
    updateCartSummary();
}

// Update Cart Count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

// Update Cart Summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 10 : 0;
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    closeCart();
    document.getElementById('checkoutModal').classList.add('show');
}

// Close Checkout
function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('show');
}

// Complete Order
function completeOrder(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zipCode').value;

    if (!fullName || !email || !address || !city || !zipCode) {
        alert('Please fill in all fields');
        return;
    }

    // Simulate order processing
    closeCheckout();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = (subtotal + 10).toFixed(2);
    
    cart = [];
    saveCartToStorage();
    updateCartCount();

    document.getElementById('successMessage').textContent = `Your order has been placed successfully! Total: $${total}. An order confirmation has been sent to ${email}.`;
    document.getElementById('successModal').classList.add('show');

    // Reset form
    event.target.reset();
}

// Close Success
function closeSuccess() {
    document.getElementById('successModal').classList.remove('show');
}

// Save Cart to Local Storage
function saveCartToStorage() {
    localStorage.setItem('shoeStoreCart', JSON.stringify(cart));
}

// Load Cart from Local Storage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('shoeStoreCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}