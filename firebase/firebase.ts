// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, collection, addDoc, updateDoc, getDocs, deleteDoc } from "firebase/firestore"; // Import getFirestore from the Firebase SDK
import { deleteObject, getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCcf11fN5ZbQppoK9diuYRdXiM6vv3el-Y",
  authDomain: "supereats-3c1b9.firebaseapp.com",
  databaseURL: "https://supereats-3c1b9-default-rtdb.firebaseio.com",
  projectId: "supereats-3c1b9",
  storageBucket: "supereats-3c1b9.appspot.com",
  messagingSenderId: "972136108227",
  appId: "1:972136108227:web:336ab99185219475bd9276"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();
const storage = getStorage();
const storageRef = ref(storage);
const imagesRef = ref(storage, 'images');

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

/**/
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

export async function addANewUser (email: string, password: string){
  const newDoc = addDoc(collection(firestore, 'users'), {
    email: email,
    password: password,
  })
  console.log(`Your doc was created`)
}

export async function editAUser(dir: string, email: string, password: string){
  const docData = {
    email: email,
    password: password
  }
  updateDoc(doc(firestore, 'users/' + dir), docData);
}

export const getUsers = async () => {
  const colRef = collection(firestore, 'users');
  const snapshot = await getDocs(colRef);
  const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return users;
};

export { app, auth };