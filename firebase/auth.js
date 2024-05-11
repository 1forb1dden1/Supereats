import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


export const createUser = async (email, password) => {
    console.log("User created with:", email, ":", password)
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = async (email, password) => {
    console.log("User signed in as:", user.email)
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
    console.log("signing out");
    return auth.signOut();
}

export const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
}