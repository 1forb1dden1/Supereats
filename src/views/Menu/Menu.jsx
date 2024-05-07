import { useState, useEffect } from 'react';
import { useCart } from '../../utils/CartContext';
import * as firebase from '../../../firebase/firebase';
import './Menu.css'

function Menu () {
    const { addToCart } = useCart();
    const [menuList, setMenuList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMenuItems();
    }, []);

    const fetchMenuItems = async () => {
        setLoading(true);
        try {
            const items = await firebase.getMenuItems(); 
            setMenuList(items);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch menu items:', error);
            setLoading(false);
        }
    };

    const menuItemsDisplay = menuList.map((item) => (
        <div className="menu-item-card" key={item.id}>
            <h1 className="menu-item-title">{item.name}</h1>
            <p className="menu-item-price">Price: ${item.price}</p>
            <img className="menu-item-image" src={item.imageuri} alt={item.name} />
            <p className="menu-item-description">{item.description}</p>
            <button className="menu-item-button" onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    ));
    
    return ( 
        <div className="menu-container">
            <h1>Menu</h1>
                <div className="menu-grid">
                    {menuItemsDisplay}
                </div>
        </div>
    )
}

export default Menu;
