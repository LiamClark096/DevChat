// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/database";
// import "firebase/storage";

// var config = {
//   apiKey: "AIzaSyD17JwZIM24w4a-UfGUrrV5BLmhuppFxo8",
//   authDomain: "chat-c909a.firebaseapp.com",
//   databaseURL: "https://chat-c909a-default-rtdb.firebaseio.com",
//   projectId: "chat-c909a",
//   storageBucket: "chat-c909a.appspot.com",
//   messagingSenderId: "1094819406486",
//   appId: "1:1094819406486:web:0b9458298cf872178b98b7",
//   measurementId: "G-GRL8B5JCVD"
// };
// firebase.initializeApp(config);

// export default firebase;
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyD17JwZIM24w4a-UfGUrrV5BLmhuppFxo8",
  authDomain: "chat-c909a.firebaseapp.com",
  databaseURL: "https://chat-c909a-default-rtdb.firebaseio.com",
  projectId: "chat-c909a",
  storageBucket: "chat-c909a.appspot.com",
  messagingSenderId: "1094819406486",
  appId: "1:1094819406486:web:0b9458298cf872178b98b7",
  measurementId: "G-GRL8B5JCVD",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

const fetchToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BL2ax0M9JkQD9GT3sgpAS3bpPu1by2n6PMf_H8xWbck6RS8JpQy-_Jv4JRQ8HpykYnQ5W1kO8yDSYQoPziARVxg",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
const _firebase = {
  fetchToken,
  onMessageListener,
};
export default _firebase;
