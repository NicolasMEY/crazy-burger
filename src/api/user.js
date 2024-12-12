import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../assets/fakeData/fakeMenu";

export const getUser = async (idUser) => {
  // const docRef = doc(CHEMIN);
  const docRef = doc(db, "users", idUser);

  const docSnapShot = await getDoc(docRef);
  if (docSnapShot.exists()) {
    const userReceived = docSnapShot.data();
    return userReceived;
  }
};

export const createUser = (userId) => {
  const docRef = doc(db, "users", userId);
  const newDoc = {
    username: userId,
    menu: fakeMenu.LARGE,
  };
  setDoc(docRef, newDoc);
};

// docRef = cachette
//newDoc = nourriture
