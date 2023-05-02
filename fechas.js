//- La fecha de hoy
const fecha= new Date();
console.log("la fecha es: "+ fecha);
//- La fecha de tu nacimiento
const nacimiento= new Date(2003,03,05);
console.log("mi fechas es:"+ nacimiento);
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
if(fecha>nacimiento){
    var mayor= true;
}
console.log(mayor);
//- Una variable que contenga el día de tu nacimiento
let dia=nacimiento.getDate();
console.log(dia);
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mes=nacimiento.getMonth()+1;
console.log(mes);
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let año=nacimiento.getFullYear();
console.log(año);