const Order = require("../models/order");

class OrderService {
    async createOrder({ products, username, orderId }) {
        const totalPrice = products.reduce((acc, p) => acc + (p.price || 0), 0);

        const newOrder = new Order({
            products: products.map(p => p._id || p),
            user: username,
            totalPrice
        });

        await newOrder.save();

        return newOrder;
    }
}

module.exports = OrderService;