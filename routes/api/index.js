const router = require('express');
const bookRoutes = require('./books');

router.request('/books', bookRoutes);

module.exports = router;
