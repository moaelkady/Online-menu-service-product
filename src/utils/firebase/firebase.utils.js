import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  query,
  getDocs,
  collection,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaFjVhiiG8sIsk2AGRRMdLUvQX-TELmn0",
  authDomain: "menuserviceonline.firebaseapp.com",
  projectId: "menuserviceonline",
  storageBucket: "menuserviceonline.appspot.com",
  messagingSenderId: "562734616954",
  appId: "1:562734616954:web:e5930680e89640bbc006c3",
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const getCategoriesAvatar = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryAvatar = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, imgSrc } = docSnapshot.data();
    acc[title.toLowerCase()] = imgSrc;
    return acc;
  }, {});
  return categoryAvatar;
};