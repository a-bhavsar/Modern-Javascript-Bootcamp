function makeColor(r, g, b){
    const color = {}
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`
    }
    color.hex = function(){
        const{r, g, b} = this;
        return `#${((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}`
    }
    return color;
}

const firstColor = makeColor(35,255,150);
console.log(firstColor.rgb());
console.log(firstColor.hex());

function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function(){
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})`
}

Color.prototype.hex = function(){
    const{r, g, b} = this;
    return `#${((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}`
}

Color.prototype.rgba = function(a=1){
    const {r,g,b}=this;
    return `rgba(${r},${g},${b},${a})`
}

class Color1{
    constructor(r,g,b, name){
        console.log("Inside Constructor")
        console.log(r,g,b);
        this.r = r;
        this.g = g;
        this.b = b;
        this.name=name;
    }

    greet(){
        return `HELLO from ${this.name}`
    }

    innerRGB(){
        const {r,g,b} = this;
        return `${r},${g},${b}`;
    }

    rgb(){
        const rgbValue = this.innerRGB();
        return `rgb(${rgbValue})`
    }
}

const c1 = new Color1(255, 0, 0, 'red');