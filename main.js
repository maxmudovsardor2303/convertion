
// // 11-masala

// 1-usul

// const item = num =>{
//     let sum = 0
//     num = String(num)
//     for(let item of num){
//         if(!isNaN(item)){
//             sum += parseInt(item)
//         }
//     }
//     return sum;
// };
// const userInput = prompt("Istalgan sonni kiriting:");
// const number = parseFloat(userInput);

// if (!isNaN(number)) {
//   const result = item(number);
//   console.log(`Kiritilgan sonning raqamlari yig'indisi: ${result}`);
// } else {
//   console.log("Noto'g'ri kiritilgan. Iltimos, son kiriting!");
// }

// // 2-usul 

// let promptFn = +prompt("Enter your number...")
// const box = (number) => {
//     let array = Array.from(number.toString(),Number)
//     let result = 0
//     for(let i = 0; i < array.length; i++){
//         result += array[i]
//     }
//     return result
// }
// console.log(box(promptFn))



// 12-masala 



// const item = (...num) =>{
//     let massiv = [...num]
//     let total = 0
//     for(let i = 0; i < massiv.length; i++){
//         total += massiv[i]
//     }
//     console.log(total)
// }
// item(1,22,3)



// 13-masala


// function ispalindirom (params) {
//     let type = typeof params
//     if(type === "number"){
//         let arr = Array.from(params.toString(), Number).reverse()
//         let new_number = Number(arr.join(""))
//         if(params === new_number){
//             return "palindrome"
//         }else{
//             return "palindrome emas"
//         }
//     }else if(type === "string"){
//         let arr = params.split("").reverse()
//         let new_str = arr.join("")
//         if(params === new_str){
//             return "palindrome"
//         }else{
//             return "palindrome emas"
//         }
//     }else{
//         return "type xato"
//     }
// }
// console.log(ispalindirom(43));


// 14-masala 

// let object = {a: 23, b: 22}
// let arr  = []
// for(let key in object){
//     arr.push(object[key])
// }
// let result = 0
// for(let i = 0; i < arr.length; i++){
//     result += arr[i]
// }
// let new_arr = Array.from(result.toString(), Number)
// console.log(new_arr);


// 15-masala

// let str = "  o'ktam  "
// let new_str = str.toLowerCase().trim()
// let letters = ["a", "e", "i", "o", "u", "o'"]
// let count = 0
// for(let i = 0; i < new_str.length; i++){
//     if(letters.includes(new_str[i])){
//         count++
//     }
// }
// console.log(count);




// 16-masala 

// function item(n) {
//     let result = [];
//     for (let i = 1; i <= 2 * n; i += 2) {
//         result.push(i);
//     }
//     return result;
// }
// let n = 3;
// console.log(item(n)); 
