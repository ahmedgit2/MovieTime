
import { addDoc, collection } from "firebase/firestore";
import db from './firestore'


export const addFavorite = async ({ name, email, phone, desc, image }) => {

    const collectionRef = (collection(db, 'Employees'))

    const payLoad = {
        name: name,
        email: email,
        phone: phone,
        desc: desc,
        image: image
    }
    await addDoc(collectionRef, payLoad)

}