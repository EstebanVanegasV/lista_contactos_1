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
  { id: 2, nombre: "Estebillan Vanegas", telefono: "3232898905" },
  { id: 3, nombre: "La Pola Salavarrieta", telefono: "2345678901" },
  { id: 4, nombre: "Angela Camacho", telefono: "3126789423" },
  { id: 5, nombre: "Ada Lovelace", telefono: "3156783415" },
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

//Lista de contactos #2
const crearContacto = {
  id: 1,
  nombres: "Juan Esteban",
  apellidos: "Vanegas Vela",
  telefono: 3175453697,
  ubicacion: { a: "Mosquera Cundinamarca", b: "cra 7 # 12-56" },
};
function agregarNuevo(contacto) {
  listaDeContactos.push(contacto);
}
agregarNuevo(crearContacto);

//review funcion actualizar
function actualizarContacto(id, nuevoContacto) {
  const contactoExistente = listaDeContactos.find(
    (contacto) => contacto.id === id
  );
  if (!contactoExistente) {
    return "no se encontro contacto con ese id";
  }
  contactoExistente.nombre = nuevoContacto.nombre;
  contactoExistente.telefono = nuevoContacto.telefono;
  return "Contacto actualizado";
}
const nuevoContacto = {
  id: 2,
  nombre: "Carol Leon",
  telefono: 3176252408,
};
const resultado = actualizarContacto(nuevoContacto.id, nuevoContacto);
console.log(resultado);
