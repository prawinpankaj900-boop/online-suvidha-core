import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getAuth
} from
"https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
  getFirestore
} from
"https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNp0ZDnSSfYJ5_1kSTbP_gAxBnPH8pO84",
  authDomain: "online-suvidha-core.firebaseapp.com",
  projectId: "https://online-suvidha-core-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "online-suvidha-core.firebasestorage.app",
  messagingSenderId: "176597993994",
  appId: "1:176597993994:web:fb5b58dae1991bc6eb6df3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);`
