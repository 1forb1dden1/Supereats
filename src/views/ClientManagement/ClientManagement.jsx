import { useState, useEffect } from 'react';
import './ClientManagement.css';
import * as firebase from '../../../firebase/firebase';

function ClientManagement() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState('');

  useEffect(() => {
    // You can perform any additional actions here when imageUri changes,
    // such as uploading the image to Firebase storage.
     console.log(imageUri);
  }, [imageUri]);

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
      compressImage(reader.result, 100000, (compressedImage) => {
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
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
  
      let width = image.naturalWidth;
      let height = image.naturalHeight;
      let reductionFactor = 1;
  
      // If the initial dimensions are too large, reduce them
      while (width * height > maxSize) {
        reductionFactor *= 0.5;
        width = Math.round(image.naturalWidth * reductionFactor);
        height = Math.round(image.naturalHeight * reductionFactor);
      }
  
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(image, 0, 0, width, height);
  
      // Start with a high quality
      let quality = 1.0;
      let compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
  
      // Reduce quality to meet maxSize requirement
      while (compressedDataUrl.length > maxSize && quality > 0.1) {
        quality -= 0.1;
        compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
      }
  
      callback(compressedDataUrl);
    };
  };
  

  const handleSubmit = () => {
    firebase.addANewMenuItem(title, price, description, imageUri);
  };

  return (
    <div className = "client-container">
      <div className="Client-Form">
        <h1>Create new Menu Item</h1>
        <p>Title</p>
        <input type="text" value={title} onChange={(event) => handleInputChange('title', event)} />

        <p>Price</p>
        <input type="text" value={price} onChange={(event) => handleInputChange('price', event)} />

        <p>Description</p>
        <input type="text" value={description} onChange={(event) => handleInputChange('description', event)} />

        <p>Image</p>
        <input type="file" className = "DragDrop-container" onChange={handleImageUpload} />
        <br/>
        <br/>
        {imageUri && <img src={imageUri} alt="Uploaded" style={{ maxWidth: '200px' }} />}

        <br/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default ClientManagement;
