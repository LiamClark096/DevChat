// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyD17JwZIM24w4a-UfGUrrV5BLmhuppFxo8",
  authDomain: "chat-c909a.firebaseapp.com",
  projectId: "chat-c909a",
  storageBucket: "chat-c909a.appspot.com",
  messagingSenderId: "1094819406486",
  appId: "1:1094819406486:web:0b9458298cf872178b98b7",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
