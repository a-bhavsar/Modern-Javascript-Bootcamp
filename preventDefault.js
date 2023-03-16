const inp = document.querySelector("#in");
const checkBox = document.querySelector("#check");
const veggie = document.querySelector("#veggie");

const formData = {};

const ele = document.querySelector("#signup-form");
inp.addEventListener('input', function(e){
    // alert("You submitted the form");
    console.log(e);
    formData['inp'] = e.target.value;
})
checkBox.addEventListener('input', function(e){
    // alert("You submitted the form");
    console.log(e);
    formData['checkBox'] = e.target.value;
})
veggie.addEventListener('input', function(e){
    // alert("You submitted the form");
    console.log(e);
    formData['veggie'] = e.target.value;
})

ele.addEventListener('submit', (e)=>{
    console.log(formData);
    e.preventDefault();
})

console.log(formData);