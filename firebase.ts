import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyBdG1JZORHnOP0BeJBGfINjYkdVjiUT2QM",
   authDomain: "beeasy-bb04c.firebaseapp.com",
   projectId: "beeasy-bb04c",
   storageBucket: "beeasy-bb04c.appspot.com",
   messagingSenderId: "327552179159",
   appId: "1:327552179159:web:fb26f6e179039d0b1c0992"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

const uploadToFirebase = async (file: any) => {
   const storageRef = ref(storage, `productImages/${file.name}`);
   await uploadBytesResumable(storageRef, file);
   return await getDownloadURL(storageRef);
};

const uploadLogoToFirebase = async (file: File) => {
   const storageRef = ref(storage, `storeLogos/${file.name}`);
   await uploadBytesResumable(storageRef, file);
   return await getDownloadURL(storageRef);
};

const uploadBannerToFirebase = async (file: File) => {
   const storageRef = ref(storage, `storeBanner/${file.name}`);
   await uploadBytesResumable(storageRef, file);
   return await getDownloadURL(storageRef);
};

export { app, auth, db, storage, uploadBannerToFirebase, uploadLogoToFirebase, uploadToFirebase };

