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

function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

for(let i=1; i<=5; i++){
    rollDie();
}

function greet(nickname) {
    console.log("Hi",nickname);
}

greet("Arpit");

function sum(x, y){
    return x+y;
}

let mySum = sum(3,5);
console.log(mySum);

function isValidPassword(password, username){
    if(password.length >= 8){
        if(password.indexOf(" ")===-1){
            if(password.indexOf(username)===-1){
                return true;
            }
            return false;
        } 
        return false;
    }
    return false;
}

let flag = isValidPassword('adadadaad', 'arpit');
let flag2 = isValidPassword('arpit123', 'arpit');
console.log(flag, flag2);


function average(arr){
    let sum = 0;
    for(let num of arr){
        sum+=num;
    }
    return sum/arr.length;
}

let myAvg = average([2,5]);
console.log(myAvg);

myAvg = average([1,2,3,4,5,6,7,8,9,10]);
console.log(myAvg);

function isPangram(str){
    str = str.toLowerCase();
    // console.log(str);
    for(let char = 97; char<=122; char++){
        char = String.fromCharCode(char);
        // console.log(char);
        if(str.indexOf(char)===-1){
            // console.log("Returning false");
            return false;
        }
        char = char.charCodeAt(0);
        // console.log(char);
    }
    return true;
}

console.log(isPangram("The five boxing wizards jump quick"));

function getCard(){
    const values = ['2', '3','4','5','6','7','8','9','A','J','Q','K'];
    const houses = ["Clubs", "Spades", "Hearts", "Diamonds"]
    const values_random = Math.floor(Math.random()*values.length)+1;
    const houses_random = Math.floor(Math.random()*houses.length)+1;
    console.log("hehe");
    return `You got ${values[values_random]} of ${houses[houses_random]}`;
}

console.log(getCard());

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    alert("Yoho");
});

console.log(hello);
var hello = "Arpit"; // Hoisted


// console.log(hello2);
// let hello2 = "Arpit"; //Not  Hoisted

// console.log(hello3);
// const hello3= "Arpit"; // Not Hoisted

const numbers = [1,2,3,4,5,6,7,8,9];
numbers.forEach(function(el){
    console.log(el);
})

function hehe(){
    console.log("hehe");
}

numbers.forEach(hehe);

const doubleNumbers = numbers.map(function(el){
    return el * 2;
});

console.log(doubleNumbers);

const names = ["Arpit", "Bansi", "Raj", "Sanskruti", "Alibaba00"];
const newNames = names.map(function(name){
    return name.split("").join("..")
})
console.log(newNames);

let newFunction = (x) => {
    return x*x;
}

console.log(newFunction(2));

const name = names.find(n=>n.toLowerCase().startsWith('a'));
console.log(name);

const odds = numbers.filter(num => num%2===1);
console.log(odds);

const evens = numbers.filter(num => num%2!==1);
console.log(evens);

const boolValue = numbers.every(n => n==10);
console.log(boolValue);

const boolValue1 = numbers.some(n => n==1);
console.log(boolValue1);

const boolValue2 = numbers.some(n => "Truthy");
console.log(boolValue2);

const boolValue3 = numbers.some(n => "");
console.log(boolValue3);

const ascendingSort = [43,56,1,2,789,42];
ascendingSort.sort((a,b) => a-b);
console.log(ascendingSort);

const descendingSort = [43,56,1,2,789,42];
descendingSort.sort((a,b) => b-a);
console.log(descendingSort);

const friends = [
    {
        firstName : "Arpit",
        lastName : "Z",
        semester : 8
    },
    {
        firstName : "Bansi",
        lastName : "Gadhvi",
        semester : 4
    },
    {
        firsobjecttName : "Sanskruti",
        lastName : "Sirsat",
        semester : 8
    },
    {
        firstName : "Raj",
        lastName:undefined,
        semester : -1
    },
    {
        firsobjecttName : "Bansi",
        lastName : "Gadhvi",
        semester : 4
    },
    {
        firstName : "Sanskruti",
        lastName : "Sirsat",
        semester : 8
    },
    {
        firstName : "Sanskruti",
        lastName : "Zxy",
        semester : 8
    }
        
]
console.log("=======",friends);
function compare( a, b ) {
    if ( a.lastName < b.lastName ){
      return -1;
    }
    if ( a.lastName > b.lastName ){
      return 1;
    }
    return 0;
  }
friends.sort(compare)
console.log("x8f6xc86s",friends);

const product = numbers.reduce((total, currValue)=> total*currValue);
console.log(product);

const votes = [true, false, true, true, true, false, true, true, true, false];

const voteObj = votes.reduce((accumulator, currValue)=>{
    if(!accumulator['true']){
        accumulator['true'] = 0;
    }
    if(!accumulator['false']){
        accumulator['false'] = 0;
    }
    if(currValue===true){
        accumulator['true']++;
    }
    else{
        accumulator['false']++;
    }
    return accumulator;
}, {})
console.log(voteObj);


function multiply(x, y=0){
    return x*y;
}

console.log(multiply(3));

console.log(Math.max(numbers)); // NaN

console.log(Math.max(...numbers));

const num1 = [1,2,3,4,5];
const num2 = [6,7,8,9,10];
const mergedNums = [...num1, ...num2];
console.log(mergedNums);

for(let friend of friends){
    console.log(friend);
    console.log({...friend});
}

function sum(){
    console.log(arguments);
}

const [first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third);

const {firstName, lastName, semester} = friends[0];
console.log(firstName, lastName, semester);

let [,,{semester : currSem}] = friends;
console.log(currSem);

const fullName = ({firstName, lastName}) => {
    console.log(firstName, lastName);
}

fullName(friends[0]);