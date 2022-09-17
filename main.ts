//------------------------------   question 1   ----------------------------

// let ab = ""
// let AB = ""
// for(let i = 97; i <= 122; i++){
//     let ifInside = String.fromCharCode(i);
//     ab += ifInside;
//     }
// for(let i = 65; i <= 90; i++){
// let ifInside = String.fromCharCode(i);
// AB += ifInside;
// }
// console.log(ab + AB);

//------------------------------   question 2   ----------------------------

// let string = "olleh" ,
//     newString = ""   ;

// for (let i = string.length - 1 ; i >= 0; i--) {
//     newString+=string[i];
    
// }
// console.log(newString);

//------------------------------   question 3   ----------------------------

// let stringOne = "hello" ,
//     stringTwo = "12345",
//     newString = "";

//     for(let i = 0; i <= stringOne.length -1 ; i++){
//         newString += stringOne[i];
//         newString += stringTwo[i];
//     }
//     console.log(newString);

//------------------------------   question 4   ----------------------------
// let arr = [1,2,3,4,5];
// let sum = 0;
// let avg = 0;
// for(let i = 0 ; i <=arr.length -1; i++){
//     sum += arr[i];
// }
// avg = sum / arr.length;
// console.log("avg: "+avg);
// console.log("sum: "+sum);

//------------------------------   question 5   ----------------------------
// let arr = [1,2,3,4,5];
// let neigh = 0;

// neigh += arr[1];            // האיבר השני 
// for(let i = 1 ; i <=arr.length-2;i++){
//     neigh += arr[i - 1] + arr[i + 1];   // האיברים הפנימיים 
// }
// neigh += arr[arr.length-2]; // האיבר ה2 מהסוף

// console.log(neigh);

//------------------------------   question 6   ----------------------------

// let arr =[7,2,6,1,4,3,5];
// let arr1 = "";
// let test = 0;
// for(let b =48; b <= 57 ; b++){
//     for(let i=0; i< arr.length; i++){
//         if(arr[i].toString() === String.fromCharCode(b).toString()){
//            arr1+=arr[i].toString() 
//         }
//     }
// }

// console.log(arr1);
