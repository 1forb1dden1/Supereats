import React, { useState } from 'react';
import './ManageChef.css';

const ManageChefPage = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = (chef) => {
        setIsFlipped(prevState => ({
            ...prevState,
            [chef]: !prevState[chef]
        }));
    };

    const [currentPay, setCurrentPay] = useState(35);

    const handlePayCut = (event) => {
        event.stopPropagation();
        setCurrentPay(prevPay => prevPay - 1);
    };

    const handlePayIncrease = (event) => {
        event.stopPropagation();
        setCurrentPay(prevPay => prevPay + 1);
    };

    const handlePromote = () => {
        alert('Promoted!');
    };

    const handleFire = () => {
        alert('Fired!');

    
    };

    return (
        <div className="managechef-container">
            <div className="chef-profiles">
                <div className={`chef-one ${isFlipped['chefOne'] ? 'flipped' : ''}`} onClick={() => handleCardClick('chefOne')}>
                    <div className="card1-front">
                        <img src= "../src/img/chef-one.jpg" alt="Chef 1 Profile"/>
                        <h1>Bob Stanley</h1>
                        <p>Curated Italian dishes to everyones liking</p>
                        <div className="likes-container">
                            <img src="../src/img/thumbs-up.svg" alt="Thumbs Up" />
                            <p>3</p>
                            <img src="../src/img/thumbs-down.svg" alt="Thumbs Down" />
                            <p>1</p>
                        </div>
                    </div>
                    <div className="card1-back">
                        <h2>Current Pay Per Hour: ${currentPay}</h2>
                        <button onClick={(e) => handlePayCut(e)}>Pay Cut</button>
                        <button onClick={(e) => handlePayIncrease(e)}>Pay Increase</button>
                        <button onClick={handlePromote}>Promote</button>
                        <button onClick={handleFire}>Fire</button>
                    </div>
                </div>
                <div className={`chef-two ${isFlipped['chefTwo'] ? 'flipped' : ''}`} onClick={() => handleCardClick('chefTwo')}>
                    <div className="card2-front">
                        <img src="../src/img/chef-two.jpg" alt="Chef 2 Profile" />
                        <h1>Sara Young</h1>
                        <p>Curated Korean dishes to everyones liking</p>
                        <div className="likes-container">
                            <img src="../src/img/thumbs-up.svg" alt="Thumbs Up" />
                            <p>3</p>
                            <img src="../src/img/thumbs-down.svg" alt="Thumbs Down" />
                            <p>0</p>
                        </div>
                    </div>
                    <div className="card2-back">
                        <h2>Current Pay Per Hour: ${currentPay}</h2>
                        <button onClick={(e) => handlePayCut(e)}>Pay Cut</button>
                        <button onClick={(e) => handlePayIncrease(e)}>Pay Increase</button>
                        <button onClick={handlePromote}>Promote</button>
                        <button onClick={handleFire}>Fire</button>
                    </div>
                </div>
                <div className={`chef-three ${isFlipped['chefThree'] ? 'flipped' : ''}`} onClick={() => handleCardClick('chefThree')}>
                    <div className="card3-front">
                        <img src="../src/img/chef-three.jpg" alt="Chef 3 Profile" />
                        <h1>Armand Lee</h1>
                        <p>Curated American Cuisine to everyones liking</p>
                        <div className="likes-container">
                            <img src="../src/img/thumbs-up.svg" alt="Thumbs Up" />
                            <p>5</p>
                            <img src="../src/img/thumbs-down.svg" alt="Thumbs Down" />
                            <p>2</p>
                        </div>
                    </div>
                    <div className="card3-back">
                        <h2>Current Pay Per Hour: ${currentPay}</h2>
                        <button onClick={(e) => handlePayCut(e)}>Pay Cut</button>
                        <button onClick={(e) => handlePayIncrease(e)}>Pay Increase</button>
                        <button onClick={handlePromote}>Promote</button>
                        <button onClick={handleFire}>Fire</button>
                    </div>
                </div>
                <div className={`chef-four ${isFlipped['cheFour'] ? 'flipped' : ''}`} onClick={() => handleCardClick('chefFour')}>
                    <div className="card4-front">
                        <img src="../src/img/chef-four.jpg" alt="Chef 1 Profile" />
                        <h1>Nina Kapoor</h1>
                        <p>Curated American dishes to everyones liking</p>
                        <div className="likes-container">
                            <img src="../src/img/thumbs-up.svg" alt="Thumbs Up" />
                            <p>2</p>
                            <img src="../src/img/thumbs-down.svg" alt="Thumbs Down" />
                            <p>4</p>
                        </div>
                    </div>
                    <div className="card4-back">
                        <h2>Current Pay Per Hour: ${currentPay}</h2>
                        <button onClick={(e) => handlePayCut(e)}>Pay Cut</button>
                        <button onClick={(e) => handlePayIncrease(e)}>Pay Increase</button>
                        <button onClick={handlePromote}>Promote</button>
                        <button onClick={handleFire}>Fire</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageChefPage;