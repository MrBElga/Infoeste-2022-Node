//var, let e const 

// const x = 10;
// let   y = 20;

// function hello(){
//     let y = 5;
//     console.log(y);

//     if(y==5)
//     {
//         let y=10;
//         console.log(y);
//     }
// }

// hello();
// console.log(x);
// console.log(y);

// //Number

// let a = 20;
// let b = 2.5;
// let c = -2.5;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(a+b);
// console.log(a/b+c);

//String

// let nome = "Nome";
// let sobrenome = "Sobrenome";

// console.log(typeof nome);
// console.log(typeof sobrenome);
// console.log(nome+" "+sobrenome);
// console.log(nome.toUpperCase(),sobrenome.toUpperCase());
// ctrl c k
// ctrl c u

//JSON
let obj ={
    nome: "Nome",
    sobrenome: "Sobrenome",
    idade: 25
};

let obj_text = JSON.stringify(obj);
console.log(JSON.stringify(obj_text));
let obj_obj = JSON.parse(obj_text);
console.log(obj_obj);
