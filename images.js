// Product Images Database - Centralized image storage
const productImages = {
    1: {
        id: 1,
        name: 'Classic Running Pro',
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=150&fit=crop',
        altText: 'Classic Running Pro Shoe'
    },
    2: {
        id: 2,
        name: 'Elegant Step Heels',
        imageUrl: 'https://imgs.search.brave.com/gOv2x0PTaR6DF3lpjYB7_aD0uPI6ryPEpL8gRK9l2a4/rs:fit:400:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/Nzg0LzI1MC9zbWFs/bC9jbG9zZS11cC1v/Zi15ZWxsb3ctYm9v/dHMtd2l0aC1vcnRo/b3BlZGljLWluc29s/ZXMtaW5zaWRlLW9u/LWEtc2hvZS1zaGVs/Zi1waG90by5qcGc',
        thumbnailUrl: 'https://imgs.search.brave.com/gOv2x0PTaR6DF3lpjYB7_aD0uPI6ryPEpL8gRK9l2a4/rs:fit:150:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/Nzg0LzI1MC9zbWFs/bC9jbG9zZS11cC1v/Zi15ZWxsb3ctYm9v/dHMtd2l0aC1vcnRo/b3BlZGljLWluc29s/ZXMtaW5zaWRlLW9u/LWEtc2hvZS1zaGVs/Zi1waG90by5qcGc',
        altText: 'Elegant Step Heels'
    },
    3: {
        id: 3,
        name: 'Bounce Kids Sneaker',
        imageUrl: 'https://images.unsplash.com/photo-1560343090-19c0bae08e38?w=400&h=400&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1560343090-19c0bae08e38?w=150&h=150&fit=crop',
        altText: 'Bounce Kids Sneaker'
    },
    4: {
        id: 4,
        name: 'Urban Explorer Boot',
        imageUrl: 'https://images.unsplash.com/photo-1543163521-9efcc06b9558?w=400&h=400&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1543163521-9efcc06b9558?w=150&h=150&fit=crop',
        altText: 'Urban Explorer Boot'
    },
    5: {
        id: 5,
        name: 'Comfort Casual Flat',
        imageUrl: 'https://images.unsplash.com/photo-1548526881-7612dc8af359?w=400&h=400&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1548526881-7612dc8af359?w=150&h=150&fit=crop',
        altText: 'Comfort Casual Flat'
    },
    6: {
        id: 6,
        name: 'Neon Play Sneaker',
        imageUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=150&h=150&fit=crop',
        altText: 'Neon Play Sneaker'
    },
    7: {
        id: 7,
        name: 'Professional Court Shoe',
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=150&fit=crop',
        altText: 'Professional Court Shoe'
    },
    8: {
        id: 8,
        name: 'Summer Sandal Bliss',
        imageUrl: 'https://images.unsplash.com/photo-1608256343639-a63c69b90b20?w=400&h=400&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1608256343639-a63c69b90b20?w=150&h=150&fit=crop',
        altText: 'Summer Sandal Bliss'
    },
    9: {
        id: 9,
        name: 'Adventure Trail Shoe',
        imageUrl: 'https://images.unsplash.com/photo-1574268565858-59b79519a69f?w=400&h=400&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1574268565858-59b79519a69f?w=150&h=150&fit=crop',
        altText: 'Adventure Trail Shoe'
    },
    10: {
        id: 10,
        name: 'Glam Evening Pump',
        imageUrl: 'https://images.unsplash.com/photo-1600359755051-d61264a21b83?w=400&h=400&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1600359755051-d61264a21b83?w=150&h=150&fit=crop',
        altText: 'Glam Evening Pump'
    },
    11: {
        id: 11,
        name: 'Junior Sports Shoe',
        imageUrl: 'https://images.unsplash.com/photo-1560343090-19c0bae08e38?w=400&h=400&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1560343090-19c0bae08e38?w=150&h=150&fit=crop',
        altText: 'Junior Sports Shoe'
    },
    12: {
        id: 12,
        name: 'Classic Canvas Slip-On',
        imageUrl: 'https://images.unsplash.com/photo-1548526881-7612dc8af359?w=400&h=400&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1548526881-7612dc8af359?w=150&h=150&fit=crop',
        altText: 'Classic Canvas Slip-On'
    }
};

function getProductImage(productId) {
    return productImages[productId] || {
        imageUrl: 'https://via.placeholder.com/400x400/FF6B35/FFFFFF?text=Shoe+Image',
        thumbnailUrl: 'https://via.placeholder.com/150x150/FF6B35/FFFFFF?text=Shoe',
        altText: 'Product Image'
    };
}

function getAllProductImages() {
    return productImages;
}