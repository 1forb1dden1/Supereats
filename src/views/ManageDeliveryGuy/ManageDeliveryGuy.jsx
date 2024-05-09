import React, { useState } from 'react';
import './ManageDeliveryGuy.css';

const ManageDeliveryGuyPage = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = (deliveryguy) => {
        setIsFlipped(prevState => ({
            ...prevState,
            [deliveryguy]: !prevState[deliveryguy]
        }));
    };

    const [currentPay, setCurrentPay] = useState(20);

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
        <div className="managedeliveryguy-container">
            <div className="deliveryguy-profiles">
                <div className={`deliveryguy-one ${isFlipped['deliveryguyOne'] ? 'flipped' : ''}`} onClick={() => handleCardClick('deliveryguyOne')}>
                    <div className="card1-front">
                        <img src="../src/img/dg-one.jpg" alt="Delivery Guy 1 Profile" />
                        <h1>John Smith</h1>
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
                <div className={`deliveryguy-two ${isFlipped['deliveryguyTwo'] ? 'flipped' : ''}`} onClick={() => handleCardClick('deliveryguyTwo')}>
                    <div className="card2-front">
                        <img src="../src/img/dg-two.jpg" alt="Delivery Guy 2 Profile" />
                        <h1>Kim Love</h1>
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
                <div className={`deliveryguy-three ${isFlipped['deliveryguyThree'] ? 'flipped' : ''}`} onClick={() => handleCardClick('deliveryguyThree')}>
                    <div className="card3-front">
                        <img src="../src/img/dg-three.jpg" alt="Delivery Guy 3 Profile" />
                        <h1>Isa Yung</h1>
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
                <div className={`deliveryguy-four ${isFlipped['deliveryguyFour'] ? 'flipped' : ''}`} onClick={() => handleCardClick('deliveryguyFour')}>
                    <div className="card4-front">
                        <img src="../src/img/dg-four.jpg" alt="Delivery Guy 4 Profile" />
                        <h1>Harry Styles</h1>
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

export default ManageDeliveryGuyPage;