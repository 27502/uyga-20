// 1--------------------{
//     let a =1,b =10;
//     let arr =[];
//     for(let i = a; i <= b; i++){
//     if(i % 2 === 0){
//         arr.push(i);
//     }
    
//     }
//     console.log(arr);
// }
// 1--------------------{
//     let a =1,b =10;
//     let arr =[];
//     function recursive(){
//         if(a <= b){
//            if(a % 2 === 0){
//             arr.push(a);
         
            
//         }
//             a++;
//             recursive();
          
//         }
//     }
//     recursive();
// console.log(arr);
//     }

//2-------------------- {
//     let a =1,b =100;
//     let arr = [];
//     for(let i = a; i <= b; i++){
//         if(i % 10 === 0){
//             arr.push(i);
//         }
//     }
// }
// 2-------------------{
//     let a =10, b = 100;
//     let arr = [];
//     function recursive(){
//         if(a <= b){
//             if(a % 10 === 0){
//                 arr.push(a);
//             }
//             a++;
//             recursive();
//     }
//     }
//     console.log(arr);
// }
   

// 3--------------------{
//     let a =10, b = 1;
//     let arr =[];
//     function recursive(){
//         if(b <= a){
//             arr.push(b ** 2);
//             b++;
//              recursive();
//         }
//     }
       
    
  

// recursive();

// console.log(arr);
//   }

//3--------------------- {
//     let a =10, b = 1;
//     let arr = [];
//     for(let i = b; i <= a; i++){
//         arr.push(i ** 2);
//     }
//     console.log(arr);
// }


// 4-----------------{
//     let originalArray = [40, 100, 1, 5, 25, 10];


// let sortedArray = [...originalArray].sort((a, b) => a - b);


// console.log("Sorted Array:", sortedArray);     

// }
//4------------------- {
//     let originalArray = [40, 100, 1, 5, 25, 10];
// let sortedArray = [...originalArray]; 

// for (let i = 0; i < sortedArray.length; i++) {
//     for (let j = 0; j < sortedArray.length - i - 1; j++) {
//         if (sortedArray[j] > sortedArray[j + 1]) {
          
//             let temp = sortedArray[j];
//             sortedArray[j] = sortedArray[j + 1];
//             sortedArray[j + 1] = temp;
//         }
       
//     }
// }

// console.log("Original Array:", originalArray); 
// console.log("Sorted Array:", sortedArray);     

// }

// 5------------------- {
//     let str = "How are you? What is this? Can you help?";
// let words = str.split(" ");  


// for (let i = 0; i < words.length; i++) {
//   if (words[i].endsWith('?')) {

//     words[i] = words[i].slice(0, words[i].length - 1);
//   }
// }


// let result = words.join(" ");
// console.log(result);  

// } 
// 6------------------- {
//     let a =5;
//     let arr = [];
//     for(let i = 1; i <= a; i++){
// arr.push(5);
//     }
//     console.log(arr);
    
// }
// 6------------------- {
//     let a =5;
//     let arr = [];
//     function recursive(){
//         if(a >= 1){
//             arr.push(5);
//             a--;
//             recursive();
//         }
//     }
//     recursive();
//     console.log(arr);
// }
// 7------------------- {
//     function check(value) {
//         if (value) {
//           return true;  
//         } else {
//           return false;
//         }
//       }
      
//       console.log(check(0));      
//       console.log(check("salom"));
      
// }
// 7------------------- {
// let str = "salom";
// if(str){
//     console.log("true");
// }else{
//     console.log("false");
// }
// }
