//1
let listaDeContactos = [
  { nombreApellido: "Estebillan Vanegas" },
  { nombreApellido: "Policarpa Salavarrieta" },
  { nombreApellido: "Angela Camacho" },
  { nombreApellido: "Adriana Ocampo" },
];
console.log(listaDeContactos.length);
console.log("Primer contacto:" + listaDeContactos[0].nombreApellido);
console.log("Ultimo contacto:" + listaDeContactos[3].nombreApellido);
//2
let nuevoContacto = { nombreApellido: "Ada Lovelace" };
listaDeContactos.push(nuevoContacto);
console.log(listaDeContactos);
//3
listaDeContactos.pop();
//4
console.log(listaDeContactos);
//5
const gitHub = "Vamos a Git Hub 👻";
