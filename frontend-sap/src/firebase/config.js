import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyBR1UJhYLHOAUd9v0uiwXImwerp5SfCHZo",
  authDomain: "react-firebase-microsenses.firebaseapp.com",
  projectId: "react-firebase-microsenses",
  storageBucket: "react-firebase-microsenses.appspot.com",
  messagingSenderId: "721933577301",
  appId: "1:721933577301:web:6b791d2b1fca0978a778dc"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); 

export async function subirImagen(file){
    const storageRef = ref(storage, v4())
    await uploadBytesResumable(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}