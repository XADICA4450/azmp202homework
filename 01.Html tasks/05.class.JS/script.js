//  1)Rectangle adında bir class yaradın.
// Rectangle class-ına calculateArea() adlı bir metod daxil edin. Bu metod width və height dəyərlərini istifadə edərək düzbucaqlının sahəsini hesablayacaq və geri qaytaracaq.

// Rectangle class-ına calculatePerimeter() adlı başqa bir metod daxil edin.
// Bu metod width və height dəyərlərini istifadə edərək düzbucaqlının perimetrini hesablayacaq və geri qaytaracaq.

// Reactangle sinifinin instanceni yaradın və onun sahəsini və perimetrini hesablayın.



// class Rectangle {
//     constructor(width, height) {
//       this.width = width;  
//       this.height = height; 
//     }
  
    
//     calculateArea() {
//       return this.width * this.height;
//     }
  
    
//     calculatePerimeter() {
//       return 2 * (this.width + this.height);
//     }
//   }
  

//   const myRectangle = new Rectangle(5, 10);
  

//   console.log("Sahe:", myRectangle.calculateArea());
//   console.log("Perimetr", myRectangle.calculatePerimeter()); 



// 2)Bank emeliyyati


// class BankAccount {
//     constructor(accountNumber, balance = 0) {
//       this.accountNumber = accountNumber; 
//       this.balance = balance; 
//     }
  

//     deposit(amount) {
//       if (amount <= 0) {
//         console.log("Error: Depozit sifirdan boyuk olmalidir .");
//       } else {
//         this.balance += amount;
//         console.log(`${amount} deposited. New balance: ${this.balance}`);
//       }
//     }
  
//     withdraw(amount) {
//       if (amount <= 0) {
//         console.log("Error: Cixarilacaq mebleg sifirdan boyuk olmalidir.");
//       } else if (this.balance < amount) {
//         console.log("Error: Hesabinizda kifayet qeder mebleg yoxdur.");
//       } else {
//         this.balance -= amount;
//         console.log(`${amount} withdrawn. New balance: ${this.balance}`);
//       }
//     }
//   }
  
//   const account1 = new BankAccount('101', 1000); 
  
//   const account2 = new BankAccount('102', 500); 
  
  
//   account1.deposit(500);  
//   account1.withdraw(200); 
  
//   account2.withdraw(100); 
//   account2.deposit(700);  
  
  
//   console.log(`Alice-in balansı: ${account1.balance}`); 
//   console.log(`Bob-un balansı: ${account2.balance}`); 
  

