// Crear una lista de contactos con datos predefinidos

let contactos = [
    {
    nombre: 'Daniel ',
    apellido: 'Gonzales',
    Direccion: '27 calle 8 avenida,San Pedro Sula, Cortes',
    Telefono: '+504-85441020'},
{
    nombre: 'Jose',
    apellido: 'Murillo',
    Direccion: '27 calle 8 avenida,San Pedro Sula, Cortes',
    Telefono: '+504-85441020'},
{
    nombre: 'Arthur',
    apellido: 'Sabillon',
    Direccion: '27 calle 8 avenida,San Pedro Sula, Cortes',
    Telefono: '+504-85441020'},
{
    nombre: 'Oscar ',
    apellido: 'Arias',
    Direccion: '27 calle 8 avenida,San Pedro Sula, Cortes',
        Telefono: '+504-85441020'
    },
    {
    nombre: 'Carlos',
    apellido: 'Martinez',
    Direccion: '27 calle 8 avenida,San Pedro Sula, Cortes',
    Telefono: '+504-85441020'}
];
   

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

function añadirContacto(contacto) {
    contactos.push(contacto);
}

function imprimirContactos() {
    for(let i = 0; i < contactos.length; i++) {
        console.log(contactos[i]);
    }
}

// Ejemplo de uso:
añadirContacto({
    nombre: 'Armando',
    apellido: 'Paredes',
    Direccion: 'San Antonio, Ceiba, Atlantida',
    Telefono: '+504-83457810',
},
{
    nombre: 'Luis',
    apellido: 'Peralta',
    Direccion: 'Santa Lucia, Comayagua, Honduras',
    Telefono: '+504-83154175'
    },
{
    nombre: 'sergio',
    apellido: 'Hernandez',
    Direccion: 'San Pedro Sula, Cortes, Honduras',
    Telefono: '+504-83124895'
});  // Añade un nuevo contacto

//imprimirContactos(); // Imprime los contactos

// Ejemplo de uso:
añadirContacto('David Galeano');  // Añade un nuevo contacto
imprimirContactos();  // Imprime los contactos
borrarContacto('Amner Martinez');  // Borra un contacto
imprimirContactos();  // Imprime los contactos de nuevo
añadirContacto('Manuel Reina'); //Añade un nuevo contacto
imprimirContactos(); // Imprime los Contact
añadirContacto('Ariel Guardado');  // Añade un nuevo contacto
imprimirContactos();  // Imprime los contactos
añadirContacto('Alex Herrera');  // Añade un nuevo contacto
imprimirContactos();  // Imprime los contactos