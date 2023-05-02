//- Un nuevo Set con los nombres de tu familia
const mi_F=["Javier_LH","Maria_RG","Fernando_LR","Javier_LR"];
const F= new Set(mi_F);
console.log(F);
//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
F.add("Javier_LR");
console.log(F);
//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
F.add("Javascript");
console.log(F);