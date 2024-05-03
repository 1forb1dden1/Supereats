import React, { useState, useEffect } from "react";
import "./ClientModal.css";
import * as firebase from '../../../firebase/firebase';

export default function Modal({currentItem, onClose}) {
  const [title, setTitle] = useState(currentItem.name);
  const [price, setPrice] = useState(currentItem.price);
  const [description, setDescription] = useState(currentItem.description);
  const [imageUri, setImageUri] = useState(currentItem.imageuri);
  
  const handleInputChange = (input, event) => {
    if (input === 'title') {
      setTitle(event.target.value);
    } else if (input === 'price') {
      setPrice(event.target.value);
    } else if (input === 'description') {
      setDescription(event.target.value);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      //Firebase Max Kb allowed for image URI is 1048487 bytes
      compressImage(reader.result, 1048487, (compressedImage) => {
        setImageUri(compressedImage);
      });
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  /*HTML5 CANVAS COMPRESSION*/
  const compressImage = (dataUrl, maxSize, callback) => {
    const image = new Image();
    image.src = dataUrl;
  
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      let width = image.width;
      let height = image.height;
      let scaleFactor = 1;
  
      // Calculate the scaling factor to fit the image within the maxSize
      if (image.size > maxSize) {
        scaleFactor = Math.sqrt(maxSize / image.size);
        width *= scaleFactor;
        height *= scaleFactor;
      }
  
      canvas.width = width;
      canvas.height = height;
  
      // Draw the image onto the canvas with the new dimensions
      ctx.drawImage(image, 0, 0, width, height);
  
      // Get the compressed data URL from the canvas
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
  
      // Call the callback function with the compressed data URL
      callback(compressedDataUrl);
    };
  };
  

  const handleSubmit = async () => {
    /*There is an issue that arises when a timeout is not implemented where the page 
    will call window.location.reload before firebase.editAMenuItem has fully processed.*/
    try {
      await firebase.editAMenuItem(currentItem.id, title, price, description, imageUri);
      onClose();
      setTimeout(() => {
        window.location.reload();
      }, 500); // reload after 500 ms
    } catch (error) {
      console.error('Error updating menu item:', error);
    }
  };

  return (
    <>
        <div className="modal">
          <div onClick={onClose} className="overlay"></div>
          <div className="modal-content">
            <div className="Client-Form">
              <h1>Edit This Menu Item</h1>
              <p>MenuItem ID: {}{currentItem.id}</p>
              <p>Title</p>
              <input type="text" value={title} onChange={(event) => handleInputChange('title', event)} />

              <p>Price</p>
              <input type="text" value={price} onChange={(event) => handleInputChange('price', event)} />

              <p>Description</p>
              <input type="text" value={description} onChange={(event) => handleInputChange('description', event)} />

              <p>Image</p>
              <label className="DragDrop-container">
                Click to Select File or Drag and Drop
                <input type="file" style={{ display: 'none' }} onChange={handleImageUpload} />
              </label>
              <br/>
              {imageUri && <img src={imageUri} alt="Uploaded" style={{ maxWidth: '200px' }} />}
              <br/>
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
            <button className="close-modal" onClick={onClose}>
              CLOSE
            </button>
          </div>
        </div>
    </>
  );
}