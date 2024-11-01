// 1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

// let eded =+ prompt("3 rəqəmli ədəd daxil edin:"); 

// let sum = 0;
// let product = 1;

// for (let i = 0; i < 3; i++) {
//     let reqem = eded % 10; 
//     sum += reqem;          
//     product *= reqem;      
//     eded = (eded - reqem) / 10; 
// }

// let average = sum / 3; 

// console.log(" cəm: " + sum);
// console.log("hasil:" + product);
// console.log("ədədi orta: " + average);


// 2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

// let eded = +prompt("Bir ədəd daxil edin:");  

// console.log(eded + " ədədinin bütün bölənləri:");

// for (let i = 1; i <= eded; i++) {
//     if (eded % i === 0) { 
//         console.log(i); 
//     }
// }




// 3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.


// let eded = +prompt(" ədəd daxil edin:"); 


// let bolen = 0; 

// for (let i = 1; i <= eded; i++) {
//     if (eded % i === 0) { 
//         bolen++; 
//     }
// }

// console.log(eded + " ədədinin bölənlərinin sayi: " + bolenSay);



//  4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın 

// for (let i = 0; i <= 10; i++) {
//     console.log(i + " x " + i + " = " + (i * i));
// }


// 5)  for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
// console.log("i\t i^2\t i^3"); 

// for (let i = 0; i <= 10; i++) {
//     console.log(i + "\t " + (i * i) + "\t " + (i * i * i));
// }



// 6) 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın

// let cütsum = 0; 
// let təksum = 0; 

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) { 
//         cütsum += i; 
//     } else { 
//         təksum += i; 
//     }
// }

// console.log("Cüt ədədlərin cəmi: " + cütsum);
// console.log("Tək ədədlərin cəmi: " + təksum);



//  7) Arraydəki ən böyük və ən kiçik element-ləri tapan  alqoritm yazın.

// let array =+prompt("array daxil edin")

// let enBoyuk = array[0]; 
// let enKicik = array[0]; 

// for (let i = 1; i < array.length; i++) {
//     if (array[i] > enBoyuk) {
//         enBoyuk = array[i]; 

//     }
//     if (array[i] < enKicik) {
//         enKicik = array[i]; 
//     }
// }

// console.log("Ən böyük element: " + enBoyuk);
// console.log("Ən kiçik element: " + enKicik);




//   8) Arraydəki   ən böyük və ən kiçik element-lərin ədədi ortasını tapıb qaytaran alqoritm yazın


// let array = +prompt("array daxil edin")

// if (array.length === 0) {
//     console.log("Array boşdur.");
// } else {
//     let enBoyuk = array[0]; 
//     let enKicik = array[0]; 

//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > enBoyuk) {
//             enBoyuk = array[i]; 
//         }
//         if (array[i] < enKicik) {
//             enKicik = array[i]; 
//         }
//     }

//     let ortalama = (enBoyuk + enKicik) / 2;

//     console.log("Ən böyük və ən kiçik elementlərin ədədi ortasi: " + ortalama);
// }



// 9) let sampleNews = As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.; task: sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.



// let bosluqSayi = 0;

// for (let i = 0; i < sampleNews.length; i++) {
//     if (sampleNews[i] === ' ') { 
//         bosluqSayi++; 
//     }
// }

// console.log("Boşluqlarin sayi: " + bosluqSayi);



// 10) 0 - 100 arası yalnız sadə ədədləri console'da çap edin

// console.log("0 - 100 arası sadə ədədlər:");

// for (let num = 2; num <= 100; num++) {
//     let sadə = true; 

//     for (let i = 2; i <= num / 2; i++) { 
//         if (num % i === 0) { 
//             sadə = false; 
//             break; 
//         }
//     }

//     if (sadə) {
//         console.log(num); 
//     }
// }



//  11)product arrayindəki producların qiymətləri cəmini və ortalamasını tapın\

// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
  
//   let totalPrice = 0; 
//   let count = products.length; 
  
//   for (let i = 0; i < products.length; i++) {
//       totalPrice += products[i].price; 
//   }
  
  
//   let averagePrice = totalPrice / count;
  
  
//   let totalPriceInt = (totalPrice | 0); 
//   let averagePriceInt = (averagePrice | 0); 
  
//   console.log("Qiymətlərin cəmi: $" + totalPriceInt);
//   console.log("Qiymətlərin ortalaması: $" + averagePriceInt);
  


// 12) Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const number = prompt("Bir ədəd daxil edin:");

// let found = false;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] == number) {
//         found = true;
//         break;
//     }
// }


// if (found) {
//     console.log("Daxil olunan ədəd array-də mövcuddur.");
// } else {
//     console.log("Daxil olunan ədəd array-də yoxdur.");
// }


// 13)tələbələr array-ində tələbələrin ortalaması ən yüksək olanı, ortalaması 90-dan yuxarı olanları tapan proqram yazın
// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//     { name: "Davud", scores: [100, 100, 100] }
//   ];
  
//   let highestAverageStudent = null;
//   let highestAverage = 0;
//   let above90Students = [];
  
//   for (let i = 0; i < students.length; i++) {
//     let total = 0;
//     let scores = students[i].scores;
  
//     for (let j = 0; j < scores.length; j++) {
//       total += scores[j];
//     }
  
//     let average = total / scores.length;
  
    
//     if (average > 90) {
//       above90Students.push(students[i]);
//     }
  

//     if (average > highestAverage) {
//       highestAverage = average;
//       highestAverageStudent = students[i];
//     }
//   }
  
  
//   console.log("Ortalaması 90-dan yuxarı olan tələbələr:", above90Students);
//   console.log("Ortalaması ən yüksək olan tələbə:", highestAverageStudent);
  

// 14)

// let number = +prompt("ededi daxil edin")
// let strNumber = number.toString(); 
// let isPalindrome = true; 

// for (let i = 0; i < strNumber.length / 2; i++) {
//   if (strNumber[i] !== strNumber[strNumber.length - 1 - i]) {
//     isPalindrome = false; 
//     break; 
//   }
// }


// if (isPalindrome) {
//   console.log(number + " polindromdur.");
// } else {
//   console.log(number + " polindrom deyil.");
// }
