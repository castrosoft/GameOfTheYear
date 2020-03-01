import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firestore-grafica-f5c68.firebaseio.com"
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
 export const helloWorld = functions.https.onRequest((request, response) => {
  response.json({
      mensaje: 'Hello from Firebase!!!'
    });
 });
