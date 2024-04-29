// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc, updateDoc, getDocs, deleteDoc } from "firebase/firestore"; // Import getFirestore from the Firebase SDK
import { deleteObject, getStorage, ref } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCcf11fN5ZbQppoK9diuYRdXiM6vv3el-Y",
  authDomain: "supereats-3c1b9.firebaseapp.com",
  projectId: "supereats-3c1b9",
  storageBucket: "supereats-3c1b9.appspot.com",
  messagingSenderId: "972136108227",
  appId: "1:972136108227:web:336ab99185219475bd9276"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const storage = getStorage();
const storageRef = ref(storage);
const imagesRef = ref(storage, 'images');



/*Edit Menu Item in FireStore*/
export function editAMenuItem(dir: string, name: string, price: number, description: string, imageuri: string) {
  const docData ={
    name: name,
    price: price,
    description: description,
    imageuri: imageuri,
  }
  /*Will only update a pre-existing doc, if does not exist will throw an error.*/
  updateDoc(doc(firestore, 'menuItem/' + dir), docData);
}



/*Add MenuItem to FireStore*/
export async function addANewMenuItem (name: string, price: number, description: string, imageuri: string) {

  const newDoc = addDoc(collection(firestore, 'menuItem'), {
    name: name,
    price: price,
    description: description,
    imageuri: imageuri,
  })
  console.log(`Your doc was created`)
}

export const getMenuItems = async () => {
  const colRef = collection(firestore, 'menuItem');
  const snapshot = await getDocs(colRef);
  const menuItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return menuItems;
};

export async function deleteMenuItem(collectionID: string, docID: string) {
  const docRef = doc(firestore, collectionID, docID);
  try {
    await deleteDoc(docRef);
    console.log('Document successfully deleted');
  } catch (error) {
    console.error("Error removing document: ", error);
  }
}

deleteMenuItem("menuItem", "3XiIGbzc6xBHKDDl69Zl");