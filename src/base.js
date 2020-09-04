import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAB2NN4LdHicSmannZWlOLnbvRfdozNdJk",
        authDomain: "catch-of-the-day-marissa.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-marissa.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export 
export { firebaseApp };

//this is a default export

export default base;