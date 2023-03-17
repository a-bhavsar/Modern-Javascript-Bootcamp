// function add(){
//     console.log("add called");
//     hehe();
// }

// function hehe(){
//     console.log("hehe called");
//     good();
// }

// function good(){
//     console.log("good called");
// }

// add();

// console.log("First");
// setTimeout(() => {
//     console.log("Dusra");
// }, 3000);
// setTimeout(() => {
//     console.log("Pehla");
// }, 3000);
// console.log("Second");

// async function greet(){
//     return "HELLO";
// }

// greet().then((res)=> console.log("Promise resolved with " + res));

// async function add(x, y){
//     return new Promise((resolve, reject)=> {
//         if(typeof x !== 'number' || typeof y !== 'number'){
//             reject("Rejected");
//         }
//         else{
//             resolve(x + y);
//         }
//     });
// }

// add(3, 5).then((val)=> {
//     console.log("Approved with " + val);
// })
// .catch((val)=> {
//     console.log("Rejected with " + val)
// })

// let res;
// async function getPlanets(){
//     res = await axios.get('https://pokeapi.co/api/v2/pokemon/charizard');
//     console.log(res);
// }
// getPlanets();
// console.log(res);

// async function add(x, y){
//     return x+y;
// }
// console.log(add(2,3).then((res)=> console.log(res)));

// function printAll(){

//     setTimeout(() => {
//         console.log("Hello");
//     }, 0.0001);
    
// }

// printAll();

const changeBodyColor = (delay) => {
    return new Promise()
}

async function lightShow(){
    await console.log("Hello");
    await console.log("World");
    await console.log("x");
    await console.log("y");
    await console.log("z");
    await console.log("hehe");
}