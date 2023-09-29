// Crear una lista de contactos con datos predefinidos

let contactos = {
    {nombre: 'Daniel Gonzales'},
    {nombre: 'Jose Murillo'},
    { nombre: 'Arthur Sabillon' },
    {nombre: 'Oscar Arias'}
};
   

// Función para añadir un nuevo contacto a la lista
function añadirContacto(nombre) {
    contactos.push({nombre});
    console.log(nombre + ' ha sido añadido a la lista de contactos.');
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombre) {
    contactos = contactos.filter(contacto => contacto.nombre !== nombre);
    console.log(nombre + ' ha sido borrado de la lista de contactos.');
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
    
    contactos.forEach(contacto => console.log(contacto.nombre));
}

// Ejemplo de uso:
añadirContacto('David Galeano');  // Añade un nuevo contacto
imprimirContactos();  // Imprime los contactos
borrarContacto('Amner Martinez');  // Borra un contacto
imprimirContactos();  // Imprime los contactos de nuevo
