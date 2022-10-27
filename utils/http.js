import axios from "axios";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  collectionGroup,
  query,
  where,
  FieldValue,
  increment,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export async function postData(orphanageData) {
  // axios.post(BACKEND_URL + "/orphanages.json", orphanageData);
  const docRef = await addDoc(collection(db, "orphanages"), orphanageData);
  console.log("Document written with ID: ", docRef.id);
  const objRef = await doc(db, "orphanages", docRef.id);

  await updateDoc(objRef, {
    id: docRef.id,
  });
}

export async function updateDonationAmount(amount, docId, id) {
  const docRef = doc(db, "orphanages", docId, "itemsNeeded", id);

  if (amount === "+") {
    await updateDoc(docRef, {
      quantity: increment(-1),
    });
    const parentDocRef = await addDoc(collection(db, "donations"), {
      // name: 
    })
  } else {
    await updateDoc(docRef, {
      quantity: increment(1),
    });
  }
}

export async function getNeededItems(id) {
  const querySnapshot = await getDocs(
    collection(db, "orphanages", id, "itemsNeeded")
  );
  const allItems = [];

  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    allItems.push(doc.data());
  });
  console.log("All Items: ", allItems);
  return allItems;
}

export async function getData() {
  const querySnapshot = await getDocs(collection(db, "orphanages"));
  const allOrphanages = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, "=>");
    allOrphanages.push(doc.data());
    // console.log("All Orphanages: ", allOrphanages);
  });

  return allOrphanages;

  // const response = await axios.get(BACKEND_URL + "/orphanages.json");

  // const orphanages = [];

  // console.log("before transforming");
  // // console.log(response)

  // for (const key in response.data) {
  //   let count = "0";
  //   const orphanageObj = {
  //     id: key,
  //     district: response.data[key].count.district,
  //     location: response.data[key].location,
  //     name: response.data[key].name,
  //     imageUrl: response.data[key].imageUrl,
  //     itemsNeeded: response.data[key].itemsNeeded,
  //   };
  //   orphanages.push(orphanageObj);
  // }
  // console.log("after transforming");
  // // console.log(orphanages)
  // return orphanages;
}
