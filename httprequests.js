// const firstReq = new XMLHttpRequest();

// firstReq.addEventListener("load", ()=> {
//      console.log("IT WORKS");
//      console.log(firstReq.responseText);
// })

// firstReq.addEventListener("error", ()=> {
//     console.log("Error");
// })
// firstReq.open('GET', 'https://pokeapi.co/api/v2/pokemon/charizard')
// firstReq.send();
// console.log("REQUEST SENT");

fetch('https://pokeapi.co/api/v2/pokemon/charizard').then((res)=> {
    res.json().then((data)=> console.log(data));
}).catch((err)=>console.log(err));