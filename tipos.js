// Tipos de datos en JS

// Tipos primitivos

// string o cadenas de texto (comillas simples o dobles)

let email = 'juan@gmail.com';

// Tienen una serie de secuencias de escape

let city = 'Villa de \nMadrid';
console.log(city);

let address = 'Avenida de O\'Donell';
console.log(address);

// number  (*bigint reciente y aun no hay compatibilidad 100%)

let result = 8.65; // Los flotantes usan el punto

// boolean (true | false)

let loading = false;

// undefined (tipo-valor)

let brand; // Cuando declaramos pero no inicializamos una variable tiene el valor undefined

console.log(typeof brand);

// null (tipo-valor)

let postalCode = null; // 'Sirve' para inicializar una variable cuando no tenemos un valor por defecto

// Tipos compuestos

// Arrays

let fruits = ['oranges','apples','grapes'];

console.log(typeof fruits); // Devuelve object

// Objetos

let player = {
    name: 'Cristiano',
    surname: 'Ronaldo',
    goals: 0
}

// El tipado de datos en JS es débil y dinámico

// Es débil porque recibe el tipo de dato por inferencia del valor

let url = 'https://google.com'; // El valor infiere el tipo string

// Es dinámico porque puede cambiar de tipo en cualquier momento

url = 12e8;