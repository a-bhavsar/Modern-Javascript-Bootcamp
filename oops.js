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
        this.calcHSL();
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

    calcHSL(){
        let {r, g, b } = this;
        r/=255;
        g/=255;
        b/=255;

        let minColor = Math.min(r,g,b);
        let maxColor = Math.max(r,g,b);
        let delta = maxColor - minColor;
        let h = 0;
        let s = 0;
        let l = 0;
        if(delta===0) h=0;
        else if(maxColor===r){
            h = ((g-b)/delta) %6;
        }
        else if(maxColor===g){
            h = ((b-r)/delta)  + 2;
        }
        else{
            h = (r-b)/delta + 4;
        }

        h = Math.round(h*60);

        if(h<0){
            h+=360;
        }
        l = (maxColor + minColor)/2;

        s = delta==0?0 : delta/(1-Math.abs(2*l-1));

        s = +(s*100).toFixed(1);
        l = +(l*100).toFixed(1);

        this.h =h;
        this.s =s;
        this.l =l;
    }

    hsl(){
        const {h, s, l} = this;
        return `hsl(${h},${s}, ${l})`
    }

    opposite(){
        let {h,s,l} = this;
        h = (h+180)%360;
        return `hsl(${h}, ${s}, ${l})`
    }
}

const c1 = new Color1(255, 0, 0, 'red');

class Pet{
    constructor(name, age) {
        this.name= name;
        this.age= age;
    }

    eat(){
        return `${this.name} is eating!`
    }
}

class Cat extends Pet{
    meow(){
        return 'MEOWWWW';
    }
}

class Dog extends Pet{
    
    bark(){
        return `WOOOF!`
    }

    eat(){
        return `${this.name} scarfs his food`;
    }
}