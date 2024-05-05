import React, { useState } from 'react';
import '../OrderHistory/OrderHistory.css';

const OrderHistory = () => {
    
    // Sample data for orders
    const ordersData = [
        {
            id: 19283,
            date: '2024-05-01',
            totalAmount: 24,
            products: [
                { name: 'Cheese Pizza', price: 10, quantity: 2 },
                { name: '6 Piece Garlic Knots', price: 4, quantity: 1 }
            ]
        },
        {
            id: 10823,
            date: '2024-05-16',
            totalAmount: 48,
            products: [
                { name: 'Spicy Chicken Sandwich', price: 7, quantity: 4 },
                { name: 'Large French Fries', price: 4, quantity: 3 },
                { name: 'Strawberry Lemonade', price: 2, quantity: 4 }
            ]
        }
    ];

    const [orders] = useState(ordersData);
    const [expandedRow, setExpandedRow] = useState(null);

    const toggleRow = (orderId) => {
        if (expandedRow === orderId) {
            setExpandedRow(null);
        } else {
            setExpandedRow(orderId);
        }
    };

    // Calculate total amount for each order
    const calculateTotalAmount = (order) => {
        let total = 0;
        order.products.forEach(product => {
            total += product.price * product.quantity;
        });
        return total;
    };

    return (
        <div className="tracking-container">
            <h1 className="order-heading">Order History</h1>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Total Amount ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <React.Fragment key={order.id}>
                            <tr onClick={() => toggleRow(order.id)}>
                                <td>{order.id}</td>
                                <td>{order.date}</td>
                                <td>{order.totalAmount}</td>
                            </tr>
                            {expandedRow === order.id && (
                                <tr className="expanded-row">
                                    <td colSpan="3">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Amount ($)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {order.products.map(product => (
                                                    <tr key={product.name}>
                                                        <td>{product.name}</td>
                                                        <td>{product.price}</td>
                                                        <td>{product.quantity}</td>
                                                        <td>{product.price * product.quantity}</td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <td colSpan="3"><strong>Total Amount:</strong></td>
                                                    <td><strong>{calculateTotalAmount(order)}</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;