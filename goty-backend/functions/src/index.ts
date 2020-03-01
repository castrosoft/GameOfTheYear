import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firestore-grafica-f5c68.firebaseio.com"
});

//Referencia a la base de datos
const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
 export const helloWorld = functions.https.onRequest((request, response) => {
  response.json({
      mensaje: 'Hello from Firebase!!!'
    });
 });

 export const getGoty = functions.https.onRequest(async(request, response) => {
  //const nombre = 'Pedro';

  //with arguments url
  //const nombre = request.query.nombre || 'Sin nombre'; 

  /*
  response.json({
    nombre
  })
  */

  const gotyRef = db.collection('goty');
  const docsSnap = await gotyRef.get();

  const juegos = docsSnap.docs.map(doc => doc.data());
  //Tiene info confidencial. No publicar esta declaracion
  //response.json(docsSnap);
  
  //Un juego en particular
  //response.json(docsSnap.docs[0].data());

  response.json(juegos);

 });

 //Express
 /**
  * Utilizo un servidor de Express para los GET, POST, etc.
  * Ahora los podemos pasar por middlewares, podemos crear jsonWebTokens, etc.
  */

 const app = express();

 //Para que acepte peticiones de otros dominios
 app.use(cors({origin: true}));

 app.get('/goty', async(req, res) => {
  const gotyRef = db.collection('goty');
  const docsSnap = await gotyRef.get();

  const juegos = docsSnap.docs.map(doc => doc.data());
  res.json(juegos);

 });


 export const api = functions.https.onRequest(app);

