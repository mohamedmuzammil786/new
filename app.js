const express = require('express');
const path = require('path');
const paymentRoutes = require('./routes/payment');
const imageRoutes = require('./routes/images');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/images', express.static('public/images'));

// Routes
app.use('/api/payment', paymentRoutes);
app.use('/api/images', imageRoutes);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
