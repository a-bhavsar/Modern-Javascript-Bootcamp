const btn = document.querySelector("button");

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`
//                 }, 5000);
//             }, 4000);
//         }, 3000);
//     }, 2000);
// }, 1000);

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//     const documentBoundary = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right;

//     if(elRight + amount > documentBoundary){
//         onFailure();
//     }
//     else{
//         const currLeft = element.getBoundingClientRect().left;
//         element.getBoundingClientRect();
//         setTimeout(()=>{
//             element.style.transform = `translateX(${currLeft + amount}px)`
//             onSuccess();
//         }, delay)
//     }   
// }

// moveX(btn, 100, 1000, ()=> {
//     console.log("Hehe");
//     moveX(btn, 500, 1000, ()=> {
//         console.log("hehehehhee");
//         moveX(btn, 1000, 1000, ()=> {
//             console.log("Can we go further");
//         }, ()=> {
//             console.log("Terrible");
//         })
//     }, ()=> {
//         console.log("Failed");
//     })
// }, ()=> {
//     console.log("Failure");
// })

//Refactoring with Promises

const moveX = (element, amount, delay) => {

    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const documentBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if(elRight + amount > documentBoundary){
                reject();
            }
            else{
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            } 
        }, delay);

        
    })     
}

moveX(btn, 100, 1000).then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.catch(()=> {
    console.log("OUT OF SPACE");
})