  import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyCfCcaVp98RcsghT_MO1FIVGK7NnCJcMNs",
    authDomain: "food-order-auth-6b80e.firebaseapp.com",
    projectId: "food-order-auth-6b80e",
    storageBucket: "food-order-auth-6b80e.appspot.com",
    messagingSenderId: "1055072253618",
    appId: "1:1055072253618:web:20febb8fbcfb9c751f7bab"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;