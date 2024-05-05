import React from 'react';
import './OrderTracker.css';

const OrderTracker = () => {
    // Dummy order status
    const orderStatus = [
        { step: 'Confirmed',  completed: true },
        { step: 'Cooking',  completed: false },
        { step: 'Out for Delivery',  completed: false },
        { step: 'Delivered', completed: false }
    ];

    return (
        <div className="tracking-container">
            <h1>Track Your Order</h1>
            <p>Order Number: 978</p>
            <div className="img">
                <img src="https://quickfixmalta.com/wp-content/uploads/2022/05/quickfixDeliveryBg-removebg-preview-1.png" alt="foodDelivery.png" />
            </div>
            <div className="progress-bar">
                {orderStatus.map((status, index) => (
                    <div
                        key={index}
                        className={`progress-step ${status.completed ? 'completed' : ''}`}
                    >
                        <div className="step-name">{status.step}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderTracker;