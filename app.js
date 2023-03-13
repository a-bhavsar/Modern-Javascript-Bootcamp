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