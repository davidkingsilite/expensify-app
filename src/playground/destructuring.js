// //
// // object destructuring

// const person = {
// name: 'David',
// age: 28,
// location: {
//     //city: 'Lagos,Nigeria',
//     temp: 98
//     }
// };

// const {name:firstname = 'Anomymous', age} = person;
// console.log(`${firstname} is ${age} years old` );

// const { city:locality = 'Nigga Area', temp } = person.location;
// console.log(`its ${temp}F in ${locality}`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        // name: 'Penguin'
//     }
// };

// const { name: publisherName ='self-publish' } = book.publisher;
// console.log(publisherName); //penguin, self-published

// //
// //Array destructuring 

// const address = ['16, Utubor Street', 'Irawo', , '10001'];
// const [street, city, state = 'Lagos' ] = address;
// console.log(`You are at ${street} in ${city} ${state}. `);

const add = ({ a, b }, c) =>{
        return a + b+ c;
};
console.log(add({a: 1, b: 12}, 100));
