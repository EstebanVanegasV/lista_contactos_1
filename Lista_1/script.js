const contactos = [
  {
    id: 1,
    nombres: "Juan",
    apellidos: "Vanegas",
    telefono: "telefono1",
    ubicacion: { ciudad: "Ciudad1", direccion: "Direccion1" },
  },
  {
    id: 2,
    nombres: "Esteban",
    apellidos: "Vela",
    telefono: "telefono2",
    ubicacion: { ciudad: "Ciudad2", direccion: "Direccion2" },
  },
  {
    id: 3,
    nombres: "Camila",
    apellidos: "Vanegas",
    telefono: "telefono3",
    ubicacion: { ciudad: "Ciudad3", direccion: "Direccion3" },
  },
];

function imprimirContactos() {
  console.log("Contactos:");
  contactos.forEach((contacto) => {
    console.log(
      `${contacto.id}. ${contacto.nombre} ${contacto.apellido}, Telefono: ${contacto.telefono}, Ubicacion: ${contacto.ubicacion.ciudad}, ${contacto.ubicacion.direccion}`
    );
  });
}

function agregarContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
  const nuevoContacto = {
    id,
    nombres,
    apellidos,
    telefono,
    ubicacion: {
      ciudad,
      direccion,
    },
  };
  contactos.push(nuevoContacto);
  console.log(`Se ha añadido a ${nombre} ${apellido} a la lista.`);
}

function borrarContacto(id) {
  const index = contactos.findIndex((contacto) => contacto.id === id);
  if (index !== -1) {
    const contactoEliminado = contactos.splice(index, 1)[0];
    console.log(
      `Se ha eliminado a ${contactoEliminado.nombres} ${contactoEliminado.apellidos} de la lista`
    );
  } else {
    console.error("ID de contacto invalido.");
  }
}

function actualizarContacto(id, nuevosDatos) {
  const index = contactos.findIndex((contacto) => contacto.id === id);
  if (index !== -1) {
    contactos[index] = { ...contactos[index], ...nuevosDatos }; //tecnica "spread"
    console.log(`Se ha actualizado el contacto ${id}.`);
  } else {
    console.log("ID de contacto invalido.");
  }
}
