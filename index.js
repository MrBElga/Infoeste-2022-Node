//var, let e const 

const x = 10;
let   y = 20;


function hello(){
    let y = 5;
    console.log(y);
    if(y==5)
    {
        let y=10;
        console.log(y);
    }
}

hello();
console.log(x);
console.log(y);