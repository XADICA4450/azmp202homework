// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

// let arr = [
//     {
//       name: "test",
//       key: 1,
//     },
//     {
//       name: "task",
//       key: 2,
//     },
//     {
//       name: "tanqo",
//       key: 3,
//     },
//     {
//       name: "like",
//       key: 4,
//     },
//     {
//       name: "task",
//       key: 5,
//     },
//     {
//       name: "trust",
//       key: 6,
//     },
//     {
//       name: "test",
//       key: 7,
//     },
//     {
//       name: "last",
//       key: 8,
//     },
//     {
//       name: "tanqo",
//       key: 9,
//     },
//     {
//       name: "elephant",
//       key: 10,
//     },
//     {
//       name: "love",
//       key: 11,
//     },
//     {
//       name: "small",
//       key: 12,
//     },
//     {
//       name: "little",
//       key: 13,
//     },
//   ];
  


//   let filteredArr = arr.filter(item => item.name.startsWith('t'));

// console.log(filteredArr);

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)

// let count = 0;

// arr.forEach(item => {
  
//   if (item.name.startsWith('t') && item.name.endsWith('t')) {
//     count++;  
//   }
// });

// console.log(count); 


// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// let sum = 0;


// arr.forEach(item => {
  
//   if (item.name.startsWith('t') && item.name.endsWith('t')) {
//     sum += item.key; 
//   }
// });

// console.log(sum); 


// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin

// arr.forEach(item => {
    
//     if (item.name.endsWith('e')) {
//       item.name = 'SuperDev';  
//     }
//   });
  
//   console.log(arr); 

// 5) "name"-i en uzun olan obyekti tapin

// let longName = arr[0];  
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i].name.length > longName.name.length) {
//     longName = arr[i];  
//   }
// }

// console.log(longName);

//  6) "name"-i en uzun olan obyektin key'ni tapin

// let longName = arr[0];  
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i].name.length > longName.name.length) {
//     longName = arr[i];  
//   }
// }

// console.log(longName.key);

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// let longIndex = 0;  

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i].name.length > arr[longIndex].name.length) {
//     longIndex = i;  
//   }
// }

// let indexSquare = longIndex **2;  
// console.log(indexSquare);


// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)

// let filterArray = arr.filter(item => item.name.length === 4);

// console.log(filterArray);


// 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin

// let longKey = arr[0];  
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i].key.length > longKey.key.length) {
//     longKey = arr[i];  
//   }
// }

// console.log(longKey.name);



// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.

// let filterArray = arr.filter(item => {
//     return item.name.split('l').length - 1 === 2;
//   });
  
//   console.log(filterArray);



// 1) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın


// let filterArray = arr.filter(item => {
//     return item.name.split('t').length - 1 === 2;
//   });
  
//   console.log(filterArray);



// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq

// let filterArray = arr.filter(item => item.key > 10 && item.name.startsWith('l'));

// console.log(filterArray);


