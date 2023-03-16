// const btn = document.querySelector('button');
// btn.addEventListener('mouseover', ()=> {
//     console.log("They hovered over me");
//     let width = Math.floor(Math.random()*window.innerWidth);
//     let height = Math.floor(Math.random()*window.innerHeight);
//     btn.style.top = `${height}px`;
//     btn.style.left = `${width}px`;
// })

const input  = document.createElement('input');
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter Your Name");
document.body.appendChild(input);
const currInput = document.querySelector('input');
currInput.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        const value = currInput.value;
        const p = document.createElement('p');
        p.innerText = value;
        currInput.value = '';
        document.body.appendChild(p);
    }
})