// Firebase Cloud Messaging Configuration File. 
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import firebase, { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyD17JwZIM24w4a-UfGUrrV5BLmhuppFxo8",
  authDomain: "chat-c909a.firebaseapp.com",
  databaseURL: "https://chat-c909a-default-rtdb.firebaseio.com",
  projectId: "chat-c909a",
  storageBucket: "chat-c909a.appspot.com",
  messagingSenderId: "1094819406486",
  appId: "1:1094819406486:web:0b9458298cf872178b98b7",
  measurementId: "G-GRL8B5JCVD"
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: 'BL2ax0M9JkQD9GT3sgpAS3bpPu1by2n6PMf_H8xWbck6RS8JpQy-_Jv4JRQ8HpykYnQ5W1kO8yDSYQoPziARVxg' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

  
