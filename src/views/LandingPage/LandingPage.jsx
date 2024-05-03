import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import steak from "../../img/steak.jpg";
import salad from "../../img/salad.jpg"
import wings from "../../img/wings.jpg"
function MenuButton({ destination = "/menu" }) {
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
                <h1 className="title-large">Adventure Awaits Your Taste Buds</h1>
                <p className="text-strong">Dive into an eclectic mix of flavors. Grab our Sampler Platter with 10 unique small bites, 3 surprise sides, 5 artisanal mini-desserts, and drinks for four!</p>
                <MenuButton />
            </section>
            
            <h2 className="title-medium">Our Recommended Menu Items</h2>
            
            <div className="promotion-container">
                <div className="best-dishes" key={1}>
                    <img className="dish-image" src={steak}alt="Steak" />
                    <h3 className="title-small">Sirloin Steak</h3>
                    <p className="paragraph">A juicy chicken breast fillet marinated in Popeyes seasonings, hand battered and breaded in our buttermilk system, fried until golden brown. Sandwiched between two buttery toasted brioche buns, topped with our barrel cured pickle slices and classic mayo. Now add Bacon & Cheese to any sandwich.</p>
                    <MenuButton />
                </div>
                <div className="best-dishes" key={2}>
                    <img className="dish-image" src={wings} alt="Buffalo Wing" />
                    <h3 className="title-small">Buffalo Wings</h3>
                    <p className="paragraph">A juicy chicken breast fillet marinated in Popeyes seasonings, hand battered and breaded in our buttermilk system, fried until golden brown. Sandwiched between two buttery toasted brioche buns, topped with our barrel cured pickle slices and classic mayo. Now add Bacon & Cheese to any sandwich.</p>
                    <MenuButton />
                </div>
                <div className="best-dishes" key={3}>
                    <img className="dish-image" src={salad} alt="Caesar Salad" />
                    <h3 className="title-small">Caesar Salad</h3>
                    <p className="paragraph">A juicy chicken breast fillet marinated in Popeyes seasonings, hand battered and breaded in our buttermilk system, fried until golden brown. Sandwiched between two buttery toasted brioche buns, topped with our barrel cured pickle slices and classic mayo. Now add Bacon & Cheese to any sandwich.</p>
                    <MenuButton />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
