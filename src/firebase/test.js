import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("a7n6gOx57eLlRx7ml0fk")
  .collection("cartItems")
  .doc("3HgEvRVpYGtDpx2RSVOM");

firestore.doc("/users/a7n6gOx57eLlRx7ml0fk/cartItems/3HgEvRVpYGtDpx2RSVOM");
