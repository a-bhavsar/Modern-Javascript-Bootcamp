// alert("It's Working!!!");

if(1==1){
    console.log("It's true");
}

let rating = 2;
if(rating===3){
    console.log("Rating is 3");
}
else if(rating>3){
    console.log("Rating is greater than 3");
}
else{
    console.log("Rating is less than 3");
}
rating = 5;
if(rating){
    console.log("TRUTHY");
}
else{
    console.log("FALSY");
}

(rating) ? console.log("hehe") : console.log("Woho");

let myArray = [1, 4.23, "ARPIT", "BANSI", true, NaN, undefined];
console.log(myArray);
myArray[7] = "Hehe";
console.log(myArray);
myArray[100] = "Hehe";
console.log(myArray);
myArray.push("Yoho");
console.log(myArray);
myArray.pop()
console.log(myArray);
myArray.shift()
console.log(myArray);
myArray.unshift("423");
console.log(myArray);

let firstArray = ["hehe", "woho"];
let secondArray = ["KTMBK", "Darasal"];
let newArray = firstArray.concat(secondArray);
console.log(newArray);



const myNewArray = [0,0123, 4567, 7888454548445454545454554545, 1000000000000000000000000000, 700000000000000000000000000000000000000000000000000000000000000000];
myNewArray.sort()
console.log(myNewArray);

let tempArray1 = [1,2,3];
let tempArray2 = [1,2,3];
console.log(tempArray1 == tempArray2);
console.log(tempArray1 === tempArray2);

for(let i=0; i<5; i++){
    console.log(i+1);
}
// else{
//     console.log("End of the for loop")
// }


let myArray2 = [[1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]];

for(let i=0; i<myArray2.length; i++){
    for(let j=0; j<myArray2[i].length; j++){
        console.log(myArray2[i][j]);
    }
}

let i=0;
while(i<5){
    console.log(i);
    i++;
}

for(let i=1; i<=10; i++){
    console.log(i);
    if(i==5){
        console.log("Breaking at ", i);
        break;
    }
}

let artists = ["Arijit Singh", "Simpal Kharel", "Darshan Raval", "Zaeden", "Alan Walker"];
for(let artist of artists){
    console.log(artist);
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
for(let row of matrix){
    let sum = 0;
    for(let num of row){
        sum+=num;
    }
    console.log(sum);
}

let newObject =  {
    name : "Arpit",
    age : 22, 
    company : "Argusoft",
    interests : ["Competitive Programming", "Gaming", "Reading"]
}

for(let key of Object.keys(newObject)){
    console.log(key, newObject[key]);
}

for(let key in newObject){
    console.log(key, newObject[key]);
}