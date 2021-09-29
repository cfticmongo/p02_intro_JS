// Variables y constantes en JavaScript

// Identificadores (nombre)

// - Tienen que comenzar por letra o el símbolo _ ó $
// - No se pueden usar las palabras reservadas 
// - (Buena práctica) utilizar camelCase o DobleCamelCase
// - Las constantes a veces se declaran con MAYÚSCULAS
// - (Clean code) utilizar siempre nombres semánticos

// Declaración de variables

// A partir de ECMA6 con la palabra reservada let

let surname; // no se define el tipo de dato

// Versión clásica con la palabra reservada var

var email; 

// Variables globales (mala práctica)

phone = '+3491876453';

// Declaración de constantes

// versión clásica (anterior a ECMA6)

var URL = 'https://...';

// A partir de ECMA6 con la palabra reservada const

const vendorURL = 'https://...';

// Se pueden declarar varias variables o constantes a la vez separando por , los
// identificadores

let postalCode, 
    city, 
    address;

console.log(phone);
