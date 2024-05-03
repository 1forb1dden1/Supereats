import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function MenuButton({ destination = "/MenuItem" }) {
    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate(destination);
    };

    return (
        <button onClick={handleMenuClick} className="menu-button">
            Check it out!
        </button>
    );
}

function LandingPage() {
    return (
        <div className="landing-page-container">
            <section className="promotion-section">
                <h1 className="title-large">Feed your Crew for just $25</h1>
                <p className="text-strong">Louisiana flavor for the whole group chat. Get 12 pc Tenders, 4 Regular Sides, 4 Biscuits & 4 Small Drinks</p>
                <MenuButton />
            </section>
            
            <h2 className="title-medium">Our Recommended Menu Items</h2>
            
            <div className="promotion-container">
                {[1, 2, 3].map((index) => (
                    <div className="best-dishes" key={index}>
                        <img className="dish-image" src="https://nypost.com/wp-content/uploads/sites/2/2016/07/hot-dog-2.jpg?quality=90&strip=all&w=1328" alt="Classic Chicken" />
                        <h3 className="title-small">Classic Chicken</h3>
                        <p className="paragraph">A juicy chicken breast fillet marinated in Popeyes seasonings, hand battered and breaded in our buttermilk system, fried until golden brown. Sandwiched between two buttery toasted brioche buns, topped with our barrel cured pickle slices and classic mayo. Now add Bacon & Cheese to any sandwich.</p>
                        <MenuButton />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LandingPage;
