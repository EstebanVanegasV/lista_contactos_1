const contactos = [
  { nombre: "Juan", apellido: "Vanegas" },
  { nombre: "Esteban", apellido: "Vela" },
  { nombre: "Camila", apellido: "Vanegas" },
];

function imprimirContactos() {
  console.log("Contactos:");
  contactos.forEach((contacto) => {
    console.log(`${contacto.nombre} ${contacto.apellido}`);
  });
}

function agregarContacto(nombre, apellido) {
  const nuevoContacto = { nombre, apellido };
  contacto.push(nuevoContacto);
  console.log(`Se ha añadido a ${nombre} ${apellido} a la lista.`);
}

function borrarContacto(index) {
  if (index >= 0 && index < contactos.length) {
    const contactoEliminado = contactos.splice(index, 1)[0];
    console.log(
      `Se ha eliminado a ${contactoEliminado.nombre} ${contactoEliminado.apellido} de la lista`
    );
  } else {
    console.error("Indice de contacto invalido.");
  }
}
