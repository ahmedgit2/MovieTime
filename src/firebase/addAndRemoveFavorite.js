
import { addDoc, collection } from "firebase/firestore";
import db from './firestore'


export const addFavorite = async (payLoad) => {

    const collectionRef = (collection(db, 'Movies'))
    await addDoc(collectionRef, payLoad)

}