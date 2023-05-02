//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos={
    nombre:"javier",
    apellido:"LR", 
    edad:20, 
    altura:181,
    desarrollador: true
}
//- Una variable que obtenga tu edad a partir del objeto anterior
const nom= datos.nombre;
console.log(nom)
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const list={...datos};
console.log(list);
const amigos=[
    {nombre: "Yahir", apellido: "Ramirez", edad:25, altura:175, desarrollador:false},
    {nombre: "Karla", apellido: "Gonzalez", edad:23, altura:175, desarrollador:false},
]
//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const lista= amigos.sort((a,b)=>b.edad-a.edad);
console.log(lista)