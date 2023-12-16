import React, { useState } from 'react';
import '../styles/NewItem.css';

const NewItem = () => {
    const [isAddingItem, setIsAddingItem] = useState(false);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemImage, setItemImage] = useState(null);
    const [itemPrice, setItemPrice] = useState('');
    const [items, setItems] = useState([]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setItemImage(file);
    };

    const handleAddItem = () => {
        const placeholderImageUrl = 'https://via.placeholder.com/400x400';

        const newItem = {
            id: new Date().getTime(),
            name: itemName,
            description: itemDescription,
            price: itemPrice,
            image: itemImage ? URL.createObjectURL(itemImage) : placeholderImageUrl,
        };

        setItems((prevItems) => [...prevItems, newItem]);

        setItemName('');
        setItemDescription('');
        setItemPrice('');
        setItemImage(null);
        setIsAddingItem(false);
    };



    return ( <
        div className = "new-item-container" >
        <
        h1 > Items < /h1> {
        isAddingItem ? ( <
            div className = "add-item-card" >
            <
            h2 > Add New Item < /h2> <
            form >
            <
            label htmlFor = "itemName" > Item Name: < /label> <
            input type = "text"
            id = "itemName"
            value = { itemName }
            onChange = {
                (e) => setItemName(e.target.value)
            }
            />

            <
            label htmlFor = "itemDescription" > Item Description: < /label> <
            textarea id = "itemDescription"
            value = { itemDescription }
            onChange = {
                (e) => setItemDescription(e.target.value)
            } >
            <
            /textarea>

            <
            label htmlFor = "itemPrice" > Price: < /label> <
            input type = "text"
            id = "itemPrice"
            value = { itemPrice }
            onChange = {
                (e) => setItemPrice(e.target.value)
            }
            />

            <
            label htmlFor = "itemImage" > Upload Photo: < /label> <
            input type = "file"
            id = "itemImage"
            accept = "image/*"
            onChange = { handleImageChange }
            />

            <
            button type = "button"
            onClick = { handleAddItem } >
            Add Item <
            /button> < /
            form > <
            /div>
        ) : ( <
            button className = "add-item-button"
            onClick = {
                () => setIsAddingItem(true)
            } >
            Add New Item <
            /button>
        )
    }

    <
    div className = "added-items" > {
            items.map((item) => ( <
                div key = { item.id }
                className = "item" >
                <
                h3 > { item.name } < /h3> <
                p > { item.description } < /p> <
                p > Price: $ { item.price } < /p> <
                img src = { item.image }
                alt = { item.name }
                /> <
                button className = "buy-button" > Buy < /button> < /
                div >
            ))
        } <
        /div> < /
    div >
);
};

export default NewItem;