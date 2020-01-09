const express = require('express')

const orderController = include('controllers/orderController');

module.exports = app => {
    app.post('/create/order', orderController.create);
}

