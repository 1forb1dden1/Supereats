import { useState, useEffect } from 'react';
import './ClientMenuItem.css';
import * as firebase from '../../../firebase/firebase';
import Modal from '../../components/ClientModal/ClientModal'

function ClientMenuItem() {
    const [menuList, setMenuList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
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

    function editMenuItem(item) {
       setCurrentItem(item);
       setIsModalOpen(true);
    }

    async function handleDelete(item) {
        try {
            await firebase.deleteMenuItem("menuItem", item.id);
            fetchMenuItems(); 
        } catch (error) {
            console.error('Error deleting menu item:', error);
        }
    }

    if (loading) {
        return <div>Loading menu items...</div>;
    }

    const menuItemsDisplay = menuList.map((item) => (
        <div className="MenuList-Container" key={item.id}>
            <h1 className="MenuList-Header">{item.name}</h1>
            <p>Price: ${item.price}</p>
            <img className="MenuList-Image" src={item.imageuri} alt={item.name} />
            <p className="MenuList-Description">Description: {item.description}</p>
            <button className="MenuList-Btn" onClick={() => editMenuItem(item)}>Edit Item</button>
            <br/>
            <button type="submit" onClick={() => handleDelete(item)}>Delete Item</button>
        </div>
    ));

    return (
        <div className="MenuItemContainer">
            <h1>Menu Item ClientSide</h1>
                <div className="menu-wrapper">
                    {menuItemsDisplay}
                </div>
            {isModalOpen && <Modal currentItem={currentItem} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}

export default ClientMenuItem;
