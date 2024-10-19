// services/firestore.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";

export const getProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return products;
    } catch (error) {
      console.error("Error fetching products: ", error);
      return [];
    }
  };