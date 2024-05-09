import React from 'react';
import { useNavigate } from "react-router-dom";
import './ManageEmployee.css';

const ManageEmployeePage = () => {

    const navigate = useNavigate();

    const goToManageChef = () => {
        navigate("/manage-chef");
    };

    const goToManageDeliveryGuy = () => {
        navigate("/manage-delivery-guy");
    }

    return (
        <div className="manage-container">
            <h1>Manage Employees</h1>
            <h2>Choose The Employee You Want To Manage</h2>
            <div className="manage-btns">
                <button className="manage-chef-btn" onClick={goToManageChef}>
                    Manage Chef
                </button>
                <button className="manage-deliveryguy-btn" onClick={goToManageDeliveryGuy}>
                    Manage Delivery Guy
                </button>
            </div>
        </div>
    );
};

export default ManageEmployeePage;