// // Import the functions you need from the SDKs you need
import * as firebase from 'firebase';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}; 

// Initialize Firebase

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('deleted',snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed',(snapshot)=>{
//   console.log('changed', snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added',(snapshot)=>{
//   console.log('added', snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot)=> {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//       });

//       console.log(expenses);
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//       });

  //     console.log(expenses);
  // });

// database.ref('expenses').push({
//   description: 'rent',
//   note: 'yearly',
//   amount: '2600',
//   createdAt: 576353758378
// });


// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//   console.log('fetch successful', val);
// }).catch((e) => {
//   console.log('Error fetching data', e)
// });

// database.ref().set({
//   name: 'David Kings',
//   age: 26,
//   isSingle: false,
//   location: {
//     city: 'lagos',
//     country: 'Nigeria'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('this failed.', e)
// });

//database.ref('age').set(30);
//database.ref('location/city').set('Warri');

// database.ref('attributes').set({
//   height: 185 + ' cm',
//   weight: 700 + ' kilograms'
// }).then(()=>{
//   console.log('data save was successful')
// }).catch((e)=>{
//   console.log('data saved unsuccessful', e)
// });




