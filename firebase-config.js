// ============================================================
//  Firebase Configuration — alan-walker-11b1f
//  Initialised here so app.js can use window.auth & window.db
// ============================================================

const firebaseConfig = {
  apiKey:            "AIzaSyDjZISNY90fPj4t8uT_zzkc5ABdqsxAYH8",
  authDomain:        "alan-walker-11b1f.firebaseapp.com",
  databaseURL:       "https://alan-walker-11b1f-default-rtdb.firebaseio.com",
  projectId:         "alan-walker-11b1f",
  storageBucket:     "alan-walker-11b1f.firebasestorage.app",
  messagingSenderId: "493873189976",
  appId:             "1:493873189976:web:b6d115be5874a76e75262d"
};

// Initialise Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Expose Auth, Realtime Database and Firestore globally
window.auth      = firebase.auth();
window.db        = firebase.database();   // Realtime DB (for legacy)
window.firestore = firebase.firestore();  // Cloud Firestore
