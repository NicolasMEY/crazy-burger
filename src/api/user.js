import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../assets/fakeData/fakeMenu";

// Récupération du user
export const getUser = async (idUser) => {
  // const docRef = doc(CHEMIN);
  const docRef = doc(db, "users", idUser);

  const docSnapShot = await getDoc(docRef);
  if (docSnapShot.exists()) {
    const userReceived = docSnapShot.data();
    return userReceived;
  }
};

// Création du user
export const createUser = (userId) => {
  const docRef = doc(db, "users", userId);
  const newDoc = {
    username: userId,
    menu: fakeMenu.SMALL,
  };
  setDoc(docRef, newDoc);
};

// docRef = cachette
//newDoc = nourriture

export const authenticateUser = async (userId) => {
  // 1. Récupère un existingUser
  const existingUser = await getUser(userId);

  // 2. Sinon tu créer un newUser
  if (existingUser === undefined) {
    createUser(userId);
  }
};