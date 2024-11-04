//  1)Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function. Misalçün function-a gələn
//  ilk arqumenti 2-ci arqument qədər qüvvətə yüksəldən function - dəyərləri prompt vasitəsi ilə qəbul edib function-a göndərin)



// function power(eded1, eded2) {
//     return Math.pow(eded2, eded1);
// }
// let firstNumber = +prompt("Birinci ədədi daxil edin:");
// let secondNumber = +prompt("İkinci ədədi daxil edin:");


// let result = power(firstNumber, secondNumber);
// console.log(`${firstNumber} ədədi ${secondNumber} qüvvətinə yüksəldikdə: ${result}`);


// 2
// function moveElement(array, currentIndex, newIndex) {
    
//     let element = array[currentIndex];

    
//     array.splice(currentIndex, 1);

    
//     array.splice(newIndex, 0, element);

    
//     console.log(array);
// }

// let myArray = [1, 2, 3, 4, 5];
// moveElement(myArray, 1, 3); 


// 3)
// function remove(array) {
    
//     let unique = [];

//     for (let i = 0; i < array.length; i++) {
//         if (!unique.includes(array[i])) {
//             unique.push(array[i]);
//         }
//     }

//     return unique; 
// }


// let myArray = [1, 2, 2, 3, 4, 4, 5];
// let result = removeDuplicates(myArray); 
// console.log(result);


// 4)
// function capitalizeFirstLetter(sentence) {

//     let words = sentence.split(' ');


//     let capitalizedWords = words.map(word => {
        
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });

//     return capitalizedWords.join(' ');
// }

// let mySentence = "this is java script";
// let result = capitalizeFirstLetter(mySentence);
// console.log(result); 

// 5)

// function merge(array1, array2) {
    
//     let mergedArray = array1.concat(array2);
//     return mergedArray;
// }

// let array1 = [6, 7, 8];
// let array2 = [9, 11, 12];
// let result = merge(array1, array2);
// console.log(result); 

// 6)

// function countWords(sentence) {
    
//     let words = sentence.split(' ');


//     let count = 0;

//     for (let word of words) {
        
//         if (word.length > 0) {
//             count++;
//         }
//     }

//     return count;
// }

// let cumle = "hllo java script";
// let wordCount = countWords(cumle);
// console.log(wordCount); 

