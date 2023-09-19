// //1
// let listaDeContactos = [
//   { nombreApellido: "Estebillan Vanegas" },
//   { nombreApellido: "Policarpa Salavarrieta" },
//   { nombreApellido: "Angela Camacho" },
//   { nombreApellido: "Adriana Ocampo" },
// ];
// console.log(listaDeContactos.length);
// console.log("Primer contacto:" + listaDeContactos[0].nombreApellido);
// console.log("Ultimo contacto:" + listaDeContactos[3].nombreApellido);
// //2
// let nuevoContacto = { nombreApellido: "Ada Lovelace" };
// listaDeContactos.push(nuevoContacto);
// console.log(listaDeContactos);
// //3
// listaDeContactos.pop();
// //4
// console.log(listaDeContactos);
// //5
// const gitHub = "Vamos a Git Hub 👻";

//segunda solucion
//1
let listaDeContactos = [
  { nombre: "Estebillan Vanegas", telefono: "3232898905" },
  { nombre: "La Pola Salavarrieta", telefono: "2345678901" },
  { nombre: "Angela Camacho", telefono: "3126789423" },
  { nombre: "Ada Lovelace", telefono: "3156783415" },
];
console.log(listaDeContactos);

function agregarContacto(nombre, telefono) {
  let nuevoContacto = { nombre: "Adriana Ocampo", telefono: "3256784128" };
  listaDeContactos.push(nuevoContacto);
  console.log(`Contacto ${nombre} agregado.`);
}
function eliminarContacto(nombre) {
  let indice = listaDeContactos.findIndex(
    (contacto) => contacto.nombre === nombre
  );
  if (indice !== -1) {
    listaDeContactos.splice(indice, 1);
    console.log(`Contacto ${nombre} eliminado.`);
  } else {
    console.log(`El contacto ${nombre} no fue encontrado.`);
  }
}
function imprimirConsola() {
  console.log("Lista de contactos:");
  listaDeContactos.forEach((contacto) => {
    console.log(`${contacto.nombre} - Telefono: ${contacto.telefono}`);
  });
}
//5
const gitHub = "Subiendo a Git Hub";
