//import modules

import add from "./modulos/add.js";
import { sub2 } from "./modulos/sub.js";
import moment from "moment-timezone";

const a=10;
const b=5;
const c=2;

console.log(add(a,b));
console.log(sub2(a,b,c));
let hoje = moment.defineLocale("America/Los_Angeles");

console.log(hoje);