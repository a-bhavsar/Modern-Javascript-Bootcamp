function add(){
    console.log("add called");
    hehe();
}

function hehe(){
    console.log("hehe called");
    good();
}

function good(){
    console.log("good called");
}

add();

console.log("First");
setTimeout(() => {
    console.log("Dusra");
}, 3000);
setTimeout(() => {
    console.log("Pehla");
}, 3000);
console.log("Second");