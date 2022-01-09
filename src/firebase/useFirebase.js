import { useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    getAdditionalUserInfo

} from 'firebase/auth';

import auth from './firebase'


export const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log(userCredential.user + "  logged in");
            return userCredential.user;
        })
        .catch(error => console.log(error))
}

export const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log(userCredential.user + "  signUp")
            return userCredential.user;

        })
        .catch(error => console.log(error))
}

export const logOut = () => {
    return signOut(auth)
        .then(
            console.log(email + " Logged Out")
        )
        .catch(error => console.log(error));
}

export const addName = (user, name) => {
    return updateProfile(user, { displayName: name })
        .then(
            console.log(name + " Logged Out")
        )
        .catch(error => console.log(error));
}

export const getCurrentUserProfile = () => {
    const user = auth.currentUser;
    if (user !== null) {
        const data = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            uid: user.uid,
            info: user.providerData,
        }
        return { data };
    }
    return null
}

//custom hook
export const useAuth = () => {
    const [currentUser, seCurrentUser] = useState()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            seCurrentUser(user);
        })

        return unsubscribe;

    }, [])

    return currentUser
}