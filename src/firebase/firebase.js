// // Import the functions you need from the SDKs you need
import * as firebase from 'firebase';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCQTa00SuhKv6tfjwMvNS3-Rgj3WRD_F9g",
  authDomain: "expensify-app-87e05.firebaseapp.com",
  databaseURL: "https://expensify-app-87e05.firebaseio.com",
  projectId: "expensify-app-87e05",
  storageBucket: "expensify-app-87e05.appspot.com",
  messagingSenderId: "716654928107",
  appId: "1:716654928107:web:d88077c5e344408fccdeae",
  measurementId: "G-RNTYG5MTTJ"
}; 

// Initialize Firebase

firebase.initializeApp(config);

const database = firebase.database();
 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

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




